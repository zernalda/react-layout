/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';

class VideoReview extends Component {

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
        return (
            <div className="background-review">
                {data ? data.slice(0,1).map(datas => {
                const {id,title, thumbnailUrl} = datas
                return (
                    <div className="text-position-video margin-content" key={id}>
                        <div className="row">
                        <div className="col-1">
                                <p className="description-name">{id}</p>
                            </div>
                            <div className="col-11">
                                <p className="description-title-bold">{title}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img src={thumbnailUrl}/>
                            </div>
                        </div>
                    </div>
                    )}
                )
                :<p>please wait ...</p>
            }
            </div>
        );
    }
}

export default VideoReview;