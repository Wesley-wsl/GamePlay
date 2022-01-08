import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { IBackground } from "../../@types";


export function Background({children}: IBackground) {
    const { secondary80, secondary100 } = theme.colors;
    return (
        <LinearGradient
            style={styles.container}
            colors={[secondary80, secondary100]}
        >
            {children}
        </LinearGradient>
    );
}
