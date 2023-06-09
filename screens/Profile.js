import {Text, View,TextInput,StyleSheet,Button,Image } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../constants/styles';


function Profile() {
  const navigation = useNavigation();
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    console.log(enteredGoalText);
  }
  function clearinput(){
    setEnteredGoalText('');
  }
  function expensePressHandler() {
    navigation.navigate('Rating', {
      username : enteredGoalText
    });
  }
  return (
    <View style={{backgroundColor : GlobalStyles.colors.primary500,flex: 1}}>
    <View style={{alignItems:'center',marginTop:80}}>
      <Image style={{width:100,height:100,borderRadius:20,marginBottom:20}}
        source={require('../assets/cf.jpg')}
     />
    </View>
    <View style={styles.inputContainer}>
    <TextInput
      style={styles.textInput}
      placeholder="UserHandle"
      placeholderTextColor="gray"
      onChangeText={goalInputHandler}
      value={enteredGoalText}
    />
    <View style={styles.buttonContainer}>
      <View style={styles.button}>
        <Button title="Rating" onPress={expensePressHandler} />
      </View>
      <View style={styles.button}>
        <Button title="Clear" onPress={clearinput} />
      </View>
    </View>
    </View>
   </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    //marginBottom: 24,
    paddingTop: 30,
    paddingBottom:30,
    paddingLeft:20,
    paddingRight:20,
    marginTop:20,
    marginHorizontal:12,
    backgroundColor : GlobalStyles.colors.primary700,
    borderRadius:20,
    elevation:40
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '96%',
    padding: 8,
    color:GlobalStyles.colors.accent500,
    fontSize:18,
    borderRadius:8
    //fontWeight:"bold"
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
});
