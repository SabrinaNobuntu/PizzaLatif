# Diagramas de Sequência

## 1. Criação de Pedido

```mermaid
sequenceDiagram
    participant Client
    participant OrdersController
    participant OrderService
    participant OrderRepository
    participant NotificationService

    Client->>OrdersController: POST /orders
    OrdersController->>OrderService: createOrder(data)
    OrderService->>OrderRepository: save(order)
    OrderService->>NotificationService: sendNotification(order)
    OrdersController-->>Client: 201 Created
