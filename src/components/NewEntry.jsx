import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const NewEntry = ({ setEntries, entries }) => {
    const { category } = useParams()
    const [entry, setEntry] = useState('')

    function submit(evt) {
        evt.preventDefault()
        //add a new entry
        const newEntry = {
            category: category,
            content: entry
        } 
        setEntries([...entries, newEntry]) //creates a new entry array and adds it to the existing entries.

    }


    return (
        <>
            <h2>New Entry in {category} category</h2>
            <form className="container">
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