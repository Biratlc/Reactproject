import React, { Component } from 'react';
import './nav-bar.css';

class NavBarComponent extends Component {
    constructor(props) {
        super(props);


    }
    render() {
        return (
            <div style={{
                color: "green",
            }}>
                <ul className={"nav-manu"}>
                    <li className="menu-ghassan"><a href="/"></a> Ghassan</li>
                    <li className="menu-Tran">Don Tran</li>
                    <li className="menu-kuo-pao">Kuo Pao</li>
                </ul>
            </div>
        )
    }
}

export default NavBarComponent;