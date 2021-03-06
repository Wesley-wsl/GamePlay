import { ReactNode } from "react";
import {
    View,
    Modal,
    ModalProps,
    TouchableWithoutFeedback,
} from "react-native";
import { Background } from "../Background";
import { styles } from "./styles";

interface IModalView extends ModalProps {
    children: ReactNode;
    closeModal: () => void;
}

export function ModalView({ children, closeModal, ...rest }: IModalView) {
    return (
        <Modal transparent animationType="slide" {...rest} statusBarTranslucent>
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <Background>
                            <View style={styles.bar} />
                            {children}
                        </Background>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}
