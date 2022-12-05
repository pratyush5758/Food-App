import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {IMAGES} from '../assets';

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <ImageBackground source={IMAGES.PIZZASLICE2} style={styles.img}>
        <View style={styles.mainview}>
          <Text style={styles.maintext}>Cooking a Delicious Food Easily</Text>
        </View>
        <View style={styles.secondview}>
          <Text style={styles.secondtext}>
            Discover more than 1200 food recipes in your hands and cooking it
            easily!
          </Text>
        </View>
        <View style={styles.login}>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.textbtn}>Login</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.sign}>
            <TouchableOpacity style={styles.btnsign}>
                <Text style={styles.signtext}>Sign Up</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  img: {
    height: Dimensions.get('window').height,
  },
  mainview: {
    marginTop: 468,
    marginHorizontal: 25,
    width: 215,
  },
  maintext: {
    color: '#f1f1f1',
    fontSize: 30,
    fontWeight: '600',
    letterSpacing: 1,
  },
  secondview: {
    marginHorizontal: 25,
    marginVertical: 10,
    width: 240,
  },

  secondtext: {
    color: 'gray',
    fontWeight: '300',
    letterSpacing: 1,
    lineHeight: 20,
  },
  login:{
    marginTop:20,
    marginHorizontal:25,
},
btn:{
    backgroundColor:'#27ae89',
    alignItems:'center',
    height:55,
    borderRadius:10,
},
textbtn:{
    marginVertical:15,
    fontSize:20,
    color:'#fff',
    
},
btnsign:{
    borderWidth:1,
    borderColor:'#27ae89',
    borderRadius:10,
    alignItems:'center',
    height:55,
},
sign:{
    marginTop:20,
    marginHorizontal:25,
},
signtext:{
    marginVertical:10,
    fontSize:20,
    color:'#fff',
},
    
   

    
    
    
});
