import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function Background() {
    const { secondary80, secondary100 } = theme.colors;
    return (
        <LinearGradient
            style={styles.container}
            colors={[secondary80, secondary100]}
        />
    );
}
