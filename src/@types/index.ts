import { RectButtonProps } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { SvgProps } from "react-native-svg";
import React, { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";

// ======================= Shared ================================

export interface GuildProps {
    owner: boolean;
    id: string;
    name: string;
    icon: string | null;
}

export interface AppointmentProps {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}

export interface MemberProps {
    id: string;
    username: string;
    avatar_url: string;
    status: string;
}

// ======================= Pages ================================

export type RootStackParamList = {
    Home: undefined;
    SignIn: undefined;
    AppointmentDetails: undefined;
    AppointmentCreate: undefined;
};

export type homeScreenProps = StackNavigationProp<RootStackParamList, "Home">;
export type AppointmentDetailsScreenProps = StackNavigationProp<
    RootStackParamList,
    "AppointmentDetails"
>;
export type AppointmentCreateScreenProps = StackNavigationProp<
    RootStackParamList,
    "AppointmentCreate"
>;

// ======================= Components ================================

export interface IButtonIcon extends RectButtonProps {
    title: string;
}

export interface ICategory extends RectButtonProps {
    title: string;
    icon: React.FC<SvgProps>;
    checked?: boolean;
    hasCheckBox?: boolean;
}

export interface ICategorySelect {
    categorySelected: String;
    setCategory: (categoryId: string) => void;
    hasCheckBox?: boolean;
}

export interface IListHeader {
    title: string;
    subtitle: string;
}

export interface IAppointment extends RectButtonProps {
    data: AppointmentProps;
}

export interface IHeader {
    title: string;
    action?: ReactNode;
}

export interface IMember {
    data: MemberProps;
}

export interface IGuild extends TouchableOpacityProps {
    data: GuildProps;
}

export interface IBackground {
    children?: ReactNode;
}

export interface IGuilds {
    handleGuildSelected: (guild: GuildProps) => void;
}

export interface IListDivider {
    isCentered?: boolean;
}
