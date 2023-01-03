import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const NewEntry = ({ addEntry }) => {
    const { category } = useParams()
    const [entry, setEntry] = useState('')
    // const nav = useNavigate()

    function submit(evt) {
        evt.preventDefault()
        addEntry(category, entry)
    }


    return (
        <>
            <h2>New Entry in {category} category</h2>
            <form onSubmit={submit} className="container">
                <div>
                    <textarea value={entry} onChange={(evt) => setEntry(evt.target.value)} rows="10" className="form-control">
                    </textarea>
                    <button className="btn btn-primary mt-2">
                        Create Entry
                    </button>
                </div>
            </form>
        </>
       
    )
}

export default NewEntry