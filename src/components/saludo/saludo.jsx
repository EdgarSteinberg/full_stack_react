
const Saludo = ({ nombre }) => {

    const handleClick = () => {
        console.log(nombre)
    }

    return (
        <>
            <button onClick={() => console.log(nombre)}>ClickOnclick</button>
            <button onClick={handleClick}>ClickFuncion</button>
        </>
    )

}

export default Saludo