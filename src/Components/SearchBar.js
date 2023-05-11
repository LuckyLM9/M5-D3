import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';

const SearchBar = ({ funzionelibri, books }) => {
    const [searchTerm, setSearchTerm] = useState("")
    console.log(searchTerm);
    const filterBooks = () => {
        
        funzionelibri(books.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase())))

    }
    function handleChange(event) {
        console.log(event);
        setSearchTerm(event.target.value)
        filterBooks()
    }

    function handleClear() {
        setSearchTerm("")
        handleChange({ target: { value: "" } })
    }
    return (
        
        <div>
            
             <Form className="d-flex">
            <input type="search" placeholder="Cerca"className="me-2" aria-label="Search" value={searchTerm} onChange={handleChange} />
            <button onClick={handleClear}>Clear</button>
            </Form>
        </div>
    )
}

export default SearchBar