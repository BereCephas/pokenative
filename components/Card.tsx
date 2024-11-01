import { Shadows } from '@/constants/Shadows';
import useThemecolor from '@/hooks/useThemescolor';
import {View,Text, type ViewProps, ViewStyle} from 'react-native';

type Props= ViewProps ;

const styles={
    backgroundColor:"#FFF",
    borderRadius:16,
    ...Shadows.dp2,

} satisfies ViewStyle;

export default function Card({style,...rest}:Props){
    const colors=useThemecolor();
    return <View style={[style, styles,{backgroundColor:colors.grayWhite} ]}{...rest}>

    </View>
}

