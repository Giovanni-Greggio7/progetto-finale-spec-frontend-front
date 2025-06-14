import { useState, useEffect } from 'react'
import { useGlobalContext } from "../context/GlobalContext";
import MainStratagems from "../components/MainStratagems"
import SearchBar from "../components/SearchBar";
import Test from '../components/Test';

export default function HomePage() {

    const { fetchDataStratagem, memorizedMemo, handleClick, sortOrder, filteredStrat, setFilteredStrat } = useGlobalContext();

    useEffect(() => {
        fetchDataStratagem();
    }, []);

    return (
        <>
            <div className="bg-dark vh-100">
                <div className="container">
                    <div className="text-center mb-3">
                        <SearchBar />
                    </div>

                    <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 mb-4">
                        <button className="btn btn-secondary" onClick={handleClick}>
                            Ordina {sortOrder === 1 ? "A-Z" : "Z-A"}
                        </button>

                        <select
                            className="form-select w-auto"
                            value={filteredStrat}
                            onChange={e => setFilteredStrat(e.target.value)}
                        >
                            <option value="">Tutte le categorie</option>
                            <option value="Offensivo">Offensivo</option>
                            <option value="Difensivo">Difensivo</option>
                            <option value="Equipaggiamento">Equipaggiamento</option>
                        </select>
                    </div>

                    <h3 className="text-center mb-4 text-yellow">Stratagemmi</h3>
                    <MainStratagems memorizedMemo={memorizedMemo} />
                    <Test/>
                </div>
            </div>
        </>
    )
}