//#57
/*import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <NavLink exact activeClassName="active_class" to="/">
                About US
            </NavLink>

            <NavLink activeClassName="active_class" to="/contact">
                Contact US
            </NavLink>
            <br />
            <a href="/"> AboutUS</a>
            <a href="/contact">ContactUS</a>
        </>
    );
};

export default Menu;*/

//#58            // #59 user 
import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <div className="menu_style">
                <NavLink activeClassName="active_class" to="/">
                    About US
                </NavLink>

                <NavLink activeClassName="active_class" to="/service">
                    Services
                </NavLink>

                <NavLink activeClassName="active_class" to="/search">
                    Search
                </NavLink>

                <NavLink activeClassName="active_class" to="/user/dharm/singh">
                    User
                </NavLink>

                <NavLink activeClassName="active_class" to="/contact">
                    Contact US
                </NavLink>
            </div>

        </>
    );
};

export default Menu;