import React, { Component } from 'react';

class ListChannels extends Component {

    state = {
        data: ''
      }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(res => 
            this.setState({
              data: res
            })
          );
    }

    changeBackground= (e) => {
        e.target.style.border = 'solid black';
    }

    startBackground= (e) => {
        e.target.style.border = "hidden"; 
    }    


    render() {
        console.log("channels" + this.state )
        const {data} = this.state
        return (
            <div className="container box" >
                <div className="row background-activity">
                {data ? 
                data.slice(0,8).map(datas => {
                    const {name} = datas
                    return (
                            <div  className="col-5 layar box-channels">
                                <p onMouseEnter={this.changeBackground} onMouseLeave={this.startBackground}>{name}</p>
                            </div>
                    );
                }):<p>loading</p>
            }  
             </div>
            </div>
        );
    }
}

export default ListChannels;