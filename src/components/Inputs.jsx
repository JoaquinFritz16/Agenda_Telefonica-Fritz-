import { useState } from "react";
import { toast } from "react-toastify";
function Inputs({ addPeople }) {
  const [datos, setDatos] = useState({
    name: '',
    surname: '',
    age: 0,
    numTel: 0
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setDatos(prevDatos => ({
      ...prevDatos,
      [id]: id === 'age' ? Number(value) : value
    }));
  };
  const validationName = (name) => {
    if (name.trim() === ""){
      return "El nombre no puede estar vacio"
    } else if (!/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(name)){
      return "El nombre solo puede contener letras válidas"
    } else if(name.length < 3){
      return "El nombre debe tener al menos 3 caracteres"
    }
  }
  const validationSurname = (surname) => {
        if (surname.trim() === ""){
          return "El apellido no puede estar vacio"
        } else if (!/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(surname)){
          return "El apellido solo puede contener letras válidas"
        } else if(surname.length < 3){
          return "El apellido debe tener al menos 3 caracteres"
        }
      }
      const validationAge = (age) => {
        if(age < 0 || age > 120){
            return "La edad debe ser un número entre 0 y 120"
            }
      }
      const validationNumTel = (numTel) => {
        if (!/^\d{3}-\d{3} \d{4}$/.test(numTel)){
            return "El número de teléfono debe tener el formato XXX-XXX XXXX"
        }
        }
  const handleSubmit = (e) => {
    e.preventDefault();
    const validName=validationName(datos.name)
    const validSurname=validationSurname(datos.surname)
    const validAge=validationAge(datos.age)
    const validNumTel=validationNumTel(datos.numTel)
    if(validName || validSurname || validAge || validNumTel){
        toast.error(validName || validSurname || validAge || validNumTel)
        } else {
            addPeople(datos);
            setDatos({name: '', surname: '', age: 0, numTel: 0 });
            toast.success('Persona agregada con exito')
              }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Id: (será generado automáticamente)</label>
        <label>Nombre: </label>
        <input
          type="text"
          id="name"
          value={datos.name}
          onChange={handleChange}
        />
        <label>Apellido: </label>
        <input
          type="text"
          id="surname"
          value={datos.surname}
          onChange={handleChange}
        />
        <label>Num Tel</label>
        <input
          type="text"
          id="numTel"
          value={datos.numTel}
          onChange={handleChange}
          placeholder="xxx-xxx xxxx"
        />
        <label>Edad: </label>
        <input
          type="number"
          id="age"
          value={datos.age}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
        {console.log(datos)}
      </form>
    </>
  );
}

export default Inputs
