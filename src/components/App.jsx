import React from 'react'
import CategorySelection from './CategorySelection'
import Home from './Home'
import NewEntry from './NewEntry'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Navbar from './Navbar'




const App = () => {
    const [entries, setEntries] = useState([])

    // HOC (higher-order component.)
    const ShowEntryWrapper = () => {
        const { id } = useParams()
        const entry = entries[id]
        return entry ? <ShowEntry entry={entry} /> : <h4>Entry not found!</h4>
    }//wrapped an existing component and allows us to add addtional functionality before we actually render it.


    return (
        <>

            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element= {<Home entries= {entries}/>} />
                    <Route path='/category/' element= {<CategorySelection />} />
                    <Route path='/entry:id' element={<ShowEntry entries={entries}/>} />
                    <Route path='/entry/new/:category' element= {<NewEntry setEntries={setEntries} entries= {entries} />} />
                    <Route path='*' element = {<h4>Page not found!</h4>} /> 
                </Routes>
            </BrowserRouter>

        </>

    )
}

export default App