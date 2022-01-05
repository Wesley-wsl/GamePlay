import { View, Text, Image } from "react-native";

import { styles } from "./styles";
import illustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";
import { homeScreenProps } from "../../@types";

export function SignIn() {
    const navigation = useNavigation<homeScreenProps>();

    function handleSigIn() {
        navigation.navigate("Home");
    }

    return (
        <View style={styles.container}>
            <Image
                source={illustrationImg}
                style={styles.image}
                resizeMode="stretch"
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {"\n"}e organize suas jogatinas
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {"\n"} favoritos com seus
                    amigos
                </Text>

                <ButtonIcon onPress={handleSigIn} title="Entrar com Discord" />
            </View>
        </View>
    );
}
