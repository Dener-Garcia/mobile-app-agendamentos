
import { COLORS, FONTS } from "../../constants/theme";

export const styles = {

    container: {
        flex: 1,
        backgroundColor: COLORS.bgSecondary,
        padding: 20,
        justifyContent: 'space-between',
    },

    theme: {
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#ff0000',
        selectedDayBackgroundColor: '#40d201',
        selectedDayTextColor: '#101208',
        todayTextColor: '#101208',
        dayTextColor: '#101208',
        textDisabledColor: '#dd99ee'
    },

    label: {
        fontSize: FONTS.Accent,
        Color: COLORS.text
    },

}