import { View, Text } from "react-native";
import { IListHeader } from "../../@types";
import { styles } from "./styles";

export function ListHeader({ title, subtitle }: IListHeader) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    );
}
