import React, { Component } from "react";
import {View,Text,StyleSheet} from "react-native";

class Bulk extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Bulk</Text>
            </View>
        );
    }
}
export default Bulk;

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
