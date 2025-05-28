import { FaSearch } from "react-icons/fa"; // Assicurati di avere react-icons installato

export default function SearchBar({ query, setQuery }) {
  return (
    <div className="container my-4">
      <div className="input-group mx-auto" style={{ maxWidth: "400px" }}>
        <span className="input-group-text bg-warning text-white">
          <FaSearch />
        </span>
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