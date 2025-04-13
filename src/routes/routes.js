import { View } from "react-native";
import OpenRoutes from "./openRoutes";
import PrivateRoutes from "./privateRoutes";

export default function Routes(){

    const user = {
        //id_user: 1,

    }

    return(
       user.id_user ? <PrivateRoutes /> : <OpenRoutes /> 
    )
}