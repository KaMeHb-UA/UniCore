const yarn = require('./modules/yarn');
yarn({
    cwd: __dirname + '/proton', // of course only proton, there is no variants (or can we develop & run directly in mobile device?)
}, 'start')
