
import React from "react";
import {Text, TextInput, TouchableOpacity, View } from "react-native";
import Logo from "../../../assets/logo";
import { styles } from "./account.style";
import Button from "../../components/button/button";

export default function Account() {
    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Logo width={'40'} height={'40'} />
            </View>

            <View style={styles.inputContainer}>
                <Text style={{textAlign:"center", fontSize: 24}}>Criar Conta</Text>
                <TextInput placeholder={"Seu nome"} style={styles.input}/>
                <TextInput placeholder={"Seu email"} style={styles.input}/>
                <TextInput placeholder={"Sua senha"} secureTextEntry={true} style={styles.input}/>
                <Button label={"Entrar"} />
            </View>

            <View style={styles.footer}>
            <Text>Já tenho conta.</Text>
            <TouchableOpacity>
                <Text style={styles.btnTertiary}> Voltar e fazer login</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}