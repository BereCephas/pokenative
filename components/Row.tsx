import { View, ViewProps, ViewStyle} from "react-native";

type Props= ViewProps &{
    gap?:number,
    padding?:number,
    flex?:number,
    style?:ViewStyle,

}
export default function Row({style,gap,padding,flex,...rest}:Props){
    return <View style={[style,rowStyle,gap ? {gap:gap} : undefined,flex ? {flex:gap} : undefined,padding ? {padding:padding}:undefined]} {...rest}></View>
}

const rowStyle={

        flexDirection:'row',
        alignItems:'center',
        
    } satisfies ViewStyle
