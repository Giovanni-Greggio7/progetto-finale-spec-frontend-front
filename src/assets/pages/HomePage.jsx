import { useState, useEffect } from 'react'
import { useGlobalContext } from "../context/GlobalContext";
import MainStratagems from "../components/MainStratagems"
import SearchBar from "../components/SearchBar";

export default function HomePage() {

    const { fetchDataStratagem, stratagems } = useGlobalContext();

    const [query, setQuery] = useState('')
    const [filteredStrat, setFilteredStrat] = useState('')
    const [sortOrder, setSortOrder] = useState(0)

    function handleClick() {
        setSortOrder(prev => prev === 1 ? -1 : 1)
    }

    const filteredData = stratagems.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    )
        .filter((item) => (filteredStrat ? item.category === filteredStrat : true))

    filteredData.sort((a, b) => {
        return sortOrder === 1
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title)
    })

    useEffect(() => {
        fetchDataStratagem()
    }, [])

    return (

        <>
            <div className="bg-dark py-4">
                <div className="container">
                    <div className="text-center mb-3">
                        <SearchBar query={query} setQuery={setQuery} />
                    </div>

                    <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 mb-4">
                        <button className="btn btn-secondary" onClick={handleClick}>
                            Ordina {sortOrder === 1 ? "A-Z" : "Z-A"}
                        </button>

                        <select
                            className="form-select w-auto"
                            value={filteredStrat}
                            onChange={e => setFilteredStrat(e.target.value)}
                        >
                            <option value="">Tutte le categorie</option>
                            <option value="Offensivo">Offensivo</option>
                            <option value="Difensivo">Difensivo</option>
                            <option value="Equipaggiamento">Equipaggiamento</option>
                        </select>
                    </div>

                    <h3 className="text-center mb-4">Stratagemmi</h3>
                    <MainStratagems filteredStratagems={filteredData} />
                </div>
            </div>
        </>
    )
}