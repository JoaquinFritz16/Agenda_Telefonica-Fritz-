import { toast } from "react-toastify";
import axios from "axios";
function Actions({personId, onDelete}){
    const urlDb = "http://localhost:3000/people";
    const handleDelete = () => {
        axios.delete(`${urlDb}/${personId}`)
        .then(()=>{
            onDelete(personId)
            toast.success("Persona eliminada correctamente")
        })
        .catch((error) => {
            toast.error("Error al eliminar el usuario");
            console.log(error);
        });
            
     };
    return(
        <><button onClick={handleDelete}>Eliminar</button></>
    )
}
export default Actions;