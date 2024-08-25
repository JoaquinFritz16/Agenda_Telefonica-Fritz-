import NavBar from "./SearchBar"
import "./Header.css"
function Header({ search, setSearch, setFiltredPeople, people }){
    return(
        <>
        <div className="header-container">
        <img src="eye_logo1-removebg-preview.png" alt="logo" width="200"></img>
        <NavBar 
        search={search} 
        setSearch={setSearch} 
        setFiltredPeople={setFiltredPeople} 
        people={people}></NavBar>
        </div>
        </>
    )
}
export default Header