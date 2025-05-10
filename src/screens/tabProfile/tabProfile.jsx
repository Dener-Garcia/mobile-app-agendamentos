import { Alert, Text, View } from "react-native";
import { styles } from "./tabProfileStyle";
import {urlUserProfile} from "../../constants/api.js"
import { useContext, useEffect, useState } from "react";
import {AuthContext} from "../../context/auth.js"

export default function TabProfile() {

    const {user} = useContext(AuthContext)

    const [profile, setProfile] = useState([])
    
    async function getUserProfile() {
        try {
            const response = await fetch(`${urlUserProfile}`, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    "authorization": `Bearer ${user.token}`
                }
            })

            console.log("chamo", response.ok)
            const data = await response.json()
            if (!response.ok) {
                throw new Error(data.error)
            }

            setProfile(data)
            console.log(data, profile)

        } catch (err) {
            console.log(err)
            Alert.alert('Erro',
                err.message,
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

    useEffect(() => {
        getUserProfile()
    },[2])

    return (
        <View style={styles.container}>
            <View style={styles.output}>
                <Text style={styles.title}>Nome</Text>
                <Text style={styles.subTitle}>{profile.name}</Text>
            </View>
            <View style={styles.output}>
                <Text style={styles.title}>Email</Text>
                <Text style={styles.subTitle}>{profile.email}</Text>
            </View>
            
        </View>
    )
}