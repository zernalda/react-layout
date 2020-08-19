import React, { Component } from 'react';
import VideoReview from './video-review';
import VideoSingle from './videoSingle';
import VideoUpload from './video-upload';
import VideoTitle from './video-title';

class Videos extends Component {
    render() {
        return (
            <div>
                <VideoTitle />
                <div className="row">
                    <div className="col-8">
                        <VideoReview />
                    </div>
                    <div className="col-4">
                        <VideoSingle />
                    </div>  
                </div>
                <div className="row">
                    <div className="col">
                        <VideoUpload />
                    </div>
                </div>
            </div>  
        );
    }
}

export default Videos;