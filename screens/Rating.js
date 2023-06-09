
import React from "react";
import { StyleSheet,View,ActivityIndicator,Text } from "react-native";
import { VictoryLine, VictoryChart } from "victory-native";
import { useState,useEffect } from "react";
import { GlobalStyles } from "../constants/styles";

function Rating({ route }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const userHandle = route.params?.username;
  const getMovies = async () => {
    const url1 = 'https://codeforces.com/api/user.rating?handle='+userHandle;
    //console.log(url);
    try {
      const response = await fetch(url1);
      const json = await response.json();
      setData(json.result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  function crating(){
     let sum =0;
     for(let i=0;i<data.length;i++){
       sum = data[i].newRating;
     }
     return sum;
  }

  function crating1(){
    let sum1=0;
    for(let i=0;i<data.length;i++){
      sum1 = Math.max(sum1,data[i].newRating);
    }
    return sum1;
 }


  useEffect(() => {
    getMovies();
  }, []);
  
   
  if(isLoading){
    return <ActivityIndicator style={{backgroundColor:GlobalStyles.colors.primary700,flex:1}} />
  }else if(data === undefined || data === null || data.length==0){
     return (
      <View style={{flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: GlobalStyles.colors.primary500}}>
         <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>No User Found with this UserHandle</Text>
         <Text style={{color:'white',fontSize:22,fontWeight:'bold'}}>Please Enter Valid UserHandle</Text>
  </View>
     );
  }else{
    return (
     <View style={{backgroundColor:GlobalStyles.colors.primary700,flex:1}}>
    <View style={{backgroundColor:GlobalStyles.colors.primary500,padding:25,marginBottom:30,marginTop:100,borderRadius:50,elevation:20}}> 
    <Text style={{color:'#E2D522',fontSize:20,textAlign:'center',paddingBottom:15,marginTop:20}}>{userHandle}</Text>
     <Text style={{color:'gray',fontSize:20,textAlign:"center"}}>CurrentRating    :         {crating()}</Text>
     <Text style={{color:'gray',fontSize:20,textAlign:"center"}}>MaxRating          :         {crating1()}</Text>
    <VictoryChart paddingLeft={10} width={354} colorScale={'red'} style={{
    background: {
      fill: "#0E0E0E"
    }
  }}>
      <VictoryLine style={{ data: { stroke: "#46453D" }}}  data={data} x="contestID" y="newRating" />
    </VictoryChart>
    </View>
    </View>
    );
  } 
}
export default Rating;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary700
  }
});

