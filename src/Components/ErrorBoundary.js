import React from 'react'

/**
 * * Error Boundaries
 * * Basically try / catch for components
 * ! a component becomes an error boundary when it contains static getDerivedStateFromError and/or componentDidCatch
 */

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { error: false, errorInfo: null }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        })
    }

    render() {
        if (this.state.error) {
            return <h1> Something went wrong </h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary
