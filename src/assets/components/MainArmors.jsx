export default function MainArmors({ filteredArmor }){

    return (
        <>
            <ul>
                {filteredArmor.map(element => {
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