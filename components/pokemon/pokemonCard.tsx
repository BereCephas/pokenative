import { ViewStyle, Image, StyleSheet, View, Pressable } from "react-native";
import Card from '@/components/Card';
import ThemedText from "@/components/ThemedText";
import useThemecolor from "@/hooks/useThemescolor";
import { Link } from "expo-router";

type Props = {
    style?: ViewStyle,
    id: number,
    name: string
};

export default function PokemonCard({ style, name, id }: Props) {
    const colors= useThemecolor();
    return <Link href={{pathname:"/pokemon/[id]",params:{id:"id"}}} asChild>
        <Pressable style={style}>
        <Card style={[styles.card]}>
            <View style={styles.id}>
                <ThemedText variant="caption" color="grayMedium">
                    #{id.toString().padStart(3, '0')}
                </ThemedText>
            </View>
            
            
            <Image
                style={{ height: 72, width: 72 }}
                source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png` }}
            />
            
            <ThemedText>{name}</ThemedText>
            <View style={[styles.shadow,{backgroundColor:colors.grayBackground}]}/>
            
        </Card>
        </Pressable>
    </Link>
        
    
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        overflow:'hidden',
        padding: 4,
    },
    id: {
        alignSelf: 'flex-end', // Align the ID container itself
    },
    shadow:{
        position:'absolute',
        bottom:0,
        right:0,
        left:0,
        height:44,
        borderRadius:7,
        zIndex:-1,
    }
});
