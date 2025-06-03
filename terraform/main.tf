provider "aws" {
  region = "us-east-1"  # ✅ Updated region
}

resource "aws_instance" "devops_todo" {
  ami           = "ami-053b0d53c279acc90"  # ✅ Ubuntu 22.04 LTS for us-east-1
  instance_type = "t2.micro"
  key_name      = var.key_name

  tags = {
    Name = "multi-container-todo"
  }

  provisioner "local-exec" {
    command = "echo ${self.public_ip} > ../ansible/inventory.ini"
  }

  vpc_security_group_ids = [aws_security_group.todo_sg.id]
}

resource "aws_security_group" "todo_sg" {
  name_prefix = "todo_sg"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

