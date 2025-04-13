import { COLORS, FONTS } from "../../constants/theme";

export const styles = {

    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 'auto',
        borderBottomWidth: 2,
        padding: 8,
        borderRadius: 8,
        borderColor: COLORS.gray300,
    },

    content: {
        padding: 8,
        gap: 8,
    },

    doctor: {
        fontSize: FONTS.Accent,
    },

    price: {
        fontSize: FONTS.label,
        color: COLORS.blue,
    },

    btnPrimarys : {
        justifyContent: 'flex-end',
    }
}