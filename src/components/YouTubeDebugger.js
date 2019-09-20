import React from 'react'

class YouTubeDebugger extends React.Component{
    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
    }

    handleBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        });
        console.log(this.state.settings.bitrate)
    }

    handleResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
               video: {
                   resolution: '720p'
                }
            }
            });
            console.log(this.state.settings.video)
    }

    render() {
    return <div>
            <button onClick={this.handleBitrate} className="bitrate">CLICK ME</button> 
            <button onClick={this.handleResolution} className='resolution'>CLICK ME TOO</button>
    </div>
}}

export default YouTubeDebugger