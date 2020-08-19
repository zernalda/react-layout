import React, { Component } from 'react';

class ActivityTitle extends Component {
    render() {
        return (
            <div className="container">
                <div className="row border-activity">
                    <div className="col-6">
                        <p className="title-size text-color">Comments</p>
                    </div>
                    <div className="col-6">
                        <p className="caption text-color position-left">View timeline / filter activities</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ActivityTitle;