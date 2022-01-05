import { RectButtonProps } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { SvgProps } from "react-native-svg";

// ======================= Shared ================================

interface GuildProps {
    owner: boolean;
    id: string;
    name: string;
    icon: null;
}

interface Appointment {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}

// ======================= Pages ================================

export type RootStackParamList = {
    Home: undefined;
    SignIn: undefined;
};

export type homeScreenProps = StackNavigationProp<RootStackParamList, "Home">;

// ======================= Components ================================

export interface IButtonIcon extends RectButtonProps {
    title: string;
}

export interface ICategory extends RectButtonProps {
    title: string;
    icon: React.FC<SvgProps>;
    checked?: boolean;
}

export interface ICategorySelect {
    categorySelected: String;
    setCategory: (categoryId: string) => void;
}

export interface IListHeader {
    title: string;
    subtitle: string;
}

export interface IAppointment extends RectButtonProps {
    data: Appointment;
}
