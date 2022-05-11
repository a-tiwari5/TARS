import React from 'react'
import "./card.scss"
import { ThumbUpAltOutlined } from '@mui/icons-material/';

const Card = ({ post }) => {
    console.log(post)
    return (
        <div className='cardContainer '>
            <img src={post.urls.regular} alt="" />
            <div className="bottom d-flex">
                <div className="profile">
                    <img src={post.user.profile_image.small} alt="" />
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
    )
}

export default Card