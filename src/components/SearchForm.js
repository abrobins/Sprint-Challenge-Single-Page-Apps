import React, { useState } from "react";

export default function SearchForm(props) {
  const [searchterm, setSearchterm] = useState("");

  const handleChange = event => {
    event.preventDefault();
    setSearchterm(event.target.value);
    props.setFiltered(searchterm);
  };

  return (
    <section className="search-form">
      <form>
        <label>
          Search Form:
          <input type="text" value={searchterm} onChange={handleChange} />
        </label>
        {/* <button>Submit</button> */}
      </form>
    </section>
  );
}
