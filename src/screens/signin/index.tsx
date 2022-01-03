import { View, Text, Image, StatusBar } from "react-native";

import { styles } from "./styles";
import illustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";

export function Sigin() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            <Image
                source={illustrationImg}
                style={styles.image}
                resizeMode="stretch"
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize{"\n"}suas jogatinas{"\n"}facilmente
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {"\n"} favoritos com seus
                    amigos
                </Text>

                <ButtonIcon title="Entrar com Discord" activeOpacity={0.7}/>                
            </View>
        </View>
    );
}
