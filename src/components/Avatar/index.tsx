import { Image } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";

interface IAvatar {
    urlImage: string;
}

export function Avatar({ urlImage }: IAvatar) {
    const { secondary50, secondary70} = theme.colors;
    return (
        <LinearGradient style={styles.container} colors={[secondary50, secondary70]}>
            <Image source={{ uri: urlImage }} style={styles.avatar}></Image>
        </LinearGradient>
    );
}
