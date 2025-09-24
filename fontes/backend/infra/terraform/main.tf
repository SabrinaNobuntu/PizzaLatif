provider "kubernetes" {
  config_path = "~/.kube/config"
}

resource "kubernetes_namespace" "opendelivery" {
  metadata {
    name = "opendelivery"
  }
}

resource "kubernetes_deployment" "backend" {
  metadata {
    name      = "opendelivery-backend"
    namespace = kubernetes_namespace.opendelivery.metadata[0].name
  }
  spec {
    replicas = 2
    selector {
      match_labels = {
        app = "opendelivery-backend"
      }
    }
    template {
      metadata {
        labels = {
          app = "opendelivery-backend"
        }
      }
      spec {
        container {
          name  = "backend"
          image = "opendelivery/backend:latest"

          port {
            container_port = 8080
          }

          env {
            name  = "DB_HOST"
            value = "postgres"
          }

          env {
            name  = "DB_PORT"
            value = "5432"
          }

          env {
            name  = "DB_USER"
            value = "postgres"
          }

          env {
            name  = "DB_PASSWORD"
            value = "postgres"
          }

          env {
            name  = "DB_NAME"
            value = "opendelivery"
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "backend" {
  metadata {
    name      = "opendelivery-backend"
    namespace = kubernetes_namespace.opendelivery.metadata[0].name
  }

  spec {
    selector = {
      app = "opendelivery-backend"
    }

    port {
      port        = 8080
      target_port = 8080
    }

    type = "ClusterIP"
  }
}
