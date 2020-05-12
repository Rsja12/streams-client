import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'

export class StreamShow extends Component {

    componentDidMount() {
        this.props.fetchStream( this.props.match.params.id )
    }
    
    render() {
        console.log(this.props.stream)
        return (
            <div>
                StreamShow
            </div>
        )
    }
}

const mapStateToProps = ( state, ownProps ) => ({
    stream: state.streams[ownProps.match.params.id]
})

export default connect(mapStateToProps, { fetchStream })(StreamShow)
