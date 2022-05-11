import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

import "./header.scss"
const Header = () => {
    return (
        <div id="header-img">
            <div className="text">
                <h1 className='fs-1'>Download High Quality Images by creators</h1>
                <span className='m-3 '>Over 2.4 million+ stock Images by our talented community</span>
                <div className='searchBar d-flex align-items-center'>
                    <SearchIcon className="icon" />
                    <input type="text" name="" id="" placeholder='Search high resolution Images, categories, wallpapers' />
                </div>
            </div>
        </div>
    )
}

export default Header