import { useState, useEffect } from 'react'
import { useGlobalContext } from "../context/GlobalContext";
import MainStratagems from "../components/MainStratagems"
import SearchBar from "../components/SearchBar";

export default function HomePage() {

    const { fetchDataStratagem, stratagems } = useGlobalContext();

    const [query, setQuery] = useState('')
    const [sortOrder, setSortOrder] = useState(0)

    function handleClick() {
        setSortOrder(prev => prev === 1 ? -1 : 1)
    }

    const filteredData = stratagems.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
    )

    filteredData.sort((a, b) => {
        return sortOrder === 1
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title)
    })

    useEffect(() => {
        fetchDataStratagem()
    }, [])

    const filteredStratagem = filteredData.filter(item => stratagems.includes(item))

    return (

        <>
            <div className='text-center'>
                <SearchBar query={query} setQuery={setQuery} />
                <button onClick={handleClick}>
                    Ordine {sortOrder === 1 ? "A-Z" : "Z-A"}
                </button>
            </div>

            <div className="container">
                <div>
                    <h3 className="text-center">Stratagemmi</h3>
                    <MainStratagems filteredStratagems={filteredStratagem} />
                </div>
            </div>
        </>
    )
}