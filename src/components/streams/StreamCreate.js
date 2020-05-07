import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

export class StreamCreate extends Component {

    // Destructure input key (which is an obj of objs) from formProps obj
    renderInput({ input }) {
        console.log(input)
        // return (
        //     <input 
        //     onChange={formProps.input.onChange} 
        //     value={formProps.input.value} />
        // )
        // grab every prop and add it to input
        return <input {...input} />
    }

    render() {
        return (
            <form>
                <Field name='Title' component={this.renderInput} />
                <Field name='Description' component={this.renderInput} />
            </form>
        )
    }
}

export default reduxForm({ 
    form: 'streamCreate'
})(StreamCreate)
