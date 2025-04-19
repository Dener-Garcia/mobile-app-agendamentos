import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import { styles } from "./servicesStyle";
import { doctors_services } from "../../constants/dumpData";
import MedicalIllustration from "../../../assets/medical-illustration";
import Service from "../../components/service/service";

export default function Services(props) {

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


    return (
        <SafeAreaView>
            <View style={styles.container}>

                <View style={styles.banner}>

                    <MedicalIllustration size={160} tshirtColor={icon == "M" ? "#8338ec" : "#ff006e"} />
                    <Text style={styles.doctor}>{doctorName}</Text>
                    <Text style={styles.specialityText}>{doctorSpeciality}</Text>

                </View>

                <FlatList style={styles.flatList}
                    data={doctors_services}
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