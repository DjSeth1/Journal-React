import React, {useState} from 'react'
import CategorySelection from './CategorySelection'
import Home from './Home'
import NewEntry from './NewEntry'
import { BrowserRouter, Routes, Route, useParams, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const seedEntries = [
    {category: "Food", content: "Pizza is awesome"}, 
    {category: "Work", content: "Another day, another dollar"}, 
    {category: "Coding", content: "React is cool!"}
]


const App = () => {
    const [entries, setEntries] = useState(seedEntries)
    const nav = useNavigate()

    // HOC (higher-order component.)
    const ShowEntryWrapper = () => {
        const { id } = useParams()
        const entry = entries[id]
        return entry ? <ShowEntry entry={entry} /> : <h4>Entry not found!</h4>
    }//wrapped an existing component and allows us to add addtional functionality before we actually render it.

    const addEntry = (category, content) => {
        const id = entries.length
        //add a new entry
        const newEntry = {
            category: category,
            content: content
        } 
        setEntries([...entries, newEntry]) 
        nav(`/entry/${id}`)
    }


    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element= {<Home entries={entries}/>} />
                <Route path="/category" element= {<CategorySelection />} />
                <Route path="/entry/:id" element={<ShowEntryWrapper />} />
                <Route path="/entry/new/:category" element={<NewEntry addEntry={addEntry} />} />
                <Route path="*" element={<h4>Page not found!</h4>} /> 
            </Routes>
        </>

    )
}

export default App