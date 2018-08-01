'use strict';

const Hapi = require('hapi');
const RoutesController = require('../routes/test');

const server = Hapi.server({
    host: 'localhost',
    port: 8000    
});

server.route({
    method: 'GET',
    path: '/',
    handler: RoutesController.hello
});

const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();