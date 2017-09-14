#!/bin/bash

echo
echo '***********************'
echo '*** Stopping Docker ***'
echo '***********************'
echo
docker stop random_section
echo
echo '**********************'
echo '*** Removing Image ***'
echo '**********************'
echo
docker rm random_section
echo
echo '************************************************'
echo '*** Deploy random_section Docker on port 8050***'
echo '************************************************'
echo
docker run -d --name random_section -p 127.0.0.1:8050:80 -v $PWD/reunio_app:/usr/share/nginx/html:ro nginx

