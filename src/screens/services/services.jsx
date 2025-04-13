import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import { styles } from "./servicesStyle";
import { doctors_services } from "../../constants/dumpData";
import MedicalIllustration from "../../../assets/medical-illustration";
import Service from "../../components/service/service";

export default function Services() {
    return (
        <SafeAreaView>
            <View style={styles.container}>

                <View style={styles.banner}>

                    <MedicalIllustration size={160} />
                    <Text style={styles.doctor}>Nome medidco</Text>
                    <Text style={styles.specialityText}>Especialidade</Text>

                </View>

                    <FlatList style={styles.flatList}
                        data={doctors_services}
                        keyExtractor={(item) => item.id_service}
                        renderItem={({ item }) => < Service speciality={item.description} price={item.price} />}
                        showsVerticalScrollIndicator={false}

                    />

            </View>
        </SafeAreaView>
    )
}