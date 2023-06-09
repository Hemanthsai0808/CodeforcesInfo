import { Pressable, StyleSheet, Text, View,Image } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import {useCallback} from 'react';
import {Alert, Linking} from 'react-native';

function Button1({ title,url}) {

    const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL(url);
        } else {
          Alert.alert(`Don't know how to open this URL: ${url}`);
        }
      }, [url]);

  return (
    <View style={styles.button}>
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={{textAlign:'center',justifyContent:'center',margin:20}}>
        <Image style={{width:45,height:30,borderRadius:25}}
        source={require('../ContestsOutput/cf.jpg')}
     />
        </View>
      </Pressable>
    </View>
  );
}

export default Button1;

const styles = StyleSheet.create({
  button: {
   borderRadius:50,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  flat: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    justifyContent:'center'
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.25,
    backgroundColor:GlobalStyles.colors.primary500,
    borderRadius: 150,
  },
});