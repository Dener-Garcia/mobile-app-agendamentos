

import {COLORS, FONTS} from '../../constants/theme'

export const styles = {

    container : {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: 60,
        paddingBottom: 60,
        padding: 24,
        justifyContent: 'space-between'
    },

    containerLogo : {
        alignItems: 'center',
    },

    inputContainer : {
        gap: 16,
    },

    input: {
        borderWidth: 2,
        borderColor: COLORS.gray300,
        borderStyle: 'solid',
        borderRadius: 8,
        padding: 8,
      },

    btn : {
        widdth: "100%",
        backgroundColor: COLORS.blue,
        padding: 16,
        borderRadius: 999
    },

    text : {
        color: COLORS.white,
        fontSize: FONTS.fontSizeBtn,
        textAlign: "center"
    },

    footer : {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    btnTertiary: {
        color: COLORS.blue,
    }

}