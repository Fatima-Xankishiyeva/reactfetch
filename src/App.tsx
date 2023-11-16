
import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import New from "./New";

function App(){
    // return <New/>
  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.header}>
        <Image source={require("./assets/icons/menu.png")}/>
         <View style={{flexDirection:'row',alignItems:'center'}}>
         <Image style={{marginRight:24}} source={require("./assets/icons/search.png")}/> 
         <Image source={require("./assets/icons/profile.png")}/>
         </View> 
      </View>
      <View style={styles.welcome}>
        <Text style={{color:'#000000',fontSize:14,fontWeight:'500',lineHeight:17.07}}>Hello,</Text>
        <Text style={{fontSize:26,color:'#000000',fontWeight:'700',lineHeight:31.69}}>Lucas Arthur</Text>
      </View>
      <View style={styles.categories}>
        <Text style={{fontSize:14,fontWeight:700,color:'#FF772D',lineHeight:17.07}}>New</Text>
        <Text style={{fontSize:14,fontWeight:500,color:'#848484',lineHeight:17.07}}>Trendy</Text>
        <Text style={{fontSize:14,fontWeight:500,color:'#848484',lineHeight:17.07}}>Best Rated</Text>
      </View>
      <View>
      <Image style={{marginVertical:10,marginLeft:55}} source={require("./assets/icons/Ellipse.png")}/>
      </View>
      <View>
      <ScrollView horizontal={true}>
        <View style={styles.image}>
        <Image source={require('./assets/icons/images/guitar.png')}/>   
        <Image style={{marginLeft:13}} source={require('./assets/icons/images/Violin.png')}/>
        </View>
      </ScrollView>
      </View>
      <View>
        <Text style={{padding:29, fontSize:18,fontWeight:800,color:'#000000', lineHeight:19.05,}}>Last Seen Courses </Text>
      </View>
      <View style={styles.box1}>
        <View style={styles.imgtext1}>
        <Image style={{margin:11}}  source={require('./assets/icons/images/Group.png')}/>
        <View style={styles.texts1}>
          <Text style={{marginBottom:5,color:'#848484',fontSize:14,fontWeight:500,lineHeight:16,}}>Advanced</Text>
          <Text style={{marginBottom:7,color:'#545454',fontSize:16,fontWeight:600,lineHeight:20,}}>Beethoven Piano Cycles</Text>
          <Text style={{color:'#848484',fontSize:14,fontWeight:500,lineHeight:20,}}>30min</Text>
        </View>
        </View>
      </View>
      <View style={styles.box2}>
        <View style={styles.imgtext2}>
        <Image style={{margin:11}}  source={require('./assets/icons/images/Group.png')}/>
        <View style={styles.texts1}>
          <Text style={{marginBottom:5,color:'#848484',fontSize:14,fontWeight:500,lineHeight:16,}}>Basic</Text>
          <Text  style={{marginBottom:7,color:'#545454',fontSize:16.,fontWeight:600,lineHeight:16}}>{"Beginner \nAlto Saxophone"}</Text>
          <Text style={{color:'#848484',fontSize:14,fontWeight:500,lineHeight:20,}}>45min</Text>
        </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default App

const styles=StyleSheet.create({
  area:{
    flex:1,
  },
  header:{
    flexDirection:'row',
    margin:25,
    alignItems:'center',
    justifyContent:'space-between',
    
  },
   welcome:{
    marginLeft:25,
    marginTop:32,
    fontStyle:'Montserrat'
   },
   categories:{
    flexDirection:'row',
    justifyContent:'space-around',
    fontStyle:'Montserrat',
    marginTop:32
   },
   image:{
    flexDirection:'row',
    marginLeft:35,
   },
   box1:{
    backgroundColor:"#F3F4F9",
    paddingHorizontal:10,
    height:187,
    width:160,
    marginLeft:25,
    borderRadius:12,
   },
   imgtext1:{
    flexDirection:'column-reverse',
    padding:12,
   },
   texts1:{
    fontStyle:'Montserrat',
   },
   box2:{
    backgroundColor:"#F3F4F9",
    height:187,
    width:160,
    marginLeft:230,
    borderRadius:12,
    marginTop:-187,
    paddingHorizontal:10
   },
   imgtext2:{
    flexDirection:'column-reverse',
    padding:12
   },
   texts2:{
    fontStyle:'Montserrat',
    margin:16,
   }

})