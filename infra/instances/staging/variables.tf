variable "project" {
  description = "The GCP project ID"
  type        = string
  default     = "gcp-devops-project-438911"
}

variable "region" {
  description = "The region to deploy resources in"
  type        = string
  default     = "europe-west8" # Change this if you prefer a different default region
}

variable "zone" {
  description = "The zone to deploy resources in"
  type        = string
  default     = "europe-west8-a" # Change this if you prefer a different default zone
}
