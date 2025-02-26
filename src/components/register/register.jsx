
const Register = () => {

    return (
        <>
            <form action="http://localhost:8080/api/users/register" method="POST">
                <label htmlFor="first_name">Nombre</label>
                <input type="text" name="first_name" required />

                <label htmlFor="last_name">Apeliido</label>
                <input type="text" name="last_name" required />

                <label htmlFor="age">Edad</label>
                <input type="number" name="age" required />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" required />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" required />

                <button type="submit">Enviar</button>
            </form>
        </>
    )
}

export default Register;