#!/bin/bash

docker build -t random_section .

docker run -d -p 80:80 random_section
