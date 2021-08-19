import { Spinner } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";

export default function Loading() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Spinner size={'giant'} />
        </View>
    )
}