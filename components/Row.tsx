import { View, ViewProps, ViewStyle} from "react-native";

type Props= ViewProps &{
    gap?:number,
    flex?:number,
    style?:ViewStyle,

}
export function Row({style,gap,flex,...rest}:Props){
    return <View style={[style,rowStyle,gap ? {gap:gap} : undefined,flex ? {flex:gap} : undefined]} {...rest}></View>
}

const rowStyle={
    
        flexDirection:'row',
        alignItems:'center',
        
    } satisfies ViewStyle
