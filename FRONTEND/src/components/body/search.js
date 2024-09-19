import { useState } from "react";
import { API } from "../utils/const";
import { Link } from "react-router-dom";

const Search = () => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const searchStyle = {
        width: "80%",
        outlineColor: "var(--theme)",
    };
    const getSearchSuggestions = async (keyword) => {
        const response = await fetch(`${API}/search?keyword=${keyword}`);
        const json = await response.json();
        setSuggestions(json);
    };

    return (
        <div className="search">
            {showModal && (
                <div
                    className="overlay"
                    onClick={() => {
                        setShowModal(false);
                        setSearchKeyword("");
                    }}
                ></div>
            )}
            <input
                className="searchInput"
                style={showModal ? searchStyle : {}}
                placeholder="search"
                onChange={(e) => {
                    setSearchKeyword(e.target.value);
                    getSearchSuggestions(e.target.value);
                    setShowModal(true);
                    e.target.value.length === 0
                        ? setShowModal(false)
                        : setShowModal(true);
                }}
                value={searchKeyword}
                type="search"
            />
            {showModal && (
                <div
                    className="searchResult fadeUpAnimation "
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                >
                    {suggestions.map((obj) => {
                        return (
                            <Link key={obj._id} to={`./restaurant/${obj._id}`}>
                                <div className="searchItem fadeUpAnimation">
                                    {obj["Restaurant Name"]}
                                </div>

                                <hr></hr>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Search;
