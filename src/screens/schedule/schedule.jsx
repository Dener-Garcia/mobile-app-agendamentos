import { View, Text } from "react-native";

import { styles } from "./scheduleStyle";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBr } from "../../constants/calendarConfig";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/button/button";

LocaleConfig.locales['pt'] = ptBr
LocaleConfig.defaultLocale = 'pt';

export default function Schedule() {

    const [selectedt, setSelectedt] = useState(today)
    const [selectedHour, setSelectedHour] = useState();

    const today = new Date().toDateString().slice(0, 10)

    console.log(today, selectedt, selectedHour)


    return (
        <View style={styles.container}>
            <Calendar style={styles.theme}

           //     current={selectedt}

                onDayPress={(day) => {
                    setSelectedt(day.dateString)
                }}

                markedDates={
                    { [selectedt]: { selected: true } }
                }

                minDate={
                    new Date().toDateString()
                }
            />

            <View>
                <Text style={styles.label}>Selecione um horário</Text>
                <View>
                    <Picker selectedValue={selectedHour}
                        onValueChange={(item, itemIndex) =>
                            setSelectedHour(item)
                        }
                    >
                        <Picker.Item label="09:00" value={"09:00"} />
                        <Picker.Item label="10:00" value={"10:00"} />
                        <Picker.Item label="11:00" value={"11:00"} />
                        <Picker.Item label="12:00" value={"12:00"} />
                    </Picker>
                </View>
            </View>

            <Button label={"Confirmar"} />
        </View>
    )
}