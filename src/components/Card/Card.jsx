import React from 'react'
import "./card.scss"
import { ThumbUpAltOutlined } from '@mui/icons-material/';
import Popup from '../Popup/Popup';
import { useState } from 'react';

const Card = ({ post }) => {
    const [openPopup, setOpenPopup] = useState(false)
    return (
        <>
            <div className='cardContainer' onClick={() => setOpenPopup(!openPopup)}>
                <img src={post.urls.regular} alt="" />
                <div className="bottom d-flex">
                    <div className="profile">
                        <img src={post.user.profile_image.medium} alt="" />
                    </div>
                    <div className="all w-100 d-flex justify-content-between align-items-center">
                        <div className="desc">
                            <span className="name">{post.user.first_name} {post.user.last_name}</span>
                            <div className="handel">{post.user.instagram_username}</div>
                        </div>
                        <div className="like d-flex">
                            <ThumbUpAltOutlined className='icon mx-1' />
                            <div className="likes">
                                {post.likes}K
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Popup open={openPopup} setOpenPopup={setOpenPopup} post={post}>

            </Popup>
        </>
    )
}

export default Card