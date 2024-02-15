import { useState } from "react"

function AddTodo({addTodo}){
    const[ value, setValue] = useState("");
    function handleChange (e) {
        const inputValue = e.target.value;
        setValue(inputValue)
    }

    function handleClick() {
        if (value.length) {
            addTodo(value)
            setValue("");
        }
    }
    function handleKeDown(e) {
        if (e.code === 'Enter' && value.length) {
            addTodo(value);
            setValue("");
        }
    }
    return (
        <div className="d-flex flex-row justify-content-center align-items-center">
            <input type="text"
            onChange={handleChange}
            onKeyDown={handleKeDown}
             value={value}
             placeholder="Ajouter une todo"
              className="mr-15 flex-fill"/>
            <button onClick={handleClick} className="btn btn-primary align-items-center">Ajouter</button>
        </div>
    )
}

export default AddTodo