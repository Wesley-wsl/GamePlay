import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: 95,
        backgroundColor: theme.colors.secondary40,
        color: theme.colors.heading,
        borderRadius: 8,
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        alignSelf: "center",
        borderWidth: 1,
        borderColor: theme.colors.secondary50,
        paddingTop: 16,
        paddingHorizontal: 16,
        textAlignVertical: "top",
    },
});
