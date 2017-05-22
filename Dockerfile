FROM node

ADD . /usr/src/app/

WORKDIR /usr/src/app

RUN npm install -g yarn && \
    yarn install

EXPOSE ${FB_WEBHOOK_PORT}

CMD npm start
