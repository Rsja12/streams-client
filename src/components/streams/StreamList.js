import React from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams()
    }

    render() {
        console.log(this.props.streams)
        return(
            <div>
                StreamList
            </div>
        )
    }
}

const mapStateToProps = state => ({
    // turn obj of objs into arr of obj to make it easy to map over and display in UI
    streams: Object.values( state.streams ) 
})

export default connect(mapStateToProps, { fetchStreams })(StreamList)
