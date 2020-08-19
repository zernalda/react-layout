import React, { Component } from 'react';

class VideoTitle extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <p className="title-size">Videos</p>
                </div>
                <div className="col-4 right-bottom">
                    <p className="caption right-bottom">Browse all Video</p>
                </div>
            </div>
        );
    }
}

export default VideoTitle;