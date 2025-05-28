import { useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import MainWeapons from "../components/MainWeapons"

export default function WeaponPage() {

    const { weapons, fetchDataWeapon } = useGlobalContext()

    useEffect(() => {
        fetchDataWeapon()
    }, [])

    return (
        <>
            <div className='container text-center'>
                <h2>ARMI</h2>
                <MainWeapons filteredWeapon={weapons} />
            </div>

        </>

    )
}