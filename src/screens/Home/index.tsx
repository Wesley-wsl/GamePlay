import { View, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";
import { CategorySelect } from "../../components/CategorySelect";
import { useState, useCallback } from "react";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { AppointmentProps, AppointmentCreateScreenProps } from "../../@types";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";
import { Load } from "../../components/Load";

export function Home() {
    const [category, setCategory] = useState("");
    const navigation = useNavigation<any>();
    const [loading, setLoading] = useState(true);
    const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory("") : setCategory(categoryId);
    }

    function handleAppointmentCreate() {
        navigation.navigate("AppointmentCreate");
    }

    function handleAppointmentDetails(guildSelected: AppointmentProps) {
        navigation.navigate("AppointmentDetails", { guildSelected });
    }

    async function loadAppointments() {
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const storage: AppointmentProps[] = response
            ? JSON.parse(response)
            : [];

        if (category) {
            setAppointments(
                storage.filter((item) => item.category === category)
            );
        } else {
            setAppointments(storage);
        }

        setLoading(false);
    }

    useFocusEffect(
        useCallback(() => {
            loadAppointments();
        }, [category])
    );

    return (
        <>
            <View>
                <View style={styles.header}>
                    <Profile />
                    <ButtonAdd onPress={handleAppointmentCreate} />
                </View>

                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />
            </View>
            {loading ? (
                <Load />
            ) : (
                <>
                    <ListHeader
                        title="Partidas agendadas"
                        subtitle={`Total ${appointments.length}`}
                    />
                    <FlatList
                        data={appointments}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <Appointment
                                data={item}
                                onPress={() => handleAppointmentDetails(item)}
                            />
                        )}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 69 }}
                        ItemSeparatorComponent={() => <ListDivider />}
                    />
                </>
            )}
        </>
    );
}
