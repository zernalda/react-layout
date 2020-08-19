import React, { Component } from 'react';

class ActivityList extends Component {

    state = {
        data: ''
      }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(res => 
            this.setState({
              data: res
            })
          );
    }

    changeBackground= (e) => {
        e.target.style.border = 'solid';
    }

    startBackground= (e) => {
        e.target.style.border = "hidden"; 
    }    

    render() {
        const {data} = this.state;
        // console.log("data ini isi state LIST: " + JSON.stringify(data));
        return (
            <div className="container line-end" >
                {data ? 
                data.slice(0,6).map(datas => {
                    const {id, name, email} = datas
                    return (
                        // onMouseLeave={this.startBackground} onMouseOver={this.changeBackground}
                        // eslint-disable-next-line no-undef
                        <div key={id}  className="row background-activity" onMouseEnter={this.changeBackground} onMouseLeave={this.startBackground}>
                        <div  className="col-3 layar"></div>
                            <div className="col-8 margin-list no-border" >
                                <ul key={id} className="no-list list-name-position text-color no-border" >
                                    <li className="caption no-border">
                                        <span className="caption-name-bold ">{id}</span>
                                        <span className="caption-name-bold"> {email}</span>
                                    </li>
                                    <li className="caption"><span>{name}</span></li>
                                    <li className="caption" ><span>2 Seconds ago</span></li>
                                </ul>
                            </div>
                        </div>
                        
                        )}
                    )
                    :<p>loading ...</p>
                }   
            </div>
        );
    }
}

export default ActivityList;