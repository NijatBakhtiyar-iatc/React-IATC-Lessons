import axios from 'axios';
import React, { Component } from 'react';
import style from './Heading.module.css'

class Heading extends Component {
    constructor() {
        super();

        this.state = {
            text: 'Hello World',
            title: '',
            actors: ''
        }
    }
    render() {
        // setState render in  icinde yazmaq olmaz cunki her defe render olanda state deyisecek, state deyisdiyi ucun component rerender olur

        // burda 1 saniyeden bir component render olunur 
        // setTimeout(() => {
        //     this.setState({
        //         text: 'Salam Dunya',
        //     })
        // }, 1000);

        return (
            <>
                <h1>{this.state.text}</h1>
                {/* <button onClick={() => this.setState({
                    text: this.state.text === 'Hello World' ? 'Salam Dunya' : 'Hello World'
                })}
                >Click Me</button> */}
                <button onClick={() => {
                    axios.get('https://www.omdbapi.com/?apikey=a852a73e&t=god&y=2000&plot=full')
                        .then(({ data }) => {
                            var actors = data.Actors
                            this.setState({
                                title: data.Title,
                                actors
                            })
                        })
                }}
                >Click Me</button>
                <h2 className={style.title}>Title: {this.state.title}</h2>
                <h3>Actors: {this.state.actors}</h3>
            </>
        );
    }

}
export default Heading;