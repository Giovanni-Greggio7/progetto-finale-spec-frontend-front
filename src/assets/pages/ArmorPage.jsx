import { useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import MainArmors from "../components/MainArmors"

export default function ArmorPage() {

    const { armors, fetchDataArmor } = useGlobalContext()

    useEffect(() => {
        fetchDataArmor()
    }, [])

    return (
        <>
            <div className='container text-center'>
                <h2>ARMATURE</h2>
                <MainArmors filteredArmor={armors} />
            </div>

        </>
    )
}