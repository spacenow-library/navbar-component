import React, { Component } from 'react'
import style from 'Navigation.scss'

class Navigation extends Component { 

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <div className={style.topnav} id="myTopnav">
                    <a href="#home" className={style.active}>Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </>
        )
    }

}

export default Navigation