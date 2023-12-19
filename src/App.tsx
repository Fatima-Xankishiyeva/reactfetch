import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function App() {


    const [movies, setMovies] = useState([]);


    useEffect(() => {
        getMovieData();
    }, []);

    const [searchMovie, setSearchMovie] = useState('');

    const handleMovieName = () => {
        getMovieData()
    };

    const getMovieData = async () => {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchMovie}`);
        const respond = await response.json();
        setMovies(respond);
    }


    return (
        <SafeAreaView style={{ backgroundColor: "#afeeee", flex:1}}>
            <View style={{ flexDirection: "row", marginTop: 40 }}>

                <TextInput
                    placeholder='write a movie name...'
                    style={{width: 300, height: 50, borderRadius: 10, borderWidth: 2, backgroundColor: '#fffff0', marginLeft: 20, fontSize: 18,marginTop:20 }}
                    value={searchMovie}
                    onChangeText={(text) => setSearchMovie(text)} />

                <View style={{ flexDirection: 'column' }}>
                    <TouchableOpacity
                        onPress={handleMovieName}
                        style={{ width: 50, height: 50, backgroundColor: '#ffb6c1', borderRadius: 10, borderWidth: 2, justifyContent: 'center', alignItems: 'center',marginLeft:10,marginTop:20 }}>
                        <Image style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }} source={require('./assets/images/Search.png')} />
                    </TouchableOpacity>
    </View>

            </View>
                    <ScrollView contentContainerStyle={{ flexGrow: 1}}>
                        {movies.map((item, index) => (
                                <View style={{justifyContent:"center",alignItems:"center",marginVertical:30}} key={index}>
                                    <Text style={{justifyContent:'center', alignItems:'center', fontWeight:'bold', fontSize:20,color:"black"}}>{item.show.name}</Text>
                                    <Image style={{ width: 70, height: 70, borderRadius:10}} source={{ uri: item.show.image.medium }} />
                                </View>
                        ))}
                    </ScrollView>
            
        </SafeAreaView>)
}



export default App
 


