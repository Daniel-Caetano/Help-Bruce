<!--
![dscatalog-catalog](https://github.com/Daniel-Caetano/Help-Bruce/blob/develop/assets/helpbruce.gif)

<!-- <h1 align="center">Helpe Bruce</h1> -->

<div align="center">

[![BlueBank](https://img.shields.io/badge/HelpBruce-name-blue.svg)](http://BlueBank.url.com)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/jonaslucenafilho/BlueBankPanAcademy/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

</div>

<p align="center">
	• <a href="#descricao">Descrição</a> •
	<a href="#gestao-do-projeto">Gestão do Projeto</a> •
	<a href="#versionamento">Versionamento do Código</a> •
	<a href="#arquitetura">Arquitetura do Projeto</a> •
	<a href="#documentacao">Documentação</a> •
	<a href="#tecnologias-dependencias">Tecnologias e Dependências</a> •
	<a href="#desenvolvedores">Desenvolvedores</a> •
</p>

<h1 id="descricao">
	<img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/000000/external-readme-is-a-easy-to-build-a-developer-hub-that-adapts-to-the-user-logo-color-tal-revivo.png"/>
  Descrição
</h1>

<p align="justify"> &emsp;&emsp;&emsp;Projeto final desenvolvido para o Dev For Tech de aceleração NodeJs, uma parceria entre a Acate e a GamaAcademy. O HelpBruce tem por objetivo aproximar a comunidade dev Gama Academy, nela um usuário poderá criar um post descrevendo um problema e outros usuários poderão responder auxiliando na solução do mesmo, desta forma a aplicação vai facilitar a troca de conhecimento e a criação de network, fazendo com que todos cresçam juntos.
</p>

<h1 id="gestao-do-projeto">
	<img height="28" src="https://img.icons8.com/fluency/50/000000/project.png"/>
  Gestão do Projeto
</h1>

<p text-align="justify"> &emsp;&emsp;&emsp;A gestão do projeto foi feita através do método Kanban, que consiste em uma forma de gestão visual de projetos, permitindo às equipes visualizar melhor a sua carga e fluxo de trabalho. Foi utilizada a plataforma <a href="https://www.atlassian.com/br/software/trello">Trello</a> para criação do quadro Kanban. Dessa forma, o trabalho ficou exibido em um quadro de projetos organizado por colunas. O design das colunas do quadro Kanban, seguiu a seguinte lógica: 
</p>


<h1 id="versionamento">
<img src="https://img.icons8.com/officel/30/000000/compare-git.png"/>
  Versionamento do Código
</h1>

<p text-align="justify">&emsp;&emsp;&emsp;O versionamento de código foi feito através do Git, que é um sistema de controle de versão de arquivos. Através deles podemos desenvolver projetos na qual diversas pessoas podem contribuir simultaneamente no mesmo, editando e criando novos arquivos e permitindo que os mesmos possam existir sem o risco de suas alterações serem sobrescritas.
</p>

<p text-align="justify">&emsp;&emsp;&emsp;A plataforma utilizada para hospedagem do repositório remoto foi o <a href="https://github.com/">GitHub</a>, onde todos os integrantes foram colocados como contribuidores do projeto.
</p>

<p text-align="justify">&emsp;&emsp;&emsp;Ele é um fluxo de trabalho baseado em Branchs onde as implantações são feitas regularmente. Cada unidade de trabalho, seja um bug ou feature, é feita através de uma branch criada a partir da main. Assim os desenvolvedores após realizarem sua implementações em uma branch baseada na linha principal do projeto, solicitavam os pull requests que eram avaliados pela squad, sendo aprovado o merge era realizado na main. Adotamos esse fluxo por ser simples e seguro, além de garantir uma linha principal estável. 
</p>

<h1 id="arquitetura">
<img src="https://img.icons8.com/office/30/000000/blueprint.png"/>
  Arquitetura do Projeto
</h1>

<p text-align="justify">&emsp;&emsp;&emsp;A arquitetura do projeto segue o padrão MVC, em razão da natureza do projeto não utilizamos Views </p>

<p align="center">  
  <img align="center" src="https://github.com/Daniel-Caetano/Help-Bruce/blob/develop/assets/arquitetura.png" width="500px" />
</p>

<p text-align="justify">&emsp;&emsp;&emsp;O Diagrama de classes do projeto pode ser encontrado abaixo com as devidas classes abordadas no desenvolvimento da API. </p>

<p align="center">  
  <img align="center" src="https://github.com/Daniel-Caetano/Help-Bruce/blob/develop/assets/diagrama.png" width="600px" />
</p>

<h1 id="documentacao">
<img height="30" src="https://img.icons8.com/color/48/000000/documents.png"/>
  Documentação
</h1>

<p text-align="justify"> &emsp;&emsp;&emsp;Foi utilizado o insomnia para criação da documentação automática da API. 
</p>

### Api Endpoints

Breve descrição dos endpoints da aplicação.

<details>
  <summary>Autenticação Endpoints</summary>
 <br>
  
  Gera um token de autenticação
  ``` ruby
  POST /login
  ```   
  | Parametro | Tipo | Descrição |
  | :--- | :--- | :--- |
  | `email` | `string` | **Requerido**. Email do usuário |
  | `senha` | `string` | **Requerido**. Senha do usuário |

</details>

<details>
  <summary>Usuário Endpoints</summary>
 <br>  
  
  Cadastra um novo usuário
  ``` ruby
  POST /users
  ```   
  | Parametro | Tipo | Descrição |
  | :--- | :--- | :--- |
  | `nome ` | `string` | **Requerido**. Nome do usuário |
  | `senha ` | `string`| **Requerido**. Senha do usuário |	
  | `email ` | `string` | **Requerido**. Email do usuário |
  | `linkedin ` | `string` | **Requerido**. Conta do Linkedin do usuário |
  | `github ` | `string` | **Requerido**. Conta do Github do usuário|

Retorna uma lista de usuários

```ruby
GET /users
```

Retorna um único usuário a partir do id

```ruby
GET /users/{id}
```

| Parametro | Tipo      | Descrição                                       |
| :-------- | :-------- | :---------------------------------------------- |
| `id `     | `integer` | **Requerido**. Id do usuário que será procurado |

Atualiza os dados de um usuário a partir do id

```ruby
PUT /users/{id}
```

| Parametro   | Tipo      | Descrição                                    |
| :---------- | :-------- | :------------------------------------------- |
| `id `       | `integer` | **Requerido**.Id do usuário a ser atualizado |
| `nome `     | `string`  | **Opcional**. Nome do usuário                |
| `senha `    | `string`  | **Opcional**. Senha do usuário               |
| `email `    | `string`  | **Opcional**. Email do usuário               |
| `linkedin ` | `string`  | **Opcional**. Conta do Linkedin do usuário   |
| `github `   | `string`  | **Opcional**. Conta do Github do usuário     |

Deleta um usuário a partir do id

```ruby
DELETE /users/{id}
```

| Parametro | Tipo      | Descrição                                   |
| :-------- | :-------- | :------------------------------------------ |
| `id `     | `integer` | **Requerido**. id do usuário a ser removido |

</details>
<details>
  <summary>Post Endpoints</summary>
 <br>  
  
  Cadastra um novo post
  ``` ruby
  POST /post
  ```   
  | Parametro      | Tipo     | Descrição                                        |
  | :---           | :---     | :-------------------------------                 |
  | `title `       | `string` | **Requerido**. Titulo do problema do usuário     |
  | `description ` | `string` | **Requerido**.  Descrição do problema do usuário |	
  | `category_id ` | `integer`| **Requerido**. Id da categoria do problema       |


Retorna uma lista de posts

```ruby
GET /posts
```

Retorna um único post a partir do id

```ruby
GET /posts/{id}
```

| Parametro | Tipo      | Descrição                                       |
| :-------- | :-------- | :---------------------------------------------- |
| `id `     | `integer` | **Requerido**. Id do post que será procurado    |

Atualiza os dados de um post a partir do id

```ruby
PUT /posts/{id}
```

| Parametro     | Tipo      | Descrição                                 |
| :----------   | :-------- | :-----------------------------------------|
| `id `         | `integer` | **Requerido**.Id do post a ser atualizado |
| `title `      | `string`  | **Opcional**. Titulo do post              |
| `description `| `string`  | **Opcional**. Descrição do post           |


Deleta um post a partir do id

```ruby
DELETE /posts/{id}
```

| Parametro | Tipo      | Descrição                                   |
| :-------- | :-------- | :------------------------------------------ |
| `id `     | `integer` | **Requerido**. id do post a ser removido    |

</details>

<details>
  <summary>Comentário Endpoints</summary>
 <br>  
  
   Cadastra um novo comentário
  ``` ruby
  POST /comments
  ```   
  | Parametro      | Tipo     | Descrição                                        |
  | :---           | :---     | :-------------------------------                 |
  | `description ` | `string` | **Requerido**. comentário a ser realizado |	
  | `post_id ` | `integer`| **Requerido**. Id do post que vai receber o comentário    |


Retorna uma lista de comments

```ruby
GET /comments
```

Retorna um único comentário a partir do id

```ruby
GET /comments/{id}
```

| Parametro | Tipo      | Descrição                                       |
| :-------- | :-------- | :---------------------------------------------- |
| `id `     | `integer` | **Requerido**. Id do comentário que será procurado    |

Atualiza os dados de um comentário a partir do id

```ruby
PUT /comments/{id}
```

| Parametro     | Tipo      | Descrição                                 |
| :----------   | :-------- | :-----------------------------------------|
| `id `         | `integer` | **Requerido**.Id do comentário a ser atualizado |
| `description `      | `string`  | **Opcional**.  Nova descrição no comentário |

Deleta um comentário a partir do id

```ruby
DELETE /comments/{id}
```

| Parametro | Tipo      | Descrição                                         |
| :-------- | :-------- | :------------------------------------------       |
| `id `     | `integer` | **Requerido**. id do comentário a ser removido    |
</details>

<details>
  <summary>Green Star Endpoints</summary>
 <br>  
 
  Retorna uma agencia a partir do id informado
  ``` ruby
  POST /users/registerStar
  ```
  | Parametro | Tipo      | Descrição                                         |
  | :-------- | :-------- | :------------------------------------------       |
  | `id `     | `integer` | **Requerido**. id do comentário que vai receber a Green Star    |
  
</details>

<h1 id="tecnologias-dependencias">
<img height="30" src="https://img.icons8.com/fluency/50/000000/administrative-tools.png"/>
	Tecnologias e Dependências
</h1>

<a name = "tech_stack"></a>

- [Node.js](https://nodejs.org/) - Ambiente de execução Javascript server-side
- [Express](https://expressjs.com/pt-br/) - Framework web de desenvolvimento
- [NPM](https://www.npmjs.com/) - Gerenciador de pacotes
- [MySql Database](https://www.mysql.com/) - Database para o ambiente de produção
- [Sequelize](https://sequelize.org/) - Orm baseado em Promise para Node.js
- [Insomnia Plugin Documenter](https://insomnia.rest/plugins/insomnia-plugin-documenter) - Documentação oficial da API
- [Insomnia](https://insomnia.rest/) - Ferramenta para testes nas requisições
- [Trello](https://trello.com/) - Aplicativo de gerenciamento de projeto

<h1 id="desenvolvedores">
<img height="30" src="https://img.icons8.com/color/48/000000/devpost.png"/>
  Desenvolvedores
</h1>

<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/diegomarins33"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/diegomarins33" width="100px;" alt=""/><br /><sub><b>Diego Marins</b></sub></a><br /><a href="https://github.com/diegomarins33" title="Diego Marins"></a>
    </td>
    <td align="center"><a href="https://github.com/BrunoPogianMallta"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/BrunoPogianMallta" width="100px;" alt=""/><br /><sub><b>Bruno Pogian Mallta</b></sub></a><br /><a href="https://github.com/BrunoPogianMallta" title="Bruno Pogian Mallta"></a>
    </td>
    <td align="center"><a href="https://github.com/jhonlucassilva10"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/jhonlucassilva10" width="100px;" alt=""/><br /><sub><b>Jhon Lucas</b></sub></a><br /><a href="https://github.com/jhonlucassilva10" title="Jhon Lucas"></a></td>
  </tr>
</table>
