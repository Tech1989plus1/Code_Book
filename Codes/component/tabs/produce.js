import React, { Component } from "react";
import {View,Text,StyleSheet} from "react-native";

class Produce extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Produce</Text>
            </View>
        );
    }
}
export default Produce;

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
