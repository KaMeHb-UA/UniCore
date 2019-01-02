import React, { Component } from 'react';
import { render, App } from 'proton-native';
import fs from 'fs';
const windows = fs.readdirSync(__dirname + '/app/windows').map((window, i) => {
    const required = require('./app/windows/' + window)
    const Class = required.hasOwnProperty('default') ? required.default : required
    return <Class key={'window-' + i}/>
});

class Main extends Component {
    render(){
        return <App>{windows}</App>
    }
}

render(<Main/>);
