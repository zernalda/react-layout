import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div className="col-4 menu-position user-right">
                <div className="row">
                    <div className="col-10 user-right">
                        <button className="background-secondary">O</button>
                    </div>
                    <div className="col-2">
                        <p className="caption-bold">Washeem</p>
                        <p className=" name-width caption">Arshad</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;