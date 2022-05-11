import React, { useState } from 'react'
import axios from 'axios';
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import { useEffect } from 'react';

const Navbar = () => {
    const [term, setTerm] = useState('mountains')
    const [data, setData] = useState([])
    useEffect(() => {
        const search = async () => {
            const res = await axios.get('https://api.unsplash.com/search/photos', {
                params: {
                    query: term,
                    client_id: '3nDCTHXivTz9w8XLFUU1MC6NLo9PtreskRinC1NWUh0',
                    per_page: 25
                }
            })
            setData(res.data.results);
        }
        search();
    }, [term])

    return (
        <div className='navbarContainer d-flex align-items-center'>
            <div className="logo">
                <span>Image Gallery</span>
            </div>
            <div className="searchBar d-flex align-items-center">
                <SearchIcon className='icon' />
                <input type="text" name="" id="" placeholder='Search Images here'
                    value={term}
                    onChange={(e) => setTerm(e.target.value)} />
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

export default Navbar