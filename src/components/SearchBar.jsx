function SearchBar({ search, setSearch, setFiltredPeople, people }) {
	const handleSearch = (e) => {
		const value = e.target.value;
		setSearch(value);
		if (value === "") {
			setFiltredPeople(people);
		} else {
			setFiltredPeople(
				people.filter((person) =>
					person.name.toLowerCase().startsWith(value.toLowerCase()) ||
					person.surname.toLowerCase().startsWith(value.toLowerCase())
				)
			);
		}
	};
	return (
		<>
			<input 
			type="search" 
			value={search} 
			onChange={handleSearch}
			placeholder="Buscar por nomber o apellido"></input>
		</>
	);
}
export default SearchBar;