import { createContext, useState } from "react";

// instancia um contexto a uma variavel
const AuthContext = createContext({})

// cria uma function de contexto global
function AuthProvider(props){

    // criando um useState de uso global
    const [user, setUser] = useState({})

// o que a function vai retornar pelo .Provider é o objeto dentro de value
    return <AuthContext.Provider value={
        {
            user,
            setUser
        }
    }>
    </AuthContext.Provider>
}

export {
    AuthContext,
    AuthProvider
}