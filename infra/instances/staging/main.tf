provider "google" {
  project = var.project
  region  = var.region
  zone    = var.zone
}

resource "google_compute_instance" "default" {
  name         = "simple-weather-app-prod"
  machine_type = "e2-micro"
  zone         = var.zone

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-11"
    }
  }

  network_interface {
    network = "default"
    access_config {}
  }

  tags = ["devops-gh-actions-demo", "simple-weather-app"]

  metadata_startup_script = <<-EOF
    #!/bin/bash
    echo "Hello, GCP!" > /var/www/html/index.html
    # Install and start a basic web server
    apt-get update
    apt-get install -y apache2
    systemctl start apache2
  EOF
}

resource "google_compute_firewall" "allow_http" {
  name    = "allow-http"
  network = "default"

  allow {
    protocol = "tcp"
    ports    = ["80"]
  }

  source_ranges = ["0.0.0.0/0"]
  target_tags   = ["simple-weather-app"]
}
