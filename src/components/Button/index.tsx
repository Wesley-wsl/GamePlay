import { RectButton } from "react-native-gesture-handler";
import { Text } from "react-native";
import { IButtonIcon } from "../../@types";
import { styles } from "./styles";

export function Button({title, ...rest}: IButtonIcon) {
    return (
        <RectButton style={styles.container} {...rest} >
            <Text style={styles.title}>{title}</Text>
        </RectButton>
    );
}
