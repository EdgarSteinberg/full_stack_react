

const Login = () => {

    return (
        <>
            <form id="formulario" action="http://localhost:8080/api/users/login" method="POST">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required />
                <button type="subtmit">Enviar</button>
            </form>
        </>
    )
}

export default Login;