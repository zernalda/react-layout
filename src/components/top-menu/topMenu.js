import React, { Component } from 'react';
import Logo from './logo';
import Search from './search';
import User from './user';


class TopMenu extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Logo />
                    <Search />
                    <User />
                </div>
            </div>
        );
    }
}

export default TopMenu;