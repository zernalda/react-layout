import React, { Component } from 'react';
import '../../assets/style.css'

class ListMenu extends Component {
    render() {
        
        return (
            <div className="container margin">
                <ul className="row no-list text-color background-list-menu">
                    <li className="space-list-menu">
                        <p>Videos</p>
                    </li>
                    <li className="space-list-menu">
                        <p>People</p>
                    </li>
                    {/* <li className="space-list-menu">
                        <p>Documents</p>
                    </li>
                    <li className="space-list-menu">
                        <p>Comunities</p>
                    </li>
                    <li className="space-list-menu">
                        <p>Events</p>
                    </li>
                    <li className="space-list-menu">
                        <p>Favorites</p>
                    </li>
                    <li className="space-list-menu">
                        <p>Channels</p>
                    </li> */}

                    
                </ul>
            </div>
        );
    }
}

export default ListMenu;