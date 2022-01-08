import { ScrollView } from "react-native";
import { styles } from "./styles";
import { categories } from "../../utils/categories";
import { Category } from "../Category";
import { ICategorySelect } from "../../@types";

export function CategorySelect({
    categorySelected,
    setCategory,
    hasCheckBox = false,
}: ICategorySelect) {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
            style={styles.container}
        >
            {categories.map((category) => (
                <Category
                    key={category.id}
                    title={category.title}
                    icon={category.icon}
                    checked={category.id === categorySelected}
                    onPress={() => setCategory(category.id)}
                    hasCheckBox={hasCheckBox}
                />
            ))}
        </ScrollView>
    );
}
