
import { View,TextInput, Image,StyleSheet, ImageStyle } from "react-native";
import Row from "@/components/Row";
import useThemecolor from "@/hooks/useThemescolor";
type Props={
    value:string,
    onChange:(s:string)=>void,
}
export function SearchBar({value,onChange}:Props){
    const colors= useThemecolor();
    return <Row flex={1}  style={[styles.wrapper,{backgroundColor:colors.grayWhite}]} gap={8}>
         <Image source={require("@/assets/images/search.png")} width={24} height={24}/>
        <TextInput onChangeText={onChange} value={value} style={styles.input}></TextInput>
    </Row>
}

const styles=StyleSheet.create({
    wrapper:{
        flex:1,
        borderRadius:16,
        height:32,
        paddingHorizontal:12,
    },
    imageStyle:{
        width:16,
        height:16,
    },
    input:{
        flex:1,
        height:16,
        fontSize:10,
        lineHeight:16,
    }
    
})