import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createStream } from '../../actions'

export class StreamCreate extends Component {

    renderError = ({ error, touched }) => {
        if ( touched && error ) {
            return(
                <div className='ui error message'>
                    <div className='header'>{error}</div>
                </div>
            )
        }
    }

    // Destructure input key (which is an obj of objs) from formProps obj
    // label comes from the label prop in the Field elements because Field doesn't know what to do with it, it passes that prop to the function being called
    renderInput = ({ input, label, meta }) => {

        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        // return (
        //     <input 
        //     onChange={formProps.input.onChange} 
        //     value={formProps.input.value} />
        // )
        // grab every prop and add it to input
        return(
            <div className={className}>
                <label>{ label }</label>
                <input {...input} autoComplete='off' />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = formValues => {
        this.props.createStream(formValues)
    }   
    
    render() {
        return (
            <form 
            className='ui form error' 
            onSubmit={ this.props.handleSubmit(this.onSubmit) } >

                <Field 
                name='title' 
                label='Enter Title' 
                component={this.renderInput} />

                <Field 
                name='description' 
                label='Enter Description' 
                component={this.renderInput} />

                <button className='ui button primary'>Submit</button>

            </form>
        )
    }
}

const validate = formValues => {
    const errors = {}

    if ( !formValues.title ) {
        errors.title = 'Please enter a title'
    }

    if ( !formValues.description ) {
        errors.description = 'Please enter a description'
    }

    return errors
}

const formWrapped = reduxForm({ 
    form: 'streamCreate',
    validate
})(StreamCreate)

export default connect(null, { createStream })(formWrapped)
