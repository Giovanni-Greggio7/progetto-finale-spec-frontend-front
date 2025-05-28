import { useState, useEffect } from 'react'
import { useGlobalContext } from "../context/GlobalContext";
import MainArmors from "../components/MainArmors"
import MainStratagems from "../components/MainStratagems"
import MainWeapons from "../components/MainWeapons"
import SearchBar from "../components/SearchBar";

export default function HomePage() {

    const { armors, fetchDataArmor, fetchDataWeapon, fetchDataStratagem, weapons, stratagems } = useGlobalContext();

    const [query, setQuery] = useState('')
    const [sortOrder, setSortOrder] = useState(0)

    const combinedData = [...armors, ...weapons, ...stratagems]

    function handleClick() {
        setSortOrder(prev => prev === 1 ? -1 : 1)
    }

    const filteredData = combinedData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
    )

    filteredData.sort((a, b) => {
        return sortOrder === 1
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title)
    })

    useEffect(() => {
        fetchDataArmor()
        fetchDataWeapon()
        fetchDataStratagem()
    }, [])

    const filteredArmor = filteredData.filter(item => armors.includes(item))
    const filteredWeapon = filteredData.filter(item => weapons.includes(item))
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
                <div>
                    <h3 className="text-center">Armi</h3>
                    <MainWeapons filteredWeapon={filteredWeapon} />
                </div>
                <div>
                    <h3 className="text-center">Armature</h3>
                    <MainArmors filteredArmor={filteredArmor} />
                </div>
            </div>
        </>
    )
}