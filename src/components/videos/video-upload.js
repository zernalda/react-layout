import React, { Component } from 'react';

class VideoUpload extends Component {
    render() {
        return (
            <div className="background-upload">
                <div className="row upload-content-position">
                    <div className="col-2">(X)</div>
                    <div className="col-10 description-name">Upload Your Own Video</div>
                </div>
            </div>
        );
    }
}

export default VideoUpload;