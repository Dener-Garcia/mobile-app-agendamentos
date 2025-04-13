import { FlatList, SafeAreaView, Text, View } from "react-native";
import { styles } from "./tabHomeStyle";
import { doctors } from "../../constants/dumpData";
import Doctor from "../../components/doctor.jsx/doctor";

export default function TabHome(){
    return(
        <SafeAreaView>
        <View style={styles.container}>
            <Text>Agende um serviço com seu médico</Text>
            <FlatList style={styles.flatList}
                data={doctors}
                keyExtractor={(item) => item.id_doctor}
                renderItem={({item}) => < Doctor name={item.name} speciality={item.specialty} isMale={item.icon === "M" ? true : false} />}
                showsVerticalScrollIndicator={false}
                
            />
        </View>
        </SafeAreaView>
    )
}