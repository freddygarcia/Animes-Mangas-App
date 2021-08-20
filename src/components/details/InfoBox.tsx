import { Text } from "@ui-kitten/components";
import { View } from "react-native";

const InfoBox = (props: any): React.ReactElement => {

    const { style, hint, value, ...viewProps } = props;

    return (
        <View
            {...viewProps}
            style={style}>
            <Text
                category='h6'
                status='control'>
                {value}
            </Text>
            <Text
                status='control'>
                {hint}
            </Text>
        </View>
    );
};

export default InfoBox;