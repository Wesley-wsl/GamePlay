import { View, FlatList, Text } from "react-native";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";
import { CategorySelect } from "../../components/CategorySelect";
import { useState } from "react";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { useNavigation } from "@react-navigation/native";
import { AppointmentCreateScreenProps, AppointmentDetailsScreenProps } from "../../@types";

export function Home() {
    const [category, setCategory] = useState("");
    const navigation = useNavigation<AppointmentCreateScreenProps>();

    const appointments = [
        {
            id: "1",
            guild: {
                id: "1",
                name: "Lendários",
                icon: null,
                owner: true,
            },
            category: "1",
            date: "22/06 às 20:40",
            description:
                "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
        },
        {
            id: "2",
            guild: {
                id: "1",
                name: "Lendários",
                icon: null,
                owner: true,
            },
            category: "1",
            date: "22/06 às 20:40",
            description:
                "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
        },
    ];

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory("") : setCategory(categoryId);
    }

    function handleAppointmentCreate() {
        navigation.navigate("AppointmentCreate")
    }

    function handleAppointmentDetails() {
        navigation.navigate("AppointmentDetails");
    }

    return (
        <View>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate}/>
            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />
            <View style={styles.content}>
                <ListHeader title="Partidas agendadas" subtitle="Total 6" />

                <FlatList
                    data={appointments}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Appointment
                            data={item}
                            onPress={handleAppointmentDetails}
                        />
                    )}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <ListDivider />}
                />
            </View>
        </View>
    );
}
