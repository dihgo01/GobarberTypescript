<div align="center" style="margin-bottom: 20px;">
<img alt="gobarber" src="https://github.com/dihgo01/GobarberTypescript/blob/main/resource/logo.png" width="auto" heigth="auto"/>
</div>

<div align="center" style="margin: 20px;">

<p align="center" >
  <a href="#star-introduction"> :star: Introduction</a> |
  <a href="#rocket-technologies"> :rocket: Technologies</a> |
  <a href="#hammer-application-deploy"> :hammer: Application Deploy</a> |
  <a href="#computer-how-to-use"> :computer: How To Use </a> |
</p>

</div>

## :star: Introduction

Application to schedule and manage beauty services, where service providers can register, and users can make appointments with these providers.

<div align="center"> 
<img src="https://media.giphy.com/media/Lm6bmg75wR7Llcf9JG/giphy.gif" alt="preview"/>
</div>

## :rocket: Technologies

This project was developed at the [RocketSeat GoStack Bootcamp](https://rocketseat.com.br/bootcamp) with the following technologies:

- [NodeJS](https://nodejs.org/en/)
- [ReactJS](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [ExpressJS](https://expressjs.com/pt-br/)
- [JWT](https://jwt.io/)
- [Yup](https://github.com/jquense/yup)
- [Styled-Components](https://styled-components.com/)
- [date-fns](https://date-fns.org/)
- [MongoDB](https://www.mongodb.com/)
- [Postgres](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
{...}

## :hammer: Application Deploy
{...}

## :computer: How To Use

#### Cloning the project
```sh
$ git clone https://github.com/dihgo01/GobarberTypescript.git
$ cd GoBarberTypescript
```
#### Starting the API
```sh
$ cd api

# Creating the Database Docker Image:
# Inside the project, there is already a docker-compose.yml file that has the
# PostgreSQL as a database, just have Docker installed on your machine.
$ docker-compose up -d # It will start in the background and will not lock the shell

# Running migrations to the database and starting the project
$ yarn && yarn typeorm migration:run && yarn dev:server
```

<a href="https://insomnia.rest/run/?label=gobarber-jvictorfarias&uri=https%3A%2F%2Fgithub.com%2Fjvictorfarias%2FGoBarber%2Fblob%2Fmaster%2Fapi%2Finsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

#### Starting Frontend
```sh
$ cd frontend
$ yarn && yarn start
```
#### Starting Mobile
```sh
$ cd mobile
$ yarn && yarn android && yarn start
```

Made with ♥ by Diego Candido :wave: [Get in touch!](https://www.linkedin.com/in/diego-c-c-s/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
