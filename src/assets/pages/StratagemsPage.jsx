import { useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import MainStratagems from "../components/MainStratagems"

export default function StratagemPage() {

    const { stratagems, fetchDataStratagem } = useGlobalContext()

    useEffect(() => {
        fetchDataStratagem()
    }, [])

    return (
        <>
            <div className='container text-center'>
                <h2>STRATAGEMMI</h2>
                <MainStratagems filteredStratagems={stratagems} />
            </div>

        </>
    )
}