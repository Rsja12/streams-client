import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm'

// props are coming from react-router-dom
class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }
    
    onSubmit = (formValues) => {
        this.props.editStream( this.props.match.params.id, formValues )
    }
    
    render() {
        
        if( !this.props.stream ) {
            return <div>Loading...</div>
        } 

        return(
            <div>
                <h3>Edit Stream</h3>
                <StreamForm 
                // this.props.stream is an OBJ and we're using _.pick from lodash to create a new obj with only 'title' and 'description' as properties
                // initialValues={{
                //     title: this.props.stream.title,
                //     description: this.props.stream.description
                // }}
                initialValues={ _.pick(this.props.stream, 'title', 'description') }
                onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    stream: state.streams[ownProps.match.params.id]
})

export default connect(mapStateToProps, { 
    fetchStream,
    editStream
 })(StreamEdit)
