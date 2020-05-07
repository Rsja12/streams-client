import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

export class StreamCreate extends Component {
    render() {
        return (
            <form>
                <Field name='Title' />
                <Field name='Description' />
            </form>
        )
    }
}

export default reduxForm({ 
    form: 'streamCreate'
})(StreamCreate)
