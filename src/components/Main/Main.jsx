import React from 'react'
import Card from '../Card/Card'
import "./main.scss"

import { connect } from 'react-redux'

const Main = ({ posts }) => {
    return (
        <div className='mainContainer '>
            {posts.length !== 0
                ?
                posts.data.results.map((post) => {
                    return <Card key={post.id} post={post} />
                }) : null
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps)(Main)