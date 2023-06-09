import { View, Text } from "react-native";
import Button1 from "../UI/Button1";
import React from "react";
import { GlobalStyles } from "../../constants/styles";


function ResourseItem({ title, url, name }) {
  return (
    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: GlobalStyles.colors.primary700, flexDirection: 'row', width: 300, marginVertical: 8, borderRadius: 15 }}>
      <Text style={{ flex: 1, color: 'white', fontSize: 20, justifyContent: 'center', textAlign: 'center', marginLeft: 5, marginTop: 15, paddingRight: 0 }}>{name}</Text>
      <Button1 title={title} url={url} />
    </View>
  );
}

export default ResourseItem;





{/* <View style={{backgroundColor:GlobalStyles.colors.primary700,flexDirection:'row',marginVertical:10,borderRadius:15}}>
          <Text style={{flex:1,color:'white',fontSize:20,justifyContent:'center',textAlign:'center',marginLeft:5,marginTop:15,paddingRight:10}}>STL</Text>
          <Button1 title='Link'  url={supportedURL}/>
</View> */}