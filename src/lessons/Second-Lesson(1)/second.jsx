import React from 'react';
import Content from './comps/Content';
import Heading from './comps/Heading';


export class Footer extends React.Component {
    render() {
        return <h1>Copyright &#169;</h1>
    }
}


export class Second extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'Send state as Props',
            metn: 'metni deyis'
        }
    }
    metniDeyis(x){
        this.setState({
            metn: x
        })
    }
    render() {
        return (
            <>
                <Heading />
                <Content part="Content" prop={this.state.text} metnDeyis={ this.metniDeyis}>Test</Content>
                <Footer />
            </>
        )
    }
}


