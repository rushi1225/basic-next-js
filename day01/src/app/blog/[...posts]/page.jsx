import React from 'react'

const BlogPostsPage = ({ params }) => {
    return (
        <>
            <h1>Hello this is catch all segments in blog page</h1>

            <h2>id: {params.posts[0]}</h2>
            <h2>id: {params.posts[1]}</h2>
        </>
    )
}

export default BlogPostsPage
