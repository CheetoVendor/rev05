import { useState } from "react";

const StateDemoComponent = () => {
    // accepts initial state and a function to update it.
    // destructuring ex
    const [name, setName] = useState("Branden")
    const [age, setAge] = useState(27)

    const changeName = (text) => {
        setName(text);
    }

    const changeAge = (age) => {
        setAge(age);
    }
    return (
        <>
            <h2>{name} is {age} years old</h2>
            <button onClick={() => {
                changeName("Branden Changed");
                changeAge(30)
            }
            }>Change</button >
        </>
    );
}

export default StateDemoComponent;