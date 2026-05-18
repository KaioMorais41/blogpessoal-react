import type UsuarioLogin from "../../models/UsuarioLogin";
import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ClipLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
 
function Login() {
 
    const navigate = useNavigate();
 
    const { usuario, handleLogin, isLoading } = useContext(AuthContext)
 
    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    )
 
    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home')
        }
    }, [usuario])
 
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }
 
    function login(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(usuarioLogin)
    }
 
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold" >
                <form className="flex justify-center items-center flex-col w-1/2 gap-4"
                    onSubmit={login}>
 
                    <h2 className="text-slate-900 text-5xl ">Entrar</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="usuario@email.com"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuarioLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                   <div className="flex flex-col w-full">
                    <label htmlFor="senha">Senha</label>
                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Senha"
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuarioLogin.senha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    </div>
                    <button
                        type="submit"
                        className="rounded bg-blue-600 flex justify-center
                        hover:bg-blue-400 text-blue-200 w-1/2 py-2">
                            {isLoading ?
                            <ClipLoader
                        color="ffffff"
                    size={24}
                /> :
                            <span>Entrar</span>
}
                        </button>
 
                        <hr className="border-slate-800 w-full" />
 
                        <p>
                            Ainda não tem uma conta?{' '}
                            <Link to="/cadastro" className="text-indigo-800 hover:underline">
                            Cadastre-se
                            </Link>
                        </p>
                </form>
                <div className="bg-[url('https://media.discordapp.net/attachments/1478006777130909758/1504179478232961095/blog123.PNG?ex=6a060bcd&is=6a04ba4d&hm=ac8ff2d06936710b36e6db0acfbe15fb18f756e73a710d635dd58b89d5ff9aae&=&format=webp&quality=lossless&width=1376&height=917')] lg:block hidden bg-no-repeat
                       w-full min-h-screen bg-cover bg-center"
                       ></div>
            </div>
        </>
    );
}
 
export default Login;