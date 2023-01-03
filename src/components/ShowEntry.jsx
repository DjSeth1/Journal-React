import React from 'react'

// will accept entry as a prop.
const ShowEntry = ({ entry }) => {


    return (
        <>
            <h5>{entry.content}</h5>
            <p>Posted in {entry.category}</p>
        </>
    )
}

export default ShowEntry