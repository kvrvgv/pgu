import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Nav = ({children}) => {
    return (
        <div style={{position: "relative"}}>
            <div className="nav_bar">
                <Link to="/posts" style={{textDecoration: "none"}}>
                    <div className="nav_bar_item">Посты</div>
                </Link>
                <Link to="/" style={{textDecoration: "none"}}>
                    <div className="nav_bar_item">Логин</div>
                </Link>

                <Link to="/register" style={{textDecoration: "none"}}>
                    <div className="nav_bar_item">Регистрация</div>
                </Link>
            </div>
            {children}
        </div>
    );
}

export default Nav;