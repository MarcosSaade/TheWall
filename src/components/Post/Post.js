import React, { useState } from 'react'
import './Post.css'

const Post = (props) => {

    const [post, setPost] = useState('')

    const getPost = () => {
        fetch(`http://localhost:5000/posts/${props.id}`)
            .then((response) => {
            return response.json();
        })
        .then((data) => {
            setPost(data.content)
        })
    }

    getPost()

    const [votes, setVotes] = useState(0)

    const upvote = () => {
        setVotes(votes + 1)
        fetch(`http://localhost:5000/posts/${props.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                votes: votes + 1
            })
        }).then((res) => {
            return res.json()
        })
    }

    const downvote = () => {
        setVotes(votes - 1)
        fetch(`http://localhost:5000/posts/${props.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                votes: votes -1
            })
        }).then((res) => {
            return res.json()
        })
    }


    const getVotes = () => {
        fetch(`http://localhost:5000/posts/${props.id}`)
            .then((res) => {
                return res.json()
            }).then((data) => {
                setVotes(data.votes)
            })
    }

    getVotes()


    return (
        <div>
            <div className='post'>
                <h2 className='text'>{post}</h2>

                <button className='btn up' onClick={upvote}>^</button>
                <p className='votes'>{votes}</p>
                <button className='btn down' onClick={downvote}>v</button>
            </div>
     </div>
    )
}

export default Post
