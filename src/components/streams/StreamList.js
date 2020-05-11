import React from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams()
    }

    renderList() {
        return this.props.streams.map( stream => {
            return(
                <div className='item' key={stream.id}>
                    <i className='large middle aligned icon camera' />
                    <div className='conent'>
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
