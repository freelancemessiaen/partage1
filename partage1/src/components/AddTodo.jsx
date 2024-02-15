import { useState } from "react"

function AddTodo({addTodo}){
    const[ value, setValue] = useState("");
    function handleChange (e) {
        const inputValue = e.target.value;
        setValue(inputValue)
        console.log(inputValue);
    }
    return (
        <div className="d-flex flex-row justify-content-center align-items-center">
            <input type="text"
            onChange={handleChange}
             value={value}
             placeholder="Ajouter une todo"
              className="mr-15 flex-fill"/>
            <button className="btn btn-primary align-items-center">Ajouter</button>
        </div>
    )
}

export default AddTodo