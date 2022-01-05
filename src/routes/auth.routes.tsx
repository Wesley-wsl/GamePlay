import { createStackNavigator } from "@react-navigation/stack";
import { Background } from "../components/Background";

import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
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
            <Screen name="SignIn" component={SignIn} />
            <Screen name="Home" component={Home} />
        </Navigator>
    );
}
