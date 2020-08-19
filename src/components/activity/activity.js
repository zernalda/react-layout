import React, { Component } from 'react';
import ActivityTitle from './activity-title';
import ActivityList from './activityList';

class Activities extends Component {

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(res => 
            this.setState({
              data: res
            })
          );
    }

    render() {
        return (
            <div className="border-activity-end">
                <ActivityTitle />
                <ActivityList {...this.state}/>
            </div>
        );
    }
}

export default Activities;