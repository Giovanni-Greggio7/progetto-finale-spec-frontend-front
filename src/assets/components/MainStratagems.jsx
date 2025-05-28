export default function MainStratagems({ filteredStratagems }) {

    return (
        <>
            <ul>
                {filteredStratagems.map(element => {
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