import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import { Link } from "react-router-dom";
import "./CharacterList.css";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setFiltered(response.data.results);
        setCharacter(response.data.results);
        console.log(response);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);
  // TODO: Add API Request here - must run in `useEffect`
  //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  const FilterSearch = query => {
    setFiltered(
      character.filter(character =>
        character.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <section className="character-list">
      <SearchForm setFiltered={FilterSearch} />
      <Table striped responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Status</th>
            <th>Species</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(char => (
            <tr>
              {/* <Link to={`/characters/${char.id}`} key={char.id}> */}
              <th scope="row">{char.id}</th>
              <td>
                <Link to={`/characters/${char.id}`} key={char.id}>
                  {char.name}
                </Link>
              </td>
              <td>{char.status}</td>
              <td>{char.species}</td>
              {/* </Link> */}
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
}
