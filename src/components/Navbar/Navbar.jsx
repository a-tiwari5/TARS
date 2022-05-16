import React, { useState } from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';

import { connect } from 'react-redux';

import {
    searchPost,
    fetchPosts
} from '../../actions/';
import { useEffect } from 'react';


const Navbar = (props) => {
    const onChange = e => {
        props.searchPost(e.target.value);
    };

    const onSubmit = (env) => {
        env.preventDefault();
        props.fetchPosts(props.text);
    }

    const initialRender = () => {
        props.fetchPosts('mountains')
    }

    useEffect(() => {
        initialRender();
    }, [])

    return (
        <div className='navbarContainer d-flex align-items-center'>
            <div className="logo">
                <span>Image Gallery</span>
            </div>
            <div className="searchBar d-flex align-items-center">
                <SearchIcon className='icon' />
                <form onSubmit={onSubmit}>
                    <input type="text" name="" id="" placeholder='Search Images here'
                        onChange={onChange} />
                </form>
            </div>
            <div className="item">
                <span>Explore</span>
            </div>
            <div className="item">
                <span>Collection</span>
            </div>
            <div className="item">
                <span>Community</span>
            </div>
            <div className="item toggle">
                <span>Dark Mode</span>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        text: state.data.text,
    }
}

export default connect(mapStateToProps, { searchPost, fetchPosts })(Navbar)