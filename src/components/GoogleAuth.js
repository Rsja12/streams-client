import React, { Component } from 'react'

export class GoogleAuth extends Component {
    
    state = {
        isSignedIn: null
    }

    // only want this lib to load once when the component mounts
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: process.env.REACT_APP_CLIENT_ID,
                scope: 'email'
            })
            .then( () => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.setState({
                    isSignedIn: this.auth.isSignedIn.get()
                })
                this.auth.isSignedIn.listen( this.onAuthChange )
            })
        })
    }

    onAuthChange = () => {
        this.setState({
            isSignedIn: this.auth.isSignedIn.get()
        })
    }

    onSignIn = () => {
        this.auth.signIn()
    }

    onSignOut = () => {
        this.auth.signOut()
    }

    renderAuthBtn() {
        if ( this.state.isSignedIn === null ) {
            return null
        } else if ( this.state.isSignedIn ) {
            return(
                <button className='ui red google button'>
                    <i className='google icon' />
                    Sign Out
                </button>
            )
        } else {
            return(
                <button className='ui red google button'>
                    <i className='google icon' />
                    Sign In
                </button>
            )
        }
    }

    render() {
        return (
            <div>
                { this.renderAuthBtn() }
            </div>
        )
    }

}

export default GoogleAuth
