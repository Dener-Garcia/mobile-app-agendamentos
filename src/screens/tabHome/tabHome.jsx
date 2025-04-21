import { useContext, useEffect, useState } from "react";
import { Alert, FlatList, SafeAreaView, Text, View } from "react-native";
import { styles } from "./tabHomeStyle";
//import { doctors } from "../../constants/dumpData";
import Doctor from "../../components/doctor.jsx/doctor";
import { urlGetDoctors } from "../../constants/api";
import { AuthContext } from "../../context/auth";

export default function TabHome(props) {

    const [doctors, setDoctors] = useState([])
    const {user} = useContext(AuthContext)

    function clickDoctor(id_doctor, name, speciality, icon) {
        props.navigation.navigate("services",
            {
                id_doctor,
                name,
                speciality,
                icon
            }
        )
    }

    async function loadDoctors() {
        try {
            const response = await fetch(urlGetDoctors, {
                method: "GET",
                headers: {
                    "content-type" : "application/json",
                    "authorization" : `Bearer ${user.token}`
                }
        })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error)
            }


            setDoctors(data)

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
        loadDoctors()
    }, [323])

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Agende um serviço com seu médico</Text>
                <FlatList style={styles.flatList}
                    data={doctors}
                    keyExtractor={(item) => item.id_doctor}
                    renderItem={({ item }) => < Doctor
                        id_doctor={item.id_doctor}
                        name={item.name}
                        speciality={item.specialty}
                        icon={item.icon}
                        onPressi={clickDoctor}
                    />
                    }
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}