import { COLORS, FONTS } from '../../constants/theme'

export const styles = {

    container: {
        paddingTop: 60,
        paddingBottom: 60,
        padding: 16,
        height: 'auto'
    },

    banner : {
        height: 'auto',
        alignItems: 'center',
        padding: 8,
        backgroundColor: COLORS.secondary,
    },

    doctor: {
        fontSize: FONTS.subTitle,
        color: COLORS.blue
    },

    specialityText: {
        fontSize: FONTS.Accent,
        color: COLORS.gray200
    },

    flatList: {
        height: "70%",
        marginTop: 16,
    },


}