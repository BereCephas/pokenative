import { StyleSheet,Text, View,Image, FlatList, ActivityIndicator } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemedText from "@/components/ThemedText";
import Card from "@/components/Card";
import useThemecolor from "@/hooks/useThemescolor";
import PokemonCard from "@/components/pokemon/pokemonCard";

import {useInfiniteFetchQuery} from "@/hooks/useFetchQuery";
import { getPokemonId } from "@/functions/pokemon";
import { SearchBar } from "@/components/SearchBar";
import {Row} from "@/components/Row"
import { useState } from "react";
export default function Index() {
  const Colors= useThemecolor();
  const [search,setSearch]=useState('');
  const {data,isFetching,fetchNextPage}= useInfiniteFetchQuery("pokemon?limit=21");
  // Combine all pages results into a single array
  const pokemons = data?.pages.flatMap(page => page.results) ?? [];
  // search
  const filteredPokemons= search? pokemons.filter(pokemon=> pokemon.name.includes(search.toLowerCase())|| getPokemonId(pokemon.url).toString()===search):pokemons;
  return (
    <SafeAreaView style={[styles.container,{
      backgroundColor :Colors.tint,
    }]}
    >
    <Row style={[styles.header,{padding:16}]} gap={12} >
        <Image source={require("@/assets/images/pokeball.png")} width={24} height={24}/>
      <ThemedText variant="headline" color="grayLight">Pokedex</ThemedText>
    </Row>

      <Row>
      <SearchBar value={search} onChange={setSearch}/>
      </Row>
      
      
      <Card style={[styles.body]}>
        <FlatList 
        numColumns={3} 
        columnWrapperStyle={styles.gridGap}
        contentContainerStyle={[styles.gridGap,styles.list]}
        data={filteredPokemons} 
        ListFooterComponent={
          isFetching ? <ActivityIndicator color={Colors.tint}/> :null 
        }
        onEndReached={search ? undefined :()=>fetchNextPage()}
        renderItem={({item})=> <PokemonCard style={{flex:1/3}} name={item.name} id={getPokemonId(item?.url)}>
          </PokemonCard>
        } keyExtractor={(item)=> item.url}/>
 
      </Card>
    </SafeAreaView>
  );
}
const styles= StyleSheet.create({
  container:{
    flex:1,
    padding:4,
  },
  header:{
    paddingHorizontal:12,
    paddingVertical:8,
  },
  body:{
    flex:1,
    marginTop:16,
  },
  gridGap:{
    gap:8,
  },
  list:{
    padding:12,
  }
})


