import "../Styles/Header.css"
import React, { Component } from "react";
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import { faCalendarAlt }    from "@fortawesome/free-solid-svg-icons";
import { faUser }           from "@fortawesome/free-solid-svg-icons";

class Header extends Component {

    render() {
        return (
            <div className="container-header">
                <div className="container-title">
                    <h3>Sidecom</h3>
                </div>
                <div className="container-information">
                    <div className="date">
                        <i>
                            <FontAwesomeIcon className="icon" icon={ faCalendarAlt }/>
                        </i>
                        <p>14/03/2021</p>
                    </div>
                    <div className="user">
                        <i>
                            <FontAwesomeIcon className="icon" icon={ faUser }/>
                        </i>
                        <p>Usuario</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header