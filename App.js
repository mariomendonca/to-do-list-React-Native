import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList} from 'react-native';


export default function App() {
  const [todos,setTodos] = useState([])
  const [text, setText] = useState('')

  const addToDo = () => {
    if (text.trim()){
      //no array o [0] é o state e o [1] é a funcao que muda o estado
      setTodos([...todos, text]),
      setText('')
    }
  } 

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder="new to do..." 
        onChangeText={text => setText(text)}
        value={text}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton} 
          onPress={() => addToDo()}>
        add to list
        </Text>
      </TouchableOpacity>
      <FlatList 
        data={todos} 
        renderItem={({item}) => (
          <View style={styles.list}>
            <Text >{item}</Text>
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
    backgroundColor:'#FF4500',
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
    width:310,
    height:50,
    backgroundColor:'#fff',
    borderWidth: 1,
    borderColor:'#FF4500',
    borderRadius:5,
    // borderStyle:'dashed', //deixar  tracejado
    margin:5,
    alignItems:'center',
    justifyContent:'center'
  }
});
