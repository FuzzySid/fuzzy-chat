import React from 'react'
import './Header.css';
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                {/* Avatar for logged in user */}
                <Avatar
                    className="header__avatar"
                    alt='Fuzzy'
                    src=''
                />
                <AccessTimeIcon/>
                {/* Time Icon */}
            </div>
            <div className="header__search">
                {/* Search Icon */}
                <SearchIcon/>
                {/* Input */}
                <input placeholder="Search Fuzzy Chat"/>
            </div>
            <div className="header__right">
                {/* help icon */}
                <HelpIcon/>
            </div>

        </div>
    )
}

export default Header
