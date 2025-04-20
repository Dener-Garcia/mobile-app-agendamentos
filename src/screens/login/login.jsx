import { Alert, Text, TextInput, Touchable, TouchableHighlight, TouchableOpacity, View } from "react-native";
import Logo from "../../../assets/logo";
import { styles } from './login.style'
import Button from "../../components/button/button";
import { useState } from "react";
import { urlLogin } from "../../constants/api";
import { useLinkProps } from "@react-navigation/native";


export default function Login(props) {

    const [userEmail, setuserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")

    async function login() {
        console.log("chamei funcao")
        try {
            const response = await fetch(urlLogin, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    email: userEmail,
                    password: userPassword
                })
            })

            const data = await response.json()

            console.log("###########", response.ok)

            if (!response.ok) {
                console.log("Mensagem:", data.Message)
                throw new Error(data.Message)
            }

            console.log("deu certo", data)

        } catch (error) {
            Alert.alert('Erro de login',
                error.message,
                [
                    {
                        text: 'Entendido',
                        style: 'cancel',
                    },
                ],
                {
                    cancelable: true,
                }
            )
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Logo width={'40'} height={'40'} />
                <Text>{userEmail}, {userPassword}</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={{ textAlign: "center", fontSize: 24 }}>Fazer Login</Text>
                <TextInput placeholder={"Seu email"} style={styles.input} onChangeText={(char) => setuserEmail(char)} />
                <TextInput placeholder={"Sua senha"} secureTextEntry={true} style={styles.input} onChangeText={(char) => setUserPassword(char)} />
                <Button label={"Entrar"} onPressi={login} />
            </View>

            <View style={styles.footer}>
                <Text>Não tenho conta.</Text>
                <TouchableOpacity onPress={()=> props.navigation.navigate("account")}>
                    <Text style={styles.btnTertiary}> Quero criar minha conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}