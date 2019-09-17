// Code DigitalClicker Component Here

import React, {Component} from 'react'

export default class DigitalClicker extends Component {

    state = {
        timesClicked: 0
    }

    handleBtnClick = () => {
        this.setState({timesClicked: this.state.timesClicked + 1})
    }

    render() {
        return <button onClick={this.handleBtnClick}><label>{this.state.timesClicked}</label></button>
    }
} 