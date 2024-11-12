import React, { Component } from 'react'

export default class Greetings extends Component {
    render () {
        return (
            <div style={ {color:'lightgrey', backgroundColor:'black'} }>
                Greetings, {this.props.name}
            </div>
        )
    }
}