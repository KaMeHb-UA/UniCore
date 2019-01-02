import React, { Component } from 'react'; // import from react
import { Window } from 'proton-native'; // import the proton-native components

export default class MainWindow extends Component{
    render(){
        return (
            <Window title="Proton Native Rocks!!1" size={{w: 300, h: 300}} menuBar={false}>
                {/* all your other components go here*/}
            </Window>
        )
    }
}