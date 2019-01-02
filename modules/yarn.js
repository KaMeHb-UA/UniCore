const { spawn } = require('child_process'),
    path = require('path'),
    yarnFullPath = path.resolve(`${__dirname}/../node_modules/.bin/yarn${process.platform == 'win32' ? '.cmd' : ''}`);
module.exports = (options, ...args) => {
    if(typeof options == 'string'){
        args.unshift(options);
        options = {};
    }
    return new Promise((resolve, reject) => {
        spawn(yarnFullPath, args, options).on('exit', code => {
            if(code) reject(new Error(code + '')); else resolve()
        })
    })
}
