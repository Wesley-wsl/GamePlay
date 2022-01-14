import { createStackNavigator } from "@react-navigation/stack";
import { Background } from "../components/Background";

import { Home } from "../screens/Home";
import AppointmentDetails from "../screens/AppointmentDetails";
import AppointmentCreate from "../screens/AppointmentCreate";
import { SignIn } from "../screens/SignIn";
import { useAuth } from "../hooks/auth";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
    const { user } = useAuth();

    return (
        <Navigator
            screenOptions={{
                cardOverlay: () => <Background />,
                cardStyle: {
                    backgroundColor: "transparent",
                    shadowColor: "transparent",
                },
                headerShown: false,
            }}
        >
            {!user.id && <Screen name="SignIn" component={SignIn} />}

            <Screen name="Home" component={Home} />
            <Screen name="AppointmentDetails" component={AppointmentDetails} />
            <Screen name="AppointmentCreate" component={AppointmentCreate} />
        </Navigator>
    );
}
