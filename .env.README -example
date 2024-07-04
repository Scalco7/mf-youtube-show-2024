# iCasei Challenge

<p align="center">
  <img src="https://raw.githubusercontent.com/izaqueIsrael/images/main/challenge.png" alt="Desafio iCasei">
</p>

Este é um desafio de microserviços desenvolvido como parte do desafio proposto pela iCasei. O projeto consiste em vários microserviços que utilizam a API do YouTube para buscar e exibir vídeos. Os vídeos podem ser assistidos, pesquisados e marcados como favoritos, sendo eles salvos no banco de dados MongoDB.

## Estrutura do Projeto

O projeto é composto pelos seguintes microserviços:

- **404**: Página de erro 404.

- **Back**: Microserviço responsável pela conexão com o banco de dados MongoDB.

- **BFF**: Backend-for-Frontend, que faz a ponte entre o back e o frontend.

- **Drawer**: Navbar do projeto.

- **Root**: Serviço principal do frontend.

- **Videos**: Microserviço que renderiza os vídeos na tela.

## Pré-requisitos

Para o método 1:

- Node.js instalado

- MongoDB instalado

Para o método 2:

- Docker instalado

- Docker Compose instalado

## Variáveis de Ambiente

As variáveis de ambiente estão contidas no .env.example na raiz do projeto e precisam ser preenchidas conforme o padrão:

- Se terminar em **_URL** deve ser preenchida com **http://localhost** ou, se estiver usando Docker, deve preencher com o nome do serviço ao invés de localhost. Com exceção de **MONGO_URL**, nele, coloque o endereço do seu servidor **MongoDB** por completo.

- Se terminar com **_PORT** você deve colocar uma porta válida como **3000** ou **5000**.

- Em **YOUTUBE_API_KEY** você deve colocar a sua chave da API do youtube.

- Em **YOUTUBE_URL** você deve colocar o endereço da **API** do youtube.

- Em **BACK_ROUTE** você deve colocar a rota do que será usada para o Back-End, como por exemplo: **api**.

Essas são as variáveis de ambiente que devem ser preenchidas:

    NOT_FOUND_URL=
    BACK_URL=
    BFF_URL=
    DRAWER_URL=
    ROOT_URL=
    VIDEOS_URL=
    MONGO_URL=
    YOUTUBE_URL=

    NOT_FOUND_PORT=
    BACK_PORT=
    BFF_PORT=
    DRAWER_PORT=
    ROOT_PORT=
    VIDEOS_PORT=

    YOUTUBE_API_KEY=

    BACK_ROUTE=

## Instalação

### Método 1

<br>

**Primeiro Passo**

Certifique-se de ter o [**Node.js**](https://nodejs.org/) instalado em seu computador.

<br>

**Segundo Passo**

Clone o repositório na sua máquina, você pode fazer isso com o comando:

    git clone https://github.com/izaqueIsrael/icasei.git

<br>

**Terceiro Passo**

Configure as variáveis de ambiente conforme explicado no tópico **Variáveis de ambiente** que está logo acima, mas resumindo, crie um arquivo **.env** na **RAIZ** do projeto, o **.env** tem que ser irmão de .env.example e certifique-se de preencher o conteúdo corretamente
conforme explicado no tópico **Variáveis de Ambiente** que está logo acima.

<br>

**Quarto Passo**

Você deve instalar o projeto, e o meio mais simples de fazer isso é ir para a **RAIZ** do projeto digitar:

    npm i

Em seguida, rode o comando:

    npm run install:all

Esse comando instalará todos os repositórios necessários em todos os projetos.

<br>

**Quinto Passo**

Por fim, com o **MongoDB** rodando, incie o projeto, você pode fazer isso digitando o comando:

    npm run start:all

ou indo em cada projeto e digitando:

    npm start

Agora é só acessar o localhost com a porta do serviço **ROOT** em seu navegador e poderá usufluir do projeto:

    Exemplo de rota do ROOT
    http://localhost:9000

### Método 2

<br>

**Primeiro Passo**

Certifique-se de ter o [**Docker**](https://www.docker.com/products/docker-desktop/) e o **Docker Compose** instalados em seu computador.

<br>

**Segundo Passo**

Clone o repositório na sua máquina, você pode fazer isso com o comando:

    git clone https://github.com/izaqueIsrael/icasei.git

<br>

**Terceiro Passo**

Se você é o avaliador(a), pode pegar o ".env" que enviei pelo email junto com a confirmação da conclusão do projeto e link do repositório e apenas alterar o **localhost** do **BACK_URL** para **http://back** e o **localhost** do **MONGO_URL** para **mongodb://mongodb:27017/youtube-video-service** que já vai dar certo.

<p align="center">
  <img src="https://raw.githubusercontent.com/izaqueIsrael/images/main/rodando-com-docker.png" alt="Desafio iCasei">
</p>

Agora, se não for, configure as variáveis de ambiente conforme explicado no tópico **Variáveis de Ambiente** que está logo acima, mas resumindo, crie um arquivo **.env** na **RAIZ** do projeto, o **.env** tem que ser irmão de .env.example e certifique-se de preencher o conteúdo corretamente e conforme explicado no tópico **Variáveis de Ambiente** que está logo acima.

<br>

**Quarto Passo**

Rode o comando:

    docker-compose up --build

ou

    docker-compose up -d --build

e acesse a porta a página do seu root em seu navegador.

    Exemplo de rota do ROOT:

    http://localhost:9000

<br>

## Testes Automatizados

Para fazer os testes automatizados utilizei a bliblioteca do **Jest** e todos os testes que **não envolvem API** podem ser testados sem que o projeto esteja sendo executado, porém, indico testar com o projeto sendo executado para testar logo tudo de uma vez.

Na raiz do projeto, certifique-se de ter instalado todas as dependências com:

    npm i

seguido de

    npm run install:all

agora, rode o comando

    npm run start:all

e em outra aba do terminal rode o comando

    npm run test:all

Nota: Você pode navegar em cada microserviço do projeto e rodar o comando

    npm run test

que fará com que cada teste seja executado isoladamente e se o serviço de **BFF, BACK e MongoDB NÃO** estiverem sendo executados, o teste da **api.ts** no microserviço **videos** terá falhas pois requer que o destino esteja ativo.

## Notas

- O gerenciamento de microserviços foi feito utilizando o framework **Single-SPA**.

- Para fazer os fronts, utilizei apenas **Typescript**, **CSS** e **Tailwind** conforme os requisitos impostos pelo desafio.

- Para fazer o **Back-End** e o **BFF**, utilizei **Node.js** com **Typescript** e **Express**.

- Conforme requisito do projeto, tudo foi tipado.

- Para fazer os testes automatizados utilizei a biblioteca do **Jest**.

- Toda a acessibilidade da plataforma foi testada através do **LightHouse** no **DevTools** do navegador.

- A responsividade foi testado no **Chrome** e **Firefox** e feita com **CSS** e **Tailwind**.

- O sistema de rotas foi feito utilizando o **root-config** do framework **Single-SPA**.

Espero que tenham gostado, porque fiz o projeto com muito carinho.

Se quiserem saber um pouco mais sobre mim, acesse meu site de portifólio [Cosmic](https://cosmic-tau.vercel.app/)

<p align="center">
  <img src="https://raw.githubusercontent.com/izaqueIsrael/images/main/cosmic.png" alt="Desafio iCasei">
</p>

## Autor

    Izaque

