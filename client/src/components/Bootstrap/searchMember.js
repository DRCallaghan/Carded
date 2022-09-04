import React, { useState } from "react";
import './modal.css';

function SearchMember({ placeholder, data }) {

    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        const searchName = event.target.value;
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchName.toLowerCase());
        });
        if (searchName === "") {
            setFilteredData = ([])
        } else {
            setFilteredData(newFilter);
        }
    };
    return (
        <div className="search">
            <div className='team-info'>
                <input className="input" type='text' placeholder={placeholder} onChange={handleFilter} />
            </div>
            {filteredData.length !== 0 && (
                <div className='results'>
                    {filteredData.slice(0, 5).map((value, key) => {
                        return (
                            <a className="dataName" href={value.link} target="??"> 
                            {/* possible redirect to user page?
                         with additional add to team button? or basic request to that user? will they need to confirm? */}
                                <p>{value.name}</p>
                            </a>
                        );
                    })}
                </div>
            )}
        </div >
    )
}

export default SearchMember;