import React, { Component } from "react";
import {View,Text,StyleSheet} from "react-native";

class PreFoods extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>PreFoods</Text>
            </View>
        );
    }
}
export default PreFoods;

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
