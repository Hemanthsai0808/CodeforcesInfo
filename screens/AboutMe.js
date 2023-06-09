import {Text, View,Image } from 'react-native';
import { GlobalStyles } from '../constants/styles';

function AboutMe({route}) {
  return (
      <View style={{backgroundColor:GlobalStyles.colors.primary500,flex:1,alignItems:'center'}}>
      <View style={{alignItems:'center',backgroundColor:GlobalStyles.colors.primary700,marginTop:100,borderRadius:50,shadowOffset: {width: -5, height: 8},  
    shadowColor: '#171717',  
    shadowOpacity: 0.5,  
    shadowRadius: 10,}}>
      <View style={{padding:30}}>
        <Image style={{width:200,height:200,borderRadius:250}}
        source={require('../assets/Me.jpg')}
        />
      </View>
      <View>
        <Text style={{color:GlobalStyles.colors.accent500,paddingLeft:25,paddingBottom:10,paddingRight:10,fontSize:20}}>About Me</Text>
        <Text style={{color:'white',paddingLeft:10,paddingRight:10,fontSize:18}}>Hello, I am Hemanth Sai</Text>
        <Text style={{color:'white',paddingLeft:10,paddingBottom:30,paddingRight:10,fontSize:16}}>I am 2024 batch Electronics and Communication Engineering Student Who Loves to create Mobile Applications and Loves Problem Solving</Text>
      </View>
      </View>
      </View>
  );
}

export default AboutMe;