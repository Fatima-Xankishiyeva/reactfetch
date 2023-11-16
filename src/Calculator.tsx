import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const arrButtons = ["8", "9", "6", "7", "4", "5", "2", "3", "1", "0"];
const arrOperators = ["+", "-", "*", "/", "="];

function Calculator() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("0");

  const checkOperator = (a, b, opr) => {
    switch (opr) {
      case "+":
        return +a + +b;
      case "-":
        return +a - +b;
      case "*":
        return +a * +b;
      case "/":
        return +a / +b;
      default:
         break;
    }
  };

  const numberPress = (num) => {
    if (!secondNumber && !operator) {
      setFirstNumber(firstNumber + num);
      setResult(firstNumber + num);
    } else if (operator) {
      setSecondNumber(secondNumber + num);
      setResult(secondNumber + num);
    }
  };

  const operatorPress = (opr:string) => {
    if (firstNumber && secondNumber) {
      const oprResult = checkOperator(firstNumber, secondNumber, operator);
      setResult(String(oprResult));
      setFirstNumber(String(oprResult));
      setSecondNumber("");
    }
    setOperator(opr === "=" ? "" : opr);
  };

  const clearAll = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperator("");
    setResult("0");
  };

  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.actionArea}>
        <View style={styles.buttons}>
          {arrButtons.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => numberPress(item)}
            >
              <Text style={styles.buttonText}> {item} </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.oprArea}>
          <TouchableOpacity
            style={[styles.oprButton, { backgroundColor: "gray" }]}
            onPress={clearAll}
          >
            <Text style={styles.buttonText}> C </Text>
          </TouchableOpacity>
          {arrOperators.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.oprButton}
              onPress={() => operatorPress(item)}
            >
              <Text style={styles.buttonText}> {item} </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Calculator;

const styles = StyleSheet.create({
  area: {
    flex: 2,
  },

  result: {
    backgroundColor: "#ffe4e1",
    flex: 0.55,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  resultText: {
    fontSize: 50,
    fontWeight: "400",
    color: "black",
    marginRight:15,
  },

  buttons: {
    backgroundColor: "#ffc0cb",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "70%",
    justifyContent: "space-between",
    padding: 15,
  },

  button: {
    width: "45%",
    height:70,
    backgroundColor: "#ff69b4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 33,
    borderWidth:1,
  },

  oprButton: {
    width: "80%",
    height: 63.5,
    backgroundColor: "#ff69b4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 19.25,
    borderWidth:1,
  },

  buttonText: {
    fontSize: 45,
    color: "white",
  },

  actionArea: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
  },

  oprArea: {
    width: "30%",
    alignItems: "center",
    backgroundColor: "#ffc0cb",
     
  },
});