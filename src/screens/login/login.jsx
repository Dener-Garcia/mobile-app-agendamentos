import { Text, TextInput, Touchable, TouchableHighlight, TouchableOpacity, View } from "react-native";
import Logo from "../../../assets/logo";
import { styles } from './login.style'
import Button from "../../components/button/button";

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Logo width={'40'} height={'40'} />
            </View>

            <View style={styles.inputContainer}>
            <Text style={{textAlign:"center", fontSize: 24}}>Fazer Login</Text>
                <TextInput placeholder={"Seu email"} style={styles.input}/>
                <TextInput placeholder={"Sua senha"} secureTextEntry={true} style={styles.input}/>
                <Button label={"Entrar"} />
            </View>

            <View style={styles.footer}>
            <Text>Não tenho conta.</Text>
            <TouchableOpacity>
                <Text style={styles.btnTertiary}> Quero criar minha conta</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}