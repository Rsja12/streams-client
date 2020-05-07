import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signIn, signOut } from '../actions'

export class GoogleAuth extends Component {

    // only want this lib to load once when the component mounts
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: process.env.REACT_APP_CLIENT_ID,
                scope: 'email'
            })
            .then( () => {
                // create variable that holds boolean of sign in status
                this.auth = window.gapi.auth2.getAuthInstance()
                // immediately update auth state in our redux store
                this.onAuthChange( this.auth.isSignedIn.get() )
                // have this listening for any auth changes
                this.auth.isSignedIn.listen( this.onAuthChange )
                console.log(this.auth)
                console.log(this.props)
            })
        })
    }

    onAuthChange = isSignedIn => {
        // checks google api to see if isSignedIn is true
        if (isSignedIn) {
            // passes in google id as arg
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthBtn() {
        if ( this.props.isSignedIn === null ) {
            return null
        } else if ( this.props.isSignedIn ) {
            return(
                <button 
                onClick={this.onSignOutClick}
                className='ui red google button'>
                    <i className='google icon' />
                    Sign Out
                </button>
            )
        } else {
            return(
                <button 
                onClick={this.onSignInClick}
                className='ui red google button'>
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

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect( mapStateToProps, { signIn, signOut } )(GoogleAuth)
