import React, { Component } from 'react';
import ListChannels from './list-channels';
import TitleChannels from './title-channels';

class Channels extends Component {
    render() {
        return (
            <div>
                 <div className="border-activity">
                    <TitleChannels />
                    <ListChannels />
                </div>
            </div>
        );
    }
}

export default Channels;