import React from 'react'
import { connect } from 'react-redux'
import { fetchStream, deleteStream } from '../../actions'

import Modal from '../Modal'
import history from '../../history'

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }
    
    renderActions() {
        return (
            // React.Fragment allows us to wrap multiple tags while creating an 'invisible' dom element. It doesn't show up on the dom so it doesn't mess with semantic ui's styling
            <React.Fragment>
                <button className='ui button negative'>Delete</button>
                <button className='ui button'>Cancel</button>
            </React.Fragment>
        )
    }
    
    render(){
        console.log(this.props.stream)
        return (
            <div>
    
                <Modal 
                    title='Delete Stream'
                    content='Are you sure you want to delete this stream?'
                    actions={ this.renderActions() }
                    onDismiss={ () => history.push('/') }
                />
    
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    stream: state.streams[ownProps.match.params.id]
})

export default connect(mapStateToProps, {
    fetchStream,
    deleteStream
})(StreamDelete)
