# Delivery API

Este projeto implementa a API de Delivery com o NestJS, e utilizamos o padrão de projeto **Observer** para enviar notificações por e-mail aos usuários quando um pedido é processado.

## Como funciona o Padrão Observer

O padrão **Observer** permite que um objeto (o sujeito) notifique vários objetos (observadores) quando algo muda. Neste caso, o sujeito é o serviço que processa o pedido, e os observadores são os objetos que recebem as notificações (e-mail).

## Tecnologias Utilizadas

- **NestJS**: Framework para construção da API.
- **TypeScript**: Linguagem utilizada para o desenvolvimento.
- **Banco de dados**: PostgresSql, hospedado no.

## Como rodar o projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/PabloSSena/delivery-api.git

   ```

2. Baixe as dependencias com o comando "yarn" ou o comando "npm install".

3. Rode o projeto com "yarn start".
