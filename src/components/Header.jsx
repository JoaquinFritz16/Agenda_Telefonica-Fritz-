import SearchBar from "./SearchBar"
import "./Header.css"
function Header({ search, setSearch, setFiltredPeople, people }){
    return(
        <>
        <div className="header-container">
        <img src="eye_logo1-removebg-preview.png" alt="logo" width="200"></img>
        <SearchBar 
        search={search} 
        setSearch={setSearch} 
        setFiltredPeople={setFiltredPeople} 
        people={people}></SearchBar>
        </div>
        </>
    )
}
export default Header