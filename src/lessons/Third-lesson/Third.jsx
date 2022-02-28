import React, { Component } from 'react';
import IkinciComp from './comps/ikinciComp';

export class Third extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Filankes',
            surname: 'Filankesov'
        }
        // this.clickHandle = this.clickHandle.bind(this);
        this.adiDeyis = this.adiDeyis.bind(this);
    }

    // clickHandle (){
    //     this.setState({
    //         name: 'Test'
    //     })
    // } // yada ki arrow

    // clickHandle = () => {
    //     this.setState({
    //         name: 'Test'
    //     })
    // }

    adiDeyis() {
        this.setState({
            name: 'adi deyisdi'
        })
    }

    render() {
        return (
            <>
                <h1> Third {this.state.name}</h1>
                {/* <button onClick={this.clickHandle}>Deyis</button> */}
                <IkinciComp/>
            </>
        );
    }
}
