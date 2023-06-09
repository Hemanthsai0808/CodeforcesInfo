import {  StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';


function ContestItem({ id,name,startTimeSeconds,phase}) {
 if(phase=="BEFORE"){

  var time_to_show = startTimeSeconds; // unix timestamp in seconds
  var t = new Date(time_to_show * 1000);
  var formatted = ('0' + t.getHours()).slice(-2) + ':' + ('0' + t.getMinutes()).slice(-2);

  const date = new Date(startTimeSeconds*1000);
  const date1 = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

  return (
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {name} 
          </Text>
          <Text style={[styles.amountContainer1, styles.description1]}> 
            {date1}
          </Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{formatted}</Text>
        </View>
      </View>
  );
 }
}

export default ContestItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    flex:1,
    padding: 10,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary700,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: 'white',
  },
  description: {
    flex:1,
    fontSize: 17,
    marginBottom: 4,
    fontWeight: 'bold',
    width : 170,
  },
  description1: {
    flex:1,
    fontSize: 17,
    marginBottom: 4,
    fontWeight: 'bold',
     width : 110,
  },
  amountContainer: {
    paddingHorizontal: 2,
    paddingVertical: 4,
    // marginRight: 10,
    //backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    Width: 80,
  },
  amountContainer1: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    // marginRight: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 50,
  },
  amount: {
    color: GlobalStyles.colors.accent500,
    fontWeight: 'bold',
    fontSize:16
  },
});
