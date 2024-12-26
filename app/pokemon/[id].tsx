import { StyleSheet,Text, View,Image,SafeAreaView,Pressable } from "react-native";
import ThemedText from "@/components/ThemedText";
import useThemecolor from "@/hooks/useThemescolor";
import Row from "@/components/Row"
import RootView from "@/components/RootView";
import { router, useLocalSearchParams } from "expo-router";


export default function Pokemon() {
    const params=useLocalSearchParams() as {id:string,name:string};
    const colors=useThemecolor();
  return (
    <RootView>
        <Row style={styles.header }>
            <Pressable onPress={router.back}>
       <Row gap={8}>
        <Image source={require("@/assets/images/back.png")} width={32} height={32}/>
      <ThemedText variant="headline" color="grayWhite">{params.name}</ThemedText>
      </Row>
      </Pressable>
      <ThemedText variant="subtitle2" color="grayWhite">#{params.id.toString().padStart(3,"0")},</ThemedText>
    </Row>
    </RootView>
    
  );
}

const styles=StyleSheet.create({
    header:{
        margin:20,
        justifyContent:"space-between",
      },
})