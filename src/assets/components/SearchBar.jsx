import { useGlobalContext } from "../context/GlobalContext";

export default function SearchBar() {

  const { inputQuery, setInputQuery } = useGlobalContext()

  return (
    <div className="container my-4">
      <div className="input-group mx-auto" style={{ maxWidth: "400px" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Cerca per titolo o categoria..."
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
        />
      </div>
    </div>
  );
}