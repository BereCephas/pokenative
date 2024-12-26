import useThemecolor from "@/hooks/useThemescolor";
import { useLocalSearchParams } from "expo-router";
import {View,Text,ViewProps, SafeAreaView, StyleSheet, } from "react-native";

type Props=ViewProps;

export default function RootView({...rest}:Props){
    const colors=useThemecolor();
    return <SafeAreaView style={[styles.container,{
        backgroundColor :colors.tint,
      }]}>
        <View style={[styles.container]} {...rest} />
    </SafeAreaView>
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:4,
        paddingTop:20,
    }
})