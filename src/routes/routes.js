import { useContext } from "react";
import OpenRoutes from "./openRoutes";
import PrivateRoutes from "./privateRoutes";
import { AuthContext } from "../context/auth";

export default function Routes() {

    const {user} = useContext(AuthContext)

    return (
        user.id ? <PrivateRoutes /> : <OpenRoutes />
    )
}