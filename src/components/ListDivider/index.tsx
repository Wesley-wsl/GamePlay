import React from "react";

import { View } from "react-native";
import { IListDivider } from "../../@types";
import { styles } from "./styles";

export function ListDivider({ isCentered }: IListDivider) {
    return (
        <View
            style={[
                styles.container,
                isCentered
                    ? { marginVertical: 12 }
                    : { marginTop: 2, marginBottom: 31 },
            ]}
        />
    );
}
