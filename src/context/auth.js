import { createContext, useState } from "react";

// instancia um contexto a uma variavel
const authContext = createContext({})

// cria uma function de contexto global
function authProvider(props){

    // criando um useState de uso global
    const [user, setUser] = useState({})

// o que a function vai retornar pelo .Provider é o objeto dentro de value
    return <authContext.Provider value={
        {
            user,
            setUser
        }
    }>
    </authContext.Provider>
}

export {
    authContext,
    authProvider
}