import React from 'react'

class BuggyComponent extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = { counter: 0 }
    }

    handleClick() {
        this.setState(({ counter }) => ({
            counter: counter + 1,
        }))
    }

    render() {
        if (this.state.counter === 1) {
            throw new Error('I crashed!')
        }
        return <h1 onClick={this.handleClick}>{this.state.counter}</h1>
    }
}

export default BuggyComponent
