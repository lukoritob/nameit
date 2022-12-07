import React from "react";
import './Header.css';

const Header = ({ headTitle, headerExpanded }) => {
    return (
        <div className="header-container">
            <img src="./images/code-thinking.png"
                className={`head-image ${headerExpanded
                    ? 'head-image-expanded'
                    : 'head-image-contracted'
                    }`}
                alt="logo" />
            <h1 className={`head-text ${headerExpanded
                ? 'head-text-expanded'
                : 'head-text-contracted'
                }`}>{headTitle}</h1>
        </div>

    )
}
export default Header;