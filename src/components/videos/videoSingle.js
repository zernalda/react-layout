/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';

class VideoSingle extends Component {
    state= {
        data: ''
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(res => 
            this.setState({
              data: res
            })
          );
    }
    render() {
        const {data} = this.state;
        // console.log("data ini isi state LIST photos: " + JSON.stringify(data));
        return (
        <div>
            {data ? data.slice(0,3).map(datas => {
                const {id, thumbnailUrl} = datas
                return  (
                    <div className="background-single" key={id}>
                        <div className="row margin-content">
                            <div className="col-6 description-name content-position">
                                <p>{id}</p>
                            </div>
                            <div className="col-6 descriptpion-view-bold content-position-right">
                                <img src={thumbnailUrl} className="thumb-box"/>
                            </div>
                        </div>
                    </div>
                 ) }
            )
            : <p>loading ...</p>
        }
        </div>
        );
    }
}

export default VideoSingle;