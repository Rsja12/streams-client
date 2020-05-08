import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

export class StreamCreate extends Component {

    // Destructure input key (which is an obj of objs) from formProps obj
    // label comes from the label prop in the Field elements because Field doesn't know what to do with it, it passes that prop to the function being called
    renderInput({ input, label }) {
        // return (
        //     <input 
        //     onChange={formProps.input.onChange} 
        //     value={formProps.input.value} />
        // )
        // grab every prop and add it to input
        return(
            <div className='field'>
                <label>{ label }</label>
                <input {...input} />
            </div>
        )
    }

    onSubmit(formValues) {
        console.log(formValues)
    }   

    render() {
        return (
            <form 
            className='ui form' 
            onSubmit={ this.props.handleSubmit(this.onSubmit) } >

                <Field 
                name='Title' 
                label='Enter Title' 
                component={this.renderInput} />

                <Field 
                name='Description' 
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

export default reduxForm({ 
    form: 'streamCreate',
    validate
})(StreamCreate)
