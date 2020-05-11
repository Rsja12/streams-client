import React from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams()
    }

    renderAdminBtns = stream => {
        if( stream.userId === this.props.currentUserId ) {
            return(
                <div className='right floated content'>
                    <button className='ui button primary'>
                        Edit
                    </button>
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

    render() {
        console.log(this.props)
        return(
            <div>
                <h2>All Streams</h2>
                <div className='ui celled list'>
                    { this.renderList() }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    // turn obj of objs into arr of obj to make it easy to map over and display in UI
    streams: Object.values( state.streams ),
    currentUserId: state.auth.userId

})

export default connect(mapStateToProps, { fetchStreams })(StreamList)
