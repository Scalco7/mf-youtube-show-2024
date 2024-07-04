# My Tube

Este é um desafio de microserviços desenvolvido como parte do desafio proposto pela iCasei. O projeto consiste em vários microserviços que utilizam a API do YouTube para buscar e exibir vídeos. Os vídeos podem ser assistidos, pesquisados e marcados como favoritos. E tudo isso sem utilizar nenhum framework JS.
<br>

## Estrutura do Projeto

O projeto é composto pelos seguintes microserviços:

- **API**: Microsserviço responsável pela conexão com o banco de dados SQLite.

- **Main**: Microsserviço principal do Frontend, responsável pelo agrupamento e renderização dos microsserviços de Frontend.

- **Auth-Frontend**: Microsserviço responsável por exibir o necessário para a página de login e cadastro.

- **Auth-Backend**: Microsserviço responsável por fazer a ponte entre a API e o Auth-Frontend, enviando somente os dados necessários.

- **Drawer-Frontend**: Microsserviço responsável por exibir a navBar do projeto.

- **Drawer-Backend**: Microsserviço responsável por fazer a ponte entre a API e o Drawer-Frontend, estabelecendo também uma coneção websocket para atualizar o contator de vídeos favoritos.

- **Video-Frontend**: Microsserviço responsável por exibir a lista de vídeos, e também disponibilizar uma barra de pesquisa.

- **Video-Backend**: Microsserviço responsável por fazer a ponte entre a API, a Api do Youtube e o Video-Frontend, e também enviando apenas os dados necessários.
  <br>

## Pré-requisitos

- Docker instalado

- Docker Compose instalado
  <br>

## Instalação

**Primeiro Passo**

Certifique-se de ter o [**Docker**](https://www.docker.com/products/docker-desktop/) e o **Docker Compose** instalados em seu computador.

<br>

**Segundo Passo**

Clone o repositório na sua máquina, você pode fazer isso com o comando:

    git clone https://github.com/Scalco7/mf-youtube-show-2024.git

<br>

**Terceiro Passo**

Rode o comando:

    docker compose up --build

ou

    docker compose up -d --build

e acesse a porta da página do [Main](http://localhost:4030 "Main") em seu navegador.

    Exemplo de rota do MAIN:

    http://localhost:4030

<br>

## Testes Automatizados

Para fazer os testes automatizados utilizei a bliblioteca do **Jest**.
Na raiz do projeto, certifique-se de ter instalado todas as dependências com:

    npm i

seguido de

    npm run install:all

agora, rode o comando

    npm run test:all

Nota: Você pode navegar em cada microserviço do projeto e rodar o comando

    npm run test

que fará com que cada teste seja executado isoladamente.

<br>

## Prototipação

- A **prototipação** do projeto foi feita através da plataforma Figma e pode ser acessada através do link abaixo.

- **[Protótipo](https://www.figma.com/design/0JjD5OgeZQZJnXk4yBWmIt "Link")**

<br>

## Notas

- Para fazer os fronts, utilizei apenas **Typescript**, **CSS** e **Html** conforme os requisitos impostos pelo desafio.

- Para fazer o **API** e os **BFFs**, utilizei **Node.js** com **Typescript** e **Express**.

- Conforme requisito do projeto, não foi utilizado JavaScript.

- O gerenciamento de microserviços foi feito sem a utilização de frameworks.

- Para fazer os testes automatizados utilizei a biblioteca do **Jest**.

- A responsividade foi testado no **Chrome** e **Firefox** e feita com **CSS**.

Tenho certeza que aprendi muito com o projeto, e com toda a jornada de criação e espero que tenham gostado.

<br>

## Created By

    Felipe Maciel Scalco
