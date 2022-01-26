import { View, Text, Image, Alert, ActivityIndicator } from "react-native";

import { styles } from "./styles";
import illustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useAuth } from "../../hooks/auth";
import { theme } from "../../global/styles/theme";
import { Background } from "../../components/Background";

export function SignIn() {
    const { signIn, loading } = useAuth();
    async function handleSigIn() {
        try {
            await signIn();
        } catch (error: any) {
            Alert.alert(error);
        }
    }

    return (
        <Background>
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
                        Crie grupos para jogar seus games {"\n"} favoritos com
                        seus amigos
                    </Text>
                    {loading ? (
                        <ActivityIndicator color={theme.colors.primary} />
                    ) : (
                        <ButtonIcon
                            onPress={handleSigIn}
                            title="Entrar com Discord"
                        />
                    )}
                </View>
            </View>
        </Background>
    );
}
