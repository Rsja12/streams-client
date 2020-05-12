import React from 'react'
import Modal from '../Modal'
import history from '../../history'

class StreamDelete extends React.Component {

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

export default StreamDelete
