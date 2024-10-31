import { StyleSheet,Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemedText from "@/components/ThemedText";
export default function Index() {
  return (
    <SafeAreaView style={styles.HomeContainer}
    >
      <ThemedText variant="headline">Pokedex</ThemedText>
      {/* <Link href="./about">A propos</Link> */}
            <Link href={{ pathname: '/pokemon/[id]' , params:{id:3}}} >Pokemon 3</Link>
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  HomeContainer:{
    flex:1,
    backgroundColor:"#FF0000"
  }
})
