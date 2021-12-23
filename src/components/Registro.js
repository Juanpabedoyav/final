const Registro = () => {
    return (
        <div>
              <form >
            <div>
                <label htmlFor="name"></label>
                <input name='name' type="text" placeholder='Nombre del Comensal' />
            </div>
            <div>
                <label htmlFor="email"></label>
                <input name='email' type="text" placeholder='Correo Electronico' />
            </div>
            <div>
                <label htmlFor="password"></label>
                <input name='password' type="text" placeholder='Contraseña' />
            </div>

                <button type='submit'>Registrarme</button>
            </form>
        </div>
    )
}

export default Registro
