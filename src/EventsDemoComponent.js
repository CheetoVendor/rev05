const EventDemoComponent = () => {
    const handleClick = () => {
        console.log("OwO")
    }
    const handleClickAgain = (text) => {
        console.log(text);
    }
    return (
        <>
            <h1>Events Demo</h1>
            <button onClick={handleClick}>CLICK ME! UWU</button>
            <button onClick={() => handleClickAgain("Branden")}>CLICKY</button>
        </>
    );
}

export default EventDemoComponent;