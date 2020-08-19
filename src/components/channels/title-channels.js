import React, { Component } from 'react';

class TitleChannels extends Component {
    render() {
        return (
            <div className="container">
                <div className="row border-activity">
                    <div className="col-6">
                        <p className="title-size text-color">Channels</p>
                    </div>
                    <div className="col-6">
                        <p className="caption text-color position-left">View channels / filter activities</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TitleChannels;