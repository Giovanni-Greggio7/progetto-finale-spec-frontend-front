
export default function SearchBar({ query, setQuery }) {

    return (
        <>
            <input
                type="text"
                placeholder="Ricerca..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </>
    );
}