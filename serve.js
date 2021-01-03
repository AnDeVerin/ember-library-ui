/* eslint-disable no-undef */
const FastBootAppServer = require('fastboot-app-server');

const server = new FastBootAppServer({
  distPath: 'dist',
});

server.start();
