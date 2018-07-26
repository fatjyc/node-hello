from node:alpine

ENV LANGUAGE 'chinese'

RUN mkdir /app

COPY ./ /app

WORKDIR /app

CMD npm install

ENTRYPOINT node index.js $LANGUAGE

