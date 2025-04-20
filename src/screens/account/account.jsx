
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import Logo from "../../../assets/logo";
import { styles } from "./account.style";
import Button from "../../components/button/button";
import { urlCreateAccount } from "../../constants/api";

export default function Account(props) {

    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userName, setUserName] = useState("")

    async function createAccount() {
        console.log("chamei funcao", userName, userEmail, userPassword)
        try {
            const response = await fetch(urlCreateAccount, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    name: userName,
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
            Alert.alert('Conta criada com sucesso',
               "Você ja pode logar com o seu usuário " + userEmail,
                [
                    {
                        text: 'Entendido',
                        style: 'default',
                    },
                ],
                {
                    cancelable: true,
                }
            )

            setUserName("")
            setUserEmail("")
            setUserPassword("")

        } catch (error) {
            Alert.alert('Erro ao criar conta',
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
                
                <Text>{userName}, {userEmail} ,{userPassword}</Text>
            </View>

            <View style={styles.inputContainer}>
                
                <Text style={{ textAlign: "center", fontSize: 24 }}>Criar Conta</Text>
                
                <TextInput placeholder={"Seu nome"} style={styles.input} value={userName}
                    onChangeText={(char) => setUserName(char)} />
                
                <TextInput placeholder={"Seu email"} style={styles.input} value={userEmail}
                onChangeText={(char) => setUserEmail(char)} />
                
                <TextInput placeholder={"Sua senha"} secureTextEntry={true} style={styles.input} value={userPassword} 
                onChangeText={(char) => setUserPassword(char)} />
                
                <Button label={"Criar Conta"} onPressi={createAccount}/>
            </View>

            <View style={styles.footer}>
                <Text>Já tenho conta.</Text>
                <TouchableOpacity onPress={()=> props.navigation.goBack()}>
                    <Text style={styles.btnTertiary}> Voltar e fazer login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}