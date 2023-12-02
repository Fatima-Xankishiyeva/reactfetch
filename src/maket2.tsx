import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Maket2() {
    return (
        <SafeAreaView style={styles.area}>
            <View>
                <Image style={{ marginTop: 142, width: 430, height: 730 }} source={require('./assets/icons/images/illustration.png')} />
                <Text style={{ color: '#FFFFFF', fontSize: 37, fontWeight: 700, lineHeight: 47.88, marginTop: -800, padding: 25, }}>Welcome to</Text>
                <Text style={{ color: '#FFA300', fontSize: 50, fontWeight: 700, lineHeight: 46.25, padding: 25, marginTop: -37, fontStyle: "normal" }}>MUSIFY</Text>
                <Text style={{color:'#FFFFFF',fontSize:13,fontWeight:400,lineHeight:24,marginHorizontal:25}}>{'An interactive music app designed to really \nprovide a fully-formed experience to better \nyour instrument playing. '}</Text>
                <TouchableOpacity
                      activeOpacity={0.75}>
                    <Image style={{ margin: 25 }} source={require('./assets/icons/images/Vector.png')} />
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 600, lineHeight: 19.5, marginLeft: 75, marginTop: -55 }} >Start Now</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Maket2

const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: "#152B79",
    },
    
 

})