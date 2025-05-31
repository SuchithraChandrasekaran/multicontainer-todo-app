# Multi-Container Todo App with Docker Compose
A simple **Node.js + MongoDB Todo API** deployed using **Docker Compose, Terraform, Ansible, and GitHub Actions**. This project demonstrates how to build and deploy a simple todo list application.

## Features
1. Create, Read, Update, Delete (CRUD) Todo items
2. Dockerized Node.js API and MongoDB database
3. Multi-container setup using Docker Compose
4. Infrastructure as Code (IaC) with Terraform
5. Remote provisioning with Ansible
6. CI/CD pipeline with GitHub Actions
7. Persistent data using Docker volumes

## Tech Stack
1. Node.js + Express.js
2. MongoDB + Mongoose
3. Docker + Docker Compose
4. Terraform
5. Ansible
6. GitHub Actions
7. Cloud Provider -AWS

## Directory Structure

```text
multicontainer-todo-app/
├── server/                            # Node.js Todo API
│   ├── models/
│   │   └── Todo.js                   # Mongoose model
│   ├── routes/
│   │   └── todos.js                  # All route handlers
│   ├── app.js                        # Express app setup
│   ├── server.js                     # Entry point
│   ├── package.json
│   ├── package-lock.json
│   └── Dockerfile                    # Docker config for API
│
├── docker-compose.yml                # Compose config for API + MongoDB
├── .env                              # Environment variables
│
├── terraform/                        # Infra provisioning
│   ├── main.tf                       # Main infra definition
│   ├── variables.tf                  # Input variables
│   ├── outputs.tf                    # Output IP, etc.
│   └── terraform.tfvars              # Variable values
│
├── ansible/                          # Remote server configuration
│   ├── inventory.ini                 # Target server IP
│   ├── playbook.yml                  # Main playbook
│   └── roles/
│       └── docker/
│           ├── tasks/
│           │   └── main.yml          # Docker install/configure
│           └── handlers/
│               └── main.yml
│
├── .github/                          # GitHub Actions CI/CD
│   └── workflows/
│       └── deploy.yml                # CI/CD pipeline
│
├── README.md
```
