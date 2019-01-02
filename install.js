const { spawn } = require('child_process'),
    yarnFullPath = `${__dirname}/node_modules/.bin/yarn${process.platform == 'win32' ? '.cmd' : ''}`;
spawn(yarnFullPath, {
    cwd: `${__dirname}/proton`
}).on('exit', code => {
    if(!code){
        console.error('Failed to build proton');
        process.exit(1);
    }
})
