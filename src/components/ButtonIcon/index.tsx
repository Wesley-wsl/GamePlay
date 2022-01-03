import { Text, View, Image, TouchableOpacity } from "react-native";
import { IButtonIcon } from "../../@types";
import DiscordImg from "../../assets/discord.png";
import { styles } from "./styles";

export function ButtonIcon({title, ...rest}: IButtonIcon) {
    return (
        <TouchableOpacity style={styles.container} {...rest} >
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon}></Image>
            </View>

            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}
