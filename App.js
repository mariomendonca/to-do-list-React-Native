import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList} from 'react-native';


export default function App() {
  const [todos,setTodos] = useState([])
  const [text, setText] = useState('')

  //o texto digitado no input vai pro state
  const changeHandler = (value) => { 
    setText(value)
  }
  

  // const addTodo = () => {
  //   const  = {
  //     id:1 + Math.random(),
  //     value: a,
  //   }
  
  // const submitHandler = (text) => {
  //   setTodos((prevTodos) => {
  //     return [
  //       { text: text, key: Math.random().toString },
  //       ...prevTodos
  //     ]
  //   })
  // }
   


  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder="new to do..." 
        onChangeText={changeHandler}
        />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton} 
          onPress={() => console.log(text)}
        >add to list</Text>
      </TouchableOpacity>
      <FlatList data={todos} 
        renderItem={({item}) => (
          <View style={styles.list}>
            <Text >{item.text}</Text>
          </View>
        )}
        keyExtractor={(_, index) => index.toString()} />
    </View>   
      );
    }


  const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    height:40,
    width:250,
    borderWidth:1,
    borderRadius:5,
    padding:5,
    marginBottom:20,
    marginTop:100,
  },
  button: {
    height:40,
    width:250,
    backgroundColor:'#68a0cf',
    borderRadius:15,
    borderWidth:1,
    marginBottom:20,
  },
  textButton: {
    color:'#fff',
    textAlign:'center',
    paddingTop:10,
  },
  list: {
    width:350,
    height:50,
    backgroundColor:'#DDD',
    borderWidth: 0.5,
    borderColor:'#222',
    borderRadius:5,
    borderStyle:'dashed',
    margin:5,
    alignItems:'center',
    justifyContent:'center'
  }
});
