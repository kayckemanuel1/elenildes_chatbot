
# ✨Elenildes chatbot: SOS discreto

Este projeto, por meio de um chatbot no WhatsApp, busca oferecer uma ferramenta rápida, confiável e discreta para o disparo de multiplos alertas para números de segurança préviamente cadastrados.


![Logo](https://i.postimg.cc/Y9gmJDCX/elenildeschatbot.png)


![GPLv3 License](https://img.shields.io/badge/Licença-GPL%20v3-red.svg) 
![status](https://img.shields.io/badge/whatsappweb.js-1.25.0-green.svg)
![linguagem](https://img.shields.io/badge/Linguagem-Javascript-yellow)
![status](https://img.shields.io/badge/WhatsApp_Web-2.2346.52-brightgreen.svg)
![status](https://img.shields.io/badge/Status-Em_desenvolvimento-blue)
![versao](https://img.shields.io/badge/Vers%C3%A3o-Beta_0.1-orange)




## ✅ Sobre o Projeto

Este é um projeto Open Source licenciado sob a GPL v3 (https://www.gnu.org/licenses/gpl-3.0.txt) ou posterior e sem fins lucrativos e está sendo desenvolvido, no momento, por uma unica pessoa. No Brasil, um país onde a criminalidade tem assustado cada vez mais a população, este projeto surgiu como uma tentativa de ajudar as pessoas a se manterem mais seguras por meio de um sistema discreto, confiável e rápido para o disparo de mensagens de alerta a contatos de segurança previamente configurados. Podendo também ser adaptado para o uso em outras finalidades, como disparo de alerta de catastrofe, ou convite para um evento para toda uma região.


## 🤔 Como funciona?




É necessário que a pessoa, familia ou instituição tenha um servidor pessoal (Como um servidor em nuvem, Respbarry PI, ou até mesmo um Desktop pessoal já que não receberá tantas requisições.) onde será hospedado este projeto e permitirá
que as pessoas cadastradas, possam usufruir do sistema.


⚙️ Funcionamento:

O funcionamento do chatbot é bem simples. Após o cadastro prévio do número de Whatsaapp de um usuário e seus respectivos três (número recomendado) ou mais números de segurança (números de pessoas em quem o usuário confia, como pai, mãe, amigo/a), o usuário pode, através de uma palavra-chave previamente configurada, enviar rapidamente uma mensagem de alerta para esses contatos de segurança. Além disso, o chatbot pode (e deve) ser camuflado como um comércio, uma pizzaria ou outro tipo de comercio, permitindo que o usuário acione o sistema de forma discreta e sem levantar suspeitas.
## 🖥️ Instalação 

🛠️ Dependências:
* frameworks:
   * node.js
   * npm ou outro gerenciador de pacotes da sua preferência (por padrão, o node.js já vem com o npm instalado)
* bibliotecas 

   * _qrcode-terminal 0.12.0_
   * _whatsapp-web.js 1.25.0_

🔽 Instalando as bibliotecas necessárias com npm:



abra o prompt de comandos do seu sistema operacional e instale as dependências:

```bash
 npm install qrcode-terminal
```
 ```bash
  npm install qrcode-terminal
```

Se você estiver usando um sistema Linux que não tem algumas bibliotecas específicas, será necessario instalar elas também:

```
sudo apt install -y gconf-service libgbm-dev
libasound2 libatk1.0-0 libc6 libcairo2 
libcups2 libdbus-1-3 libexpat1 
libfontconfig1 libgcc1 
libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 
libnspr4 libpango-1.0-0 
libpangocairo-1.0-0 libstdc++6 
libx11-6 libx11-xcb1 libxcb1 
libxcomposite1 libxcursor1 libxdamage1 libxext6
libxfixes3 libxi6 libxrandr2 
libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 
libnss3 lsb-release xdg-utils wget

```

### 👨‍👩‍👦‍👦 Configurando usuários:


abra a pasta onde foi feito o donwload do projeto e abra o arquivo "_cadastro.json_"
a configuração é bem simples você deverá preencher apenas nome do usuário, número de telefone usado no whatsapp pelo usuário e os números das pessoas de confiança deste usuário. 

Os números de telefone devem estar no formato internacional sem espaços, travessão e sem o caracter "+": 

Ex:
Suponha que seu número é ```+55 11 98888-7777```,
* sendo:

   +55 DDI (prefixo internacional) neste caso, o do Brasil.    
    11 DDD (prefixo regional) neste caso, o de São Paulo.

 o que você deverá preencher no campo de telefone é: ```5511988887777```

Veja um exemplo abaixo:

    {
    "usuarios": [
        {
        "nome": "Maria",
        "telefone": "551100000000",
        "confianca": [
            "551100000001"
        ]
        },
        
        {
        "nome": "Theo",
        "telefone": "551100000001",
        "confianca": [
            "551100000000",
            "551100000002",
            "551100000003"
        ]
        }
    ]
    }






## 🔄 Rodando o projeto

Após instalar as dependências do projeto e configurar os usuários, acesse a pasta onde foi feito o donwload do projeto, abra um prompt de comando e inicie o programa:
```
node start.js
```
Após isso, se tudo der certo, aparecera uma mensagem "QR Code gerado, escaneie com o WhatsApp" e logo depois um QR code. Para vincular a conta agora é recomendado que você tenha um número que será usado no WhatsApp apenas para a finalidade do chatbot evitando assim bugs, atrasos e inconvenientes.

* Para vincular é como se você fosse usar o WhatsApp Web, basta abrir o aplicativo do Whatsapp ou Whatsapp bussines no seu celular, clicar nos três pontos no canto superior direito e em conectar dispositivo, Logo depois basta escanear o QR code que apareceu no terminal.

Se tudo der certo, aparecerá no terminal a mensagem "O cliente está pronto!". 

E se você quiser testar se está funcionando corretamente, você pode enviar a mensagem "ping" para o chatbot, a resposta dele deverá ser "pong!".


## 🗃️ Documentações

* [Em breve]

