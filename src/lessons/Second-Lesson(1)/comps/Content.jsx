import React, { Component } from 'react';
import style from './Content.module.css';
import PropTypes from 'prop-types';
 
class Content extends Component {
    constructor(props) {
        super(props)
    }
    render() { 
        console.log(this.props);

        return (
            <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse possimus tempore, voluptas voluptatum reprehenderit nihil dignissimos, iusto laudantium consequatur est a labore, ullam quam blanditiis. Odit dolorum rerum ratione repudiandae dignissimos, animi amet tempora earum laborum corrupti dolore numquam explicabo sit accusantium aperiam aliquam eos ad mollitia reprehenderit, minus illo?
                <p className={style.title}>{this.props.part}</p>
                <p>{this.props.children}</p>
                <button onClick={()=> {}}>Second in icindeki setstate deyismek ucun callback funksiya cagirmaq lazimdi</button>
            </div>
        );
    }
}

Content.propTypes = {
    part: PropTypes.string
}
 
export default Content;