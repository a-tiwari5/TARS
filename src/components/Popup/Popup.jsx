import React from 'react'
import { Dialog, DialogContent } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import InfoIcon from '@mui/icons-material/Info';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { ThumbUpAltOutlined } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import "./popup.scss"

const Popup = ({ open, setOpenPopup, post }) => {
    console.log(post.tags)
    return (
        <>
            <Dialog
                maxWidth='md'
                open={open}
            >

                <DialogContent sx={{ padding: 0, width: '900px', height: '624px' }}>
                    <div className="content" >
                        <div className="image">
                            <img src={post.urls.full} alt="" />
                            <div className="shareBtn">
                                <ShareIcon sx={{ marginRight: '8px' }} />
                                <span>Share</span>
                            </div>
                            <div className="infoBtn">
                                <InfoIcon sx={{ marginRight: '8px' }} />
                                <span>Share</span>
                            </div>
                            <div className="downloadBtn bg-success">
                                <span>Download image</span>
                            </div>
                        </div>
                        <div className="desc">
                            <div className="top d-flex justify-content-between align-items-center">
                                <div className="profile d-flex align-items-center">
                                    <div className="img">
                                        <img src={post.user.profile_image.medium} alt="" />
                                    </div>
                                    <div className="item mx-2">
                                        <span className="name">Jacob Jones</span>
                                        <div className="handel">@jacobclicks</div>
                                    </div>
                                    <span className="handel instaHandel mx-2">
                                        <InstagramIcon className='icon' />\{post.user.instagram_username}
                                    </span>
                                    <span className="handel twitter handel">
                                        <TwitterIcon className='icon' />\{post.user.twitter_username}
                                    </span>
                                </div>
                                <div className="downloadsAndLikes d-flex align-items-center">
                                    <span className='downloads mx-4'>1.2K downloads</span>
                                    <span className='likes'><ThumbUpAltOutlined className='icon' /> 2.3K </span>
                                </div>
                            </div>
                            <div className="bottom">
                                <span className="title">Related Tags</span>
                                <div className="tags d-flex">
                                    {post.tags.map((tag) => {
                                        return (
                                            <div className="tag">
                                                {tag.title}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>

                </DialogContent>
                <IconButton className='iconButton'
                    aria-label="close"
                    onClick={() => setOpenPopup()}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}>
                    <CloseIcon />
                </IconButton>
            </Dialog>
        </>
    )
}

export default Popup