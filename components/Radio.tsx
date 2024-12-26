import useThemecolor from "@/hooks/useThemescolor"
import { View,StyleSheet } from "react-native"
type Props={
    checked:boolean,
}

export default function Radio({checked}:Props){
    const colors= useThemecolor();
    return <View style={[styles.radio,{borderColor:colors.tint}]}>
        {checked ? <View style={[styles.radioInner,{backgroundColor:colors.tint}]}/> :undefined}
    </View>

}

const styles=StyleSheet.create({
    radio:{
        width:16,
        height:16,
        borderRadius:16,
        borderStyle:'solid',
        borderWidth:1,
        alignItems:"center",
        justifyContent:"center",
    },
    radioInner:{
        borderRadius:6,
        height:6,
        width:6,
    }
})
