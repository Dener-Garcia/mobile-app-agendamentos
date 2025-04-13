
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS, FONTS } from "../../constants/theme";

export const styles = {

    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 20,
        justifyContent: 'space-between',
    },

    theme: {
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#ff0000',
        selectedDayBackgroundColor: '#ff0000',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00ffff',
        dayTextColor: '#00ff00',
        textDisabledColor: '#dd99ee'
    },

    label: {
        fontSize: FONTS.Accent,
        Color: COLORS.gray100
    }
}