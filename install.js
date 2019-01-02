const yarn = require('./modules/yarn'),
    parts = [
        'proton',
        'react-native',
    ];

async function spawnYarn(dir){
    try{
        await yarn({
            cwd: `${__dirname}/${dir}`
        });
        console.log(`Modules for ${dir} installed/built successfully`)
    } catch (e){
        throw new Error(`Failed to install/build ${dir} with code ${e}`)
    }
}

function partsToSentence(parts){
    var newParts = [...parts],
        lastPart = newParts.pop();
    return newParts.join(', ') + ' and ' + lastPart
}

console.log(`Installing needed modules for ${partsToSentence(parts)}...`)

Promise.all(parts.map(dir => spawnYarn(dir))).then(() => {
    console.log('All done')
})
