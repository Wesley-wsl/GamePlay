import { View, TouchableOpacity, Text } from "react-native";
import { IGuild } from "../../@types";
import { GuildIcon } from "../GuildIcon";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function Guild({ data, ...rest }: IGuild) {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.8}
            {...rest}
        >
            <GuildIcon guildId={data.id} iconId={data.icon} />

            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>{data.name}</Text>

                    <Text style={styles.type}>
                        {data.owner ? "Administrador" : "Convidado"}
                    </Text>
                </View>
            </View>
            <Feather
                name="chevron-right"
                color={theme.colors.heading}
                size={24}
            />
        </TouchableOpacity>
    );
}
