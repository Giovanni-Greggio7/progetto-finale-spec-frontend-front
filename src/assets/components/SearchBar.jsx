export default function SearchBar({ query, setQuery }) {
  return (
    <div className="container my-4">
      <div className="input-group mx-auto" style={{ maxWidth: "400px" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Cerca per titolo o categoria..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
}