import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Home (){
const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>{

          navigation.dispatch(DrawerActions.toggleDrawer())
        }}>
        <Image source={require("./assets/icons/menu.png")}/>
        </TouchableOpacity>
         <View style={{flexDirection:'row',alignItems:'center'}}>
          <TouchableOpacity>
         <Image style={{marginRight:24}} source={require("./assets/icons/search.png")}/> 
         </TouchableOpacity>
         <TouchableOpacity>
         <Image source={require("./assets/icons/profile.png")}/>
         </TouchableOpacity>
         </View> 
      </View>
      <View style={styles.welcome}>
        <Text style={{color:'#000000',fontSize:14,fontWeight:'500',lineHeight:17.07}}>Hello,</Text>
        <Text style={{fontSize:26,color:'#000000',fontWeight:'700',lineHeight:31.69}}>Lucas Arthur</Text>
      </View>
      <View style={styles.categories}>
        <TouchableOpacity>
        <Text style={{fontSize:14,fontWeight:700,color:'#FF772D',lineHeight:17.07}}>New</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={{fontSize:14,fontWeight:500,color:'#848484',lineHeight:17.07}}>Trendy</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={{fontSize:14,fontWeight:500,color:'#848484',lineHeight:17.07}}>Best Rated</Text>
        </TouchableOpacity>
      </View>
      <View>
      <Image style={{marginVertical:10,marginLeft:60}} source={require("./assets/icons/Ellipse.png")}/>
      </View>
      <View>
      <ScrollView horizontal={true}>
        <View style={styles.image}>
          <TouchableOpacity activeOpacity={0.75}>
        <Image source={require('./assets/icons/images/guitar.png')}/>   
        </TouchableOpacity >
        <TouchableOpacity activeOpacity={0.75}> 
        <Image style={{marginLeft:13}} source={require('./assets/icons/images/Violin.png')}/>
        </TouchableOpacity>
        </View>
      </ScrollView>
      </View>
      <View>
        <Text style={{padding:29, fontSize:18,fontWeight:800,color:'#000000', lineHeight:19.05,}}>Last Seen Courses </Text>
      </View>
      <View style={styles.box1}>
        <View style={styles.imgtext1}>
          <TouchableOpacity activeOpacity={0.5}>
        <Image style={{margin:11}}  source={require('./assets/icons/images/Group.png')}/>
        </TouchableOpacity>
        <View style={styles.texts1}>
          <Text style={{marginBottom:5,color:'#848484',fontSize:14,fontWeight:500,lineHeight:16,}}>Advanced</Text>
          <Text style={{marginBottom:7,color:'#545454',fontSize:16,fontWeight:600,lineHeight:20,}}>Beethoven Piano Cycles</Text>
          <Text style={{color:'#848484',fontSize:14,fontWeight:500,lineHeight:20,}}>30min</Text>
        </View>
        </View>
      </View>
      <View style={styles.box2}>
        <View style={styles.imgtext2}>
          <TouchableOpacity activeOpacity={0.5}>
        <Image style={{margin:11}}  source={require('./assets/icons/images/Group.png')}/>
        </TouchableOpacity>
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
export default Home

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