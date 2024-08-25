import Actions from "./Actions";

function Table({ people, onDelete }) {
  return (
    <>
      <table>
        <colgroup span="5" className="columns"></colgroup>
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Num Tel</th>
            <th>Edad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.surname}</td>
              <td>{person.numTel}</td>
              <td>{person.age}</td>
              <td><Actions personId={person.id} onDelete={onDelete} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
