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
            <div className='container vh-100 bg-dark'>
                <h2 className='text-center text-yellow'>STRATAGEMMI</h2>
                <MainStratagems filteredStratagems={stratagems} />
            </div>

        </>
    )
}