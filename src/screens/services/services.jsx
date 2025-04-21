import { useContext, useEffect, useState } from "react";
import { Alert, FlatList, SafeAreaView, Text, View } from "react-native";
import { styles } from "./servicesStyle";
// import { doctors_services } from "../../constants/dumpData";
import MedicalIllustration from "../../../assets/medical-illustration";
import Service from "../../components/service/service";
import { urlDoctorServices } from "../../constants/api";
import { AuthContext } from "../../context/auth";

export default function Services(props) {

    const {user} = useContext(AuthContext)
    const [doctorsServices, setDoctorsServices] = useState([])

    const idDoctor = props.route.params.id_doctor
    const doctorName = props.route.params.name
    const doctorSpeciality = props.route.params.speciality
    const icon = props.route.params.icon

    function clickService(id_service, idDoctor, doctorName) {
        props.navigation.navigate("schedule",
            {
                id_service,
                idDoctor,
                doctorName
            }
        )
    }

    async function loadServices() {
        try {
            console.log(idDoctor)
            const response = await fetch(`${urlDoctorServices}${idDoctor}/service`, {
                        method: "GET",
                        headers: {
                            "content-type" : "application/json",
                            "authorization" : `Bearer ${user.token}`
                        }
                })
                
            const data = await response.json()

            console.log("###########", response.ok, data)

            if (!response.ok) {
                const message = data.error
                console.log("Mensagem:", message)
                throw new Error(data.error)
            }

            if (data.length === 0) {
                console.log("sem servico")
                Alert.alert('Medico indisponivel',
                    "O Medico selecionado nao possui serviços",
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

            setDoctorsServices(data)

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
        loadServices()
    }, [])


    return (
        <SafeAreaView>
            <View style={styles.container}>

                <View style={styles.banner}>

                    <MedicalIllustration size={160} tshirtColor={icon == "M" ? "#8338ec" : "#ff006e"} />
                    <Text style={styles.doctor}>{doctorName}</Text>
                    <Text style={styles.specialityText}>{doctorSpeciality}</Text>

                </View>

                <FlatList style={styles.flatList}
                    data={doctorsServices}
                    keyExtractor={(item) => item.id_service}
                    renderItem={({ item }) => < Service
                        idService={item.id_service}
                        speciality={item.description}
                        price={item.price}
                        idDoctor={idDoctor}
                        doctorName={doctorName}
                        onPressi={clickService}
                    />}
                    showsVerticalScrollIndicator={false}
                />

            </View>
        </SafeAreaView>
    )
}