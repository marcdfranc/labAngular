FROM node

MAINTAINER Marcelo Francisco

RUN cd /usr && npm install -g @angular/cli && ng new workdir && cd workdir 
WORKDIR /usr/workdir

# COPY . /usr/workdir

LABEL Description="Angular webserver"

EXPOSE 4200