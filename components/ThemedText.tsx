
import {View,Text,StyleSheet,TextProps} from 'react-native';
import { Colors } from '@/constants/Colors';

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
        fontSize:14,
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
    color?:keyof typeof Colors["light"] ,
}

export default function  ThemedText({variant,color,style,...rest}:Props){
    return <View>
        <Text style={[style,styles[variant ?? "body3"],{color: Colors.light[color ?? "grayDark"]}]} {...rest}>

        </Text>
    </View>
}

