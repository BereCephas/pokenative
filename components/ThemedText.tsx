
import {View,Text,StyleSheet,TextProps} from 'react-native';

const styles={
    body3:{
        fontSize:10,
        LineHeight:16
    },
    headline:{
        fontSize:24,
        LineHeight:32,
        fontWeght:"bold",
    },
    caption:{
        fontSize:24,
        lineHeight:32,
    },
    subtitle1:{
        fontSize:14,
        LineHeight:16,
        fontWeght:"bold",
    },
    subtitle2:{
        fontSize:12,
        LineHeight:16,
        fontWeght:"bold",
    },
    subtitle3:{
        fontSize:10,
        LineHeight:16,
        fontWeght:"bold",
    },
}

type Props= TextProps &{
    variant?: keyof typeof styles,
    color?:string,
}

export default function  ThemedText({variant,color,...rest}:Props){
    return <View>
        <Text style={styles[variant ?? "body3"]} {...rest}>

        </Text>
    </View>
}

