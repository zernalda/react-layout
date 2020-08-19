import React, { Component } from 'react';
import '../../assets/style.css'

class Search extends Component {
    render() {
        return (
            <div className="col-5 ">
               <ul className="row no-list text-color background-list-menu">
                    <li className="space-list-menu">
                        <p>Videos / </p>
                    </li>
                    <li className="space-list-menu">
                        <p>People / </p>
                    </li>
                    <li className="space-list-menu">
                        <p>Documents / </p>
                    </li>
                    <li className="space-list-menu">
                        <p>Comunities / </p>
                    </li>
                    {/* <li className="space-list-menu">
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

export default Search;