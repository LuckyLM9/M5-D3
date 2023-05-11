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
        <Mynav></Mynav>
        )
    }
    
    export default SearchBar