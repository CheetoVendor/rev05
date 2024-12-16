import { useState } from "react";

const ListAdd = ({ setList }) => {

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(value);
        setList((prevList) => { return [...prevList, value] });
        setValue("");
    }
    const [value, setValue] = useState("");

    return (
        <>
            <form onSubmit={submitHandler}>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                <button>Add</button>
            </form>

        </>);

}

export default ListAdd;