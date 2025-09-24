# Arquitetura do Sistema Open Delivery

## 1. Visão Geral

O sistema é dividido em camadas:

- **Clients**: Clientes HTTP que consomem APIs externas (ex: Open Delivery API)
- **Services**: Regras de negócio, autenticação, polling e notificações
- **Controllers**: Recebem requisições HTTP e chamam os serviços
- **Repositories**: Interação com o banco de dados
- **Models**: Estrutura de dados e ORM (Sequelize / Mongoose)
- **Middlewares**: Validação, autenticação interna, logging e rate limiting
- **Sockets**: Push em tempo real via WebSocket
- **Jobs**: Polling, cleanup e retry/backoff
- **Utils**: Funções auxiliares
- **Types**: Tipagem TypeScript para API externa e interna

## 2. Fluxo de Pedido

1. O cliente cria um pedido via front-end ou API.
2. `ordersController` recebe a requisição.
3. `orderService` processa a lógica de negócio.
4. `orderRepository` salva os dados no banco.
5. `notificationService` envia atualização para front-end via WebSocket.

## 3. Fluxo de Eventos

1. `pollerService` consulta eventos externos periodicamente.
2. Eventos são persistidos via `eventRepository`.
3. `ackService` confirma recebimento dos eventos.
4. Eventos podem disparar notificações em tempo real via sockets.

## 4. Tecnologias

- Node.js + TypeScript
- Express.js
- Sequelize + PostgreSQL
- Mongoose + MongoDB
- Jest para testes unitários e de integração
- Socket.io para tempo real
