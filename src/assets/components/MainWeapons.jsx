export default function MainWeapons({ filteredWeapon }){

    return (
        <>
            <ul>
                {filteredWeapon.map(element => {
                    return (
                        <li key={element.id}>
                            {element.title} - {element.category}
                        </li>
                    )
                })}
            </ul>
        </>

    )
}