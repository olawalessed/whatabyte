


import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    
    constructor(props) {
        super(props)

        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error) {
        console.log(error)
        return {hasError: true}
    }

    static getSnapShotBeforeUpdate(error) {
        
    }

    componentDidUpdate() {

    }

    componentDidCatch(error, errorInfo) {

        console.log(error, errorInfo)
    }
    
    render() {

        if (this.state.hasError) {
            
            return (
                <div>
                    <h2>Ops, there is an error!</h2>
                    <button onClick={() => this.setState({hasError: false})}>Try again?</button>
            </div>
            )
        }

        return this.props.children
    }
}
