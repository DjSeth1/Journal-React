import React from 'react'
import { useParams } from 'react-router-dom'

const NewEntry = () => {
    const { category } = useParams()

    return (
        <h2>New Entry in {category} category</h2>
        <form>
            <div>
                <textarea className="form-control" cols = "30" rows="">

                </textarea>
            </div>
        </form>
    )
}

export default NewEntry