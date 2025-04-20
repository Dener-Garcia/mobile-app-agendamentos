import { createContext, useState } from "react";

// instancia um contexto a uma variavel
const AuthContext = createContext({})

// cria uma function de contexto global
function AuthProvider(props) {

    // criando um useState de uso global
    const [user, setUser] = useState({})

    // o return AuthContext.Providerretornar pelo .Provider o objeto dentro de value para se tornar de uso global
    // o props.children vai pegar o componente do app.js que envolvemos pelo AuthProvider no caso o Routes e devolver para o provider poder retornar a aplicacao, sem isso nao funciona

    return <AuthContext.Provider value={
        {
            user,
            setUser
        }}>

        {props.children}

    </AuthContext.Provider>
}

export {
    AuthContext,
    AuthProvider
}