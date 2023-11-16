// import React from "react";
// import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

// function New(){

//     return(
//         <SafeAreaView style={styles.area}>
//             <View>
//                 <Image style={{marginTop:142,width:412,height:700}} source={require('./assets/icons/images/illustration.png')}/>
//                 <Text style={{color:'#FFFFFF',fontSize:37,fontWeight:700,lineHeight:47.88,marginTop:-800,padding:25,}}>Welcome to</Text>
//                 <Text style={{color:'#FFA300',fontSize:37,fontWeight:700,lineHeight:46.25,padding:25,marginTop:-37,fontStyle:"normal"}}>MUSIFY</Text>
//                 <Text style={{color:'#FFFFFF',fontSize:13,fontWeight:400,lineHeight:24,marginHorizontal:25}}>An interactive music app designed to really</Text>
//                 <Text style={{color:'#FFFFFF',fontSize:13,fontWeight:400,lineHeight:24,marginHorizontal:25}}>provide a fully-formed experience to better</Text>
//                 <Text style={{color:'#FFFFFF',fontSize:13,fontWeight:400,lineHeight:24,marginHorizontal:25}}>your instrument playing.</Text>
//                 <Image style={{margin:25}} source={require('./assets/icons/images/Vector.png')}/>
//                 <Text style={{color:'#FFFFFF',fontSize:16,fontWeight:600,lineHeight:19.5,marginLeft:75,marginTop:-55}} >Start Now</Text>
//             </View>


//         </SafeAreaView>
//     )
// }

// export default New

// const styles=StyleSheet.create({
//     area:{
//         flex:1,
//         backgroundColor:"#152B79",

     
//     },

// })








// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const Calculator = () => {
//   const [input, setInput] = useState('');
//   const [result, setResult] = useState('');

//   const handlePress = (value) => {
//     if (value === '=') {
//       try {
//         setResult(eval(input).toString());
//       } catch (error) {
//         setResult('Error');
//       }
//     } else if (value === 'C') {
//       setInput('');
//       setResult('');
//     } else {
//       setInput((prevInput) => prevInput + value);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.resultContainer}>
//         <Text style={styles.resultText}>{result}</Text>
//       </View>
//       <View style={styles.inputContainer}>
//         <Text style={styles.inputText}>{input}</Text>
//       </View>
//       <View style={styles.buttonContainer}>
//         <View style={styles.row}>
//           <Button title="7" onPress={() => handlePress('7')} />
//           <Button title="8" onPress={() => handlePress('8')} />
//           <Button title="9" onPress={() => handlePress('9')} />
//           <Button title="/" onPress={() => handlePress('/')} />
//         </View>
//         <View style={styles.row}>
//           <Button title="4" onPress={() => handlePress('4')} />
//           <Button title="5" onPress={() => handlePress('5')} />
//           <Button title="6" onPress={() => handlePress('6')} />
//           <Button title="-" onPress={() => handlePress('-')} />
//         </View>
//         <View style={styles.row}>
//           <Button title="1" onPress={() => handlePress('1')} />
//           <Button title="2" onPress={() => handlePress('2')} />
//           <Button title="3" onPress={() => handlePress('3')} />
//           <Button title="+" onPress={() => handlePress('+')} />
//         </View>
//         <View style={styles.row}>
//           <Button title="C" onPress={() => handlePress('C')} />
//           <Button title="0" onPress={() => handlePress('0')} />
//           <Button title="=" onPress={() => handlePress('=')} />
//           <Button title="*" onPress={() => handlePress('*')} />
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'flex-end',
//     padding: 10,
//   },
//   resultContainer: {
//     marginBottom: 10,
//   },
//   resultText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   inputContainer: {
//     marginBottom: 10,
//   },
//   inputText: {
//     fontSize: 18,
//   },
//   buttonContainer: {
//     width: '100%',
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor:"aqua",
//     borderRadius:89,
//     marginBottom: 70,
//   },
// });

// export default Calculator;
