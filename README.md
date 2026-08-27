 # API Teste

Este é um projeto de estudos para o desenvolvimento de uma API Node.js utilizando o framework Express.

## 🚀 Como Iniciar o Projeto 

#### Siga o passo a passo abaixo para configurar o ambiente em sua máquina:

#### com o NODE.JS instalado, vamos criar nossa pasta onde colocaremos nossa API

#### dentro da maquina virtual para garantir que você estara na pasta home de seu usuario
```bash
cd ~          (enter)

#### vamos criar a pasta onde ficarao as API´S

mkdir apis    (enter)

#### vamos acessar a pasta

cd apis       (enter)


#### pronto agora podemos continuar 

```

### Clonando o repositorio para baixar o codigo

#### digite no terminal da sua maquina virtual

```bash
git clone https://github.com/alessandro-fukuta/apiteste.git
```

### 1. Inicializar o Gerenciador de Pacotes (NPM)
Para criar o arquivo padrão `package.json` sem a necessidade de responder às perguntas do terminal, execute o comando:
```bash
npm init -y
```

### 2. Instalar as Dependências
Para instalar o framework **Express** e adicioná-lo como uma dependência do projeto, utilize o comando:
```bash
npm install express
```

### 3. Abrir a porta 3000 no Firewall da maquina virtual
```bash
sudo ufw allow 3000
```

### 4. Em Redes da sua maquina virtual:
```bash
Abrir a porta 3000 no painel da azure (entrada)
```

### 5. EXECUTAR A API
```bash
node server.js
```

### 6. TESTAR O ENDPOINT
```bash

http://ip-da-sua-vm:3000/clientes

exemplo buscando por nome:

http://ip-da-sua-vm:3000/clientes?nome=beatriz

exemplo buscando por status (ativo ou inativo)

http://ip-da-sua-vm:3000/clientes?status=ativo

```

### Professor. Alessandro Fukuta
### Fatec Franca