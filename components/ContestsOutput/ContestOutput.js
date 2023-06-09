import React, {useEffect, useState} from 'react';
import { StyleSheet,FlatList, View,ActivityIndicator } from 'react-native';
import ContestItem from './ContestItem';
import { GlobalStyles } from '../../constants/styles';

function ContestOutput() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://codeforces.com/api/contest.list');
      const json = await response.json();
      setData(json.result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    getMovies();
  }, []);

  const Sorteddata = data.sort(function(a, b) {
    if(a.phase=="BEFORE" && b.phase=="BEFORE"){
        return (a.startTimeSeconds - b.startTimeSeconds);
    }
  });
  
  

  function renderExpenseItem(itemData) {
    return <ContestItem {...itemData.item} />;
  }
  return (
    <View style={styles.container}>
       {isLoading ? (
        <ActivityIndicator />
      ) : (
       <FlatList
      data={Sorteddata}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
    )}
</View>
  );
}

export default ContestOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary500
  }
});