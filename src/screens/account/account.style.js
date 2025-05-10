

import {COLORS, FONTS} from '../../constants/theme'

export const styles = {

    container : {
        flex: 1,
        backgroundColor: COLORS.bgSecondary,
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
        borderColor: COLORS.accent,
        borderStyle: 'solid',
        borderRadius: 8,
        padding: 8,
      },

    btn : {
        widdth: "100%",
        backgroundColor: COLORS.accent,
        padding: 16,
        borderRadius: 999
    },

    text : {
        color: COLORS.text,
        fontSize: FONTS.fontSizeBtn,
        textAlign: "center"
    },

    footer : {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    btnTertiary: {
        color: COLORS.accent,
    }

}