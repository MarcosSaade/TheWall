import React, { useState } from 'react'
import './Textbox.css'

const Textbox = () => {
    const [value, setValue] = useState('')

    const handleWrite = (event) => {
        setValue(event.target.value)
    }

    const handleClear = () => {
        setValue('')
    }

    const submit = () => {
        if (value){
            fetch('http://localhost:5000/posts', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({content: value, votes: 0})
        })
        }
        setValue('')
    }

    return (
        <div className='placeholder'>
            <textarea type="text" className="textbox" value={value} onChange={handleWrite} placeholder="Share your thoughts with the world..."/>
            <button className='clear' onClick={handleClear}>Clear</button>
            <button className="submit" onClick={submit}>Submit</button>
        </div>
    )
}

export default Textbox
