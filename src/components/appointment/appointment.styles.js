import { COLORS, FONTS } from '../../constants/theme'

export const styles = {

    container: {
        marginTop: 16,
        widdth: "100%",
        padding: 8,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: COLORS.gray400,
        borderRadius: 8,
        justifyContent: 'space-between',
    },

    title: {
        fontSize: 20,
        color: COLORS.gray100,
    },

    subTitle: {
        fontSize: 14,
        color: COLORS.gray200,
    },

    containerAppointment: {
        marginTop: 8,
        widdth: "100%",
        flexDirection: 'row',
        padding: 8,
        justifyContent: 'space-between',
    },

    content: {
        widdth: '100%',
        gap: 8,
    },

    titleContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },

    text: {
        color: COLORS.white,
        fontSize: FONTS.fontSizeBtn,
        textAlign: "center"
    },

    ctaContainer: {
        justifyContent: 'flex-end',
    }
}

