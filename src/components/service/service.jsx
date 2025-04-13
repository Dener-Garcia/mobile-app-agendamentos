import { Text, View } from 'react-native'
import { styles } from './service.style'
import Button from '../button/button'

export default function Service({ price, speciality }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.doctor}>{speciality}</Text>
                <Text style={styles.price}>
                    {
                        new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price)
                    }
                </Text>
            </View>
            <View style={styles.btnPrimarys}>
                <Button style={styles.btnPrimarys} label={'Agenda ai'} />
            </View>
        </View>
    )
}