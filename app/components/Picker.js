import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import Text from "./Text";
import Modal from "./Modal";
import PickerItem from "./PickerItem";
import ListItemSeparator from "./ListItemSeparator";

const Picker = ({
    items,
    icon,
    iconStyle,
    placeholder,
    selectedItem,
    width="100%",
    onItemSelect,
    numberOfColumns=1,
    PickerItemComponent=PickerItem,
}) => {
    const [visible, setVisible] = useState(false)

    const handleModalClose = () => {
        setVisible(false)
    }

    const handleSelect = (item) => {
        onItemSelect(item);
        handleModalClose();
    }

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setVisible(true)}>
                <View style={[styles.container,{width}]}>
                    {icon && (
                        <MaterialCommunityIcons
                            name={icon}
                            style={[styles.icon, iconStyle]}
                        />
                    )}
                    {selectedItem ? (
                        <Text style={styles.text}>
                            {selectedItem.label}
                        </Text>
                    ) : (
                        <Text style={styles.placeholder}>
                            {placeholder}
                        </Text>
                    )}

                    <MaterialCommunityIcons
                        name="chevron-down"
                        style={[styles.icon, styles.rightIcon]}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal
                isVisible={visible}
                onClose={handleModalClose}
                data={items}
                keyExtractor={(item) => item.value.toString()}
                numColumns={numberOfColumns}
                renderItem={({ item }) => (
                    <PickerItemComponent
                        item={item}
                        label={item.label}
                        onPress={() => handleSelect(item)}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        //width: "100%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: defaultStyles.colors.whiteish,
        paddingHorizontal: 10,
        marginVertical: 6,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#ddd",
        overflow: "hidden",
    },
    icon: {
        fontSize: 20,
        marginRight: 10,
        color: defaultStyles.colors.secondary,
    },
    rightIcon: {
        marginRight: 0,
    },
    placeholder: {
        ...defaultStyles.text,
        flex: 1,
        paddingVertical: 10,
        color: defaultStyles.colors.GREY.Trolley_Grey,
    },
    text: {
        ...defaultStyles.text,
        flex: 1,
        paddingVertical: 10,
    },
})

export default Picker