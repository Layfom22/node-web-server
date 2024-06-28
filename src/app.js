import {envs} from './config/env.js'
import {startServer} from './server/server.js'
/*
const {envs} = require('./config/env')
const {startServer} = require('./server/server')
*/

const main = () => {
    startServer({
        port:envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

//funcion agnostica auto convocada
//Agnostica xk no tiene nombre 
// Autoconvocada por que la ejecutamos con los ultimos parentesis 
(async()=>{
    main()
})()
