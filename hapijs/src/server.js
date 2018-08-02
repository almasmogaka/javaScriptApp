'use strict';

const Hapi = require('hapi');
const pool = require('../routes/database');
const asynch = require('hapi-async-handler');
//const RoutesController = require('../routes/resources');

const start = async () => {

    const server = Hapi.server({
        host: 'localhost',
        port: 8000
    });

    await server.register(asynch);

    // server.auth.strategy('simple', 'basic', { validate });

    server.route({
        method: 'GET',
        path: '/',
        // options: {
        //     auth: 'simple'
        // },
        handler: {
            // Define a property called "async" that's an async function
            async async(request, reply) {

                try {
                    var result = await pool.query('SELECT * FROM users')
                } catch (err) {
                    throw new Error(err)
                }

            }
            
        }
    });

    await server.start();

    console.log('server running at: ' + server.info.uri);
};

start();