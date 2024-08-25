import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Table from "./components/Table";
import Inputs from "./components/Inputs";
import "./components/stylesTable_Inputs.css";
import axios from "axios";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const urlDb = "http://localhost:3000";
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get(`${urlDb}/people`)
      .then((response) => {
        setPeople(response.data);
        setFilteredPeople(response.data);
      })
      .catch((error) => setError(error));
  }, []);

  const addPeople = (person) => {
    axios.post(`${urlDb}/people`, person)
      .then((response) => {
        setPeople([...people, response.data])
        setFilteredPeople([...people, response.data])
      })
      .catch((error) => setError(error));
  };

  const handleDelete = (personId) => {
    setPeople(people.filter(person => person.id !== personId));
    setFilteredPeople(people.filter(person => person.id !== personId));
  };

  return (
    <>
      <Header
      search={search}
      setSearch={setSearch}
      setFiltredPeople={setFilteredPeople}
      people={people} />
      <div className="container">
        <h1>Agenda Telefonica</h1>
        <Inputs addPeople={addPeople} />
        {error && <p>{error.message}</p>}
        <Table 
        people={filteredPeople} 
        onDelete={handleDelete} />
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
