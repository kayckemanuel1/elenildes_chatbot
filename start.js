
// Carregando o arquivo JSON
const fs = require('fs');
const dados = JSON.parse(fs.readFileSync('cadastro.json', 'utf-8'));

function verificarSeUsuario(telefone) {
    for (let usuario of dados.usuarios) {
        if (usuario.telefone === telefone) {
            return true;
        }
    }
    return false;
}

function obterConfianca(telefone) {
    for (let usuario of dados.usuarios) {
        if (usuario.telefone === telefone) {
            return usuario.confianca;
        }
    }
    return null;
}

function obterNome(telefone) {
    for (let usuario of dados.usuarios) { 
        if (usuario.telefone === telefone) {
            return usuario.nome;
        }
    }
    return null;
}

// Cria uma nova instância do cliente
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const client = new Client({
    authStrategy: new LocalAuth()
});

// Gera o QR Code para autenticação
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('QR Code gerado, escaneie com o WhatsApp');
});

// Indica quando o cliente está pronto
client.on('ready', () => {
    console.log('O cliente está pronto!');
});

// ---------------- Loop principal que escuta as mensagens recebidas -----------------
client.on('message', message => {

    // Captura do remetente da mensagem
    console.log(`Mensagem recebida de ${message.from}: ${message.body}`);
    var numeroDoRemetente = message.from.replace('@c.us', '');
    var ehUsuario = verificarSeUsuario(numeroDoRemetente);

    if (!ehUsuario) {
        message.reply('Usuário não cadastrado. Se você é o administrador do sistema, veja o tutorial de como cadastrar usuários em: https://github.com/kayckemanuel1/elenildes-chatbot');
    }

    if (ehUsuario) {

        // #  Ping (Teste de atividade) # 
        if (message.body === 'ping') {
            message.reply('pong!');
        }

        // #  Disparo do alerta # 
        if (message.body.startsWith('!pedido')) { 
            var confianca = obterConfianca(numeroDoRemetente);

            var agora = new Date();
            var data = agora.toISOString().split('T')[0];
            var hora = agora.toTimeString().split(' ')[0];
            var nome = obterNome(numeroDoRemetente);
            var descricao = message.body.slice(8).trim(); 
            var mensagem = '🚨 Você recebeu um alerta de ' + nome + '!🚨' + ' \n⏱️ Data e hora: ' + data + ', ' + hora + '\n💬 Descrição: "' + descricao + '"';

            for (let i = 0; i < confianca.length; i++) {
                var telefone = confianca[i];
                var chatId = telefone + '@c.us';

                client.sendMessage(chatId, mensagem).then(response => {
                    console.log('Mensagem enviada com sucesso para ' + telefone);
                }).catch(err => {
                    console.error('Erro ao enviar mensagem: ', err);
                });
            }
        }

    }
});

// Inicia o cliente
client.initialize();
