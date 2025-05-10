import { COLORS, FONTS } from "../../constants/theme";

export const styles = {

    container: {
        flex: 1,
        paddingTop: 40,
        padding: 16,
        gap: 24,
        backgroundColor: COLORS.bgSecondary
    },

    output: {
        marginTop: 8,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderColor: COLORS.text,
        paddingBottom: 8,
    },

    title: {
        fontSize: 14,
        color: COLORS.text,
    },

    subTitle: {
        fontSize: 20,
        color: COLORS.text,
    }
}