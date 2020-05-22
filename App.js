import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableHighlight, FlatList,TouchableOpacity} from 'react-native';
import Header from './Header'

  export default function App() {
    //no array o [0] é o state e o [1] é a funcao que muda o estado
    const [todos,setTodos] = useState([{text:'mario',key:1},{text:'mario',key:2},{text:'mario',key:3},{text:'mario',key:4}])
    const [text, setText] = useState('')

  const changeHandler = (value) => {
    setText(value)
  }

  const addTodo = (text) => {
    setTodos((prevTodos) => {
      return [
        {text: text, key: Math.random()},
        ...prevTodos
      ]
    })
  }


  const deleteToDo = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  return (
    <View style={styles.container}>
      <Header/>
      <TextInput style={styles.input}
        placeholder="new to do..." 
        onChangeText={changeHandler}
        // onChangeText={(value) => changeHandler(value)} ambas linhas fazem a msm coisa
        value={text}
      />
      <TouchableHighlight style={styles.button}>
        <Text style={styles.textButton} 
          onPress={() => addTodo(text)}>
        add to list
        </Text>
      </TouchableHighlight>
      <FlatList 
        data={todos} 
        renderItem={({item}) => (
          <TouchableOpacity 
            style={styles.list}
            onPress={() => deleteToDo(item.key)}>
            <Text >{item.text}</Text>
          </TouchableOpacity>
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
