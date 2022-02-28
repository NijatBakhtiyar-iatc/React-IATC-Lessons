// Node, React begin 16.2.2022
// https://www.youtube.com/watch?v=GCO3peJQo6w

// react i yuklemek

// I method
// npx create-react-app name

// II method
// npm init -y (package.json)
// npm i react react-dom react-scripts
// public, src folder yaratmaq
// add index.html to public folder
// add index.js to src folder

import React, { Component } from 'react';

class First extends Component {
    render() {
        return <React.Fragment>
            <ul>
                <li>Home</li>
                <li>COntact</li>
            </ul>
        </React.Fragment>
    }
}

export default First;