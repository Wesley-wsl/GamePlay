import { FlatList, View } from "react-native";
import { IGuilds } from "../../@types";
import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";

export function Guilds({ handleGuildSelected }: IGuilds) {
    const guilds = [
        {
            id: "1",
            name: "React.JS",
            icon: "image.png",
            owner: true,
        },
        {
            id: "2",
            name: "React Native",
            icon: "image.png",
            owner: false,
        }
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Guild
                        data={item}
                        onPress={() => handleGuildSelected(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider />}
                contentContainerStyle={{paddingBottom: 68, paddingTop: 103}}
                ListHeaderComponent={() => <ListDivider />}
                style={styles.guilds}
            />
        </View>
    );
}
