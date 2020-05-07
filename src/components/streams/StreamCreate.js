import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

export class StreamCreate extends Component {

    // Destructure input key (which is an obj of objs) from formProps obj
    // label comes from the label prop in the Field elements because Field doesn't know what to do with it, it passes that prop to the function being called
    renderInput({ input, label }) {
        console.log(input)
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

    render() {
        return (
            <form className='ui form'>
                <Field name='Title' label='Enter Title' component={this.renderInput} />
                <Field name='Description' label='Enter Description' component={this.renderInput} />
            </form>
        )
    }
}

export default reduxForm({ 
    form: 'streamCreate'
})(StreamCreate)
