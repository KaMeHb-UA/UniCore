const { spawn } = require('child_process'),
    yarnFullPath = `${__dirname}/node_modules/.bin/yarn${process.platform == 'win32' ? '.cmd' : ''}`,
    parts = [
        'proton',
        'react-native',
    ];

function spawnYarn(dir){
    return new Promise((resolve, reject) => {
        spawn(yarnFullPath, {
            cwd: `${__dirname}/${dir}`
        }).on('exit', code => {
            if(code) reject(new Error(`Failed to install/build ${dir} with code ${code}`)); else resolve()
        })
    })
}

function partsToSentence(parts){
    var newParts = [...parts],
        lastPart = newParts.pop();
    return newParts.join(', ') + ' and ' + lastPart
}

console.log(`Installing needed modules for ${partsToSentence(parts)}...`)

Promise.all(parts.map(dir => spawnYarn(dir).then(() => {
    console.log(`Modules for ${dir} installed/built successfully`)
}))).then(() => {
    console.log('All done')
})
