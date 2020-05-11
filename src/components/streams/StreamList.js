import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchStreams } from '../../actions'

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams()
    }

    renderAdminBtns = stream => {
        if( stream.userId === this.props.currentUserId ) {
            return(
                <div className='right floated content'>
                    <Link 
                    to={`/streams/edit/${stream.id}`} 
                    className='ui button primary'>
                        Edit
                    </Link>
                    <button className='ui button negative'>
                        Delete
                    </button>
                </div>
            )
        }
    }

    renderList() {
        return this.props.streams.map( stream => {
            return(
                <div className='item' key={stream.id}>
                    { this.renderAdminBtns(stream) }
                    <i className='large middle aligned icon camera' />
                    <div className='content'>
                        {stream.title}
                        <div className='description'>
                            {stream.description}
                        </div>
                    </div>
                </div>
            )
        } )
    } 

    renderCreateBtn() {
        if ( this.props.isSignedIn ) {
            return(
                <div style={{ textAlign: 'right' }}>
                    <Link to='/streams/new' exact className='ui button primary' >
                        Create Stream
                    </Link>
                </div>
            )
        }
    }

    render() {
        return(
            <div>
                <h2>All Streams</h2>
                <div className='ui celled list'>
                    { this.renderList() }
                </div>
                { this.renderCreateBtn() }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    // turn obj of objs into arr of obj to make it easy to map over and display in UI
    streams: Object.values( state.streams ),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
})

export default connect(mapStateToProps, { fetchStreams })(StreamList)
