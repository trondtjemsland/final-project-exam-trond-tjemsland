import { data } from 'autoprefixer';
import React, { useState } from 'react';

function typeahead() {
	const [serchTerm, setSearchTerm] = useState('');
	return (
		<div className="searchInput_wrapper">
			<div className="searchInput_container">
                <input id="searchInput" type="text" placeholder="Search..." onChange={(event) => {
                    setSearchTerm(event.target.value)
                }} />
			</div>
            <div className="cardContainer">
                {data.filter((value) => {
                    if (searchTerm == "") {
                        return value;
                    } else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return value;
                    }
                        
            </div>
		</div>
	);
}

export default typeahead;
