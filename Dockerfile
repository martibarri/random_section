FROM nginx

COPY ./reunio_app /usr/share/nginx/html

EXPOSE 80

