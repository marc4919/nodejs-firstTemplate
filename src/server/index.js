import express from "express";

const server = express();

server.set('views', 'src/views');
server.set('view engine', 'pug');

server.get('/', (req, res) => {
  res.render('index.pug', { title: 'Hey', message: 'Hello there!'});
});

export default server;