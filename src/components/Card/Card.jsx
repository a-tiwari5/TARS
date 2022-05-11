import React from 'react'
import "./card.scss"
import { ThumbUpAltOutlined } from '@mui/icons-material/';

const Card = () => {
    return (
        <div className='cardContainer'>
            <img src="https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <div className="bottom d-flex">
                <div className="profile">
                    <img src="https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="all w-100 d-flex justify-content-between align-items-center">
                    <div className="desc">
                        <span className="name">Julia Robertson</span>
                        <div className="handel">@juliaclicks</div>
                    </div>
                    <div className="like d-flex">
                        <ThumbUpAltOutlined className='icon mx-1' />
                        <div className="likes">
                            2.3K
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card