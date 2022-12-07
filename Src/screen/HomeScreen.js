import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {IMAGES} from '../assets';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
const Food_recipe = [
  {
    image: IMAGES.NOODLES,
    Name: 'Pasta',
    title: 'Spaghetti With Shrimp Sauce',
    time: '30 Mins | 1 serving',
    
  },
   
  {
    image: IMAGES.CHICKEN,
    Name: 'Chicken',
    title: 'Spaghetti With Shrimp Sauce',
    time: '30 Mins | 1 serving',
  },
    
];

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.mainview}>
        <View>
          <Text style={styles.hellotext}>Hello Pratyush,</Text>
          <Text style={styles.maintext}>What you want to cook today?</Text>
        </View>
        <View>
          <Image source={IMAGES.CELEBRATE} style={styles.img} />
        </View>
      </View>
      <View style={styles.searchcontainer}>
        <View style={styles.search}>
          <EvilIcons name="search" size={30} />
          <TextInput placeholder="Search Recipes" />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.secondcontainer}>
          <View>
            <Image source={IMAGES.VEGE} style={styles.vegimg} />
          </View>
          <View style={styles.primary}>
            <Text style={styles.pretext}>
              You have 12 recipes that you haven't tried yet
            </Text>
            <Text style={styles.prytext}>See Recipes</Text>
          </View>
        </View>
      </View>
      <View style={styles.recipe}>
        <Text style={styles.recipetext}>Trending Recipe</Text>
      </View>
      <View>
      <FlatList
        data={Food_recipe}
        horizontal={true}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen', {Detail:item})}>
            <View style={{marginLeft:20, marginTop: 15}}>
              <ImageBackground
                source={item.image}
                style={styles.bgimg}
                imageStyle={{borderRadius: 10}}>
                <View style={styles.food}>
                  <Text style={styles.foodtext}>{item.Name}</Text>
                </View>
                <View style={styles.foodcontainer}>
                  <View style={styles.itemcontainer}>
                    <View style={styles.textfood}>
                      <Text style={styles.primarytext}>
                        {item.title}
                      </Text>
                      <Text style={styles.secondarytext}>
                        {item.time}
                      </Text>
                    </View>
                    <Entypo name="bookmark" size={25} color={'#509a8f'} />
                  </View>
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
      
        )}
      />
      </View>
      <View style={styles.categories}>
        <Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>Categories</Text>
        <Text style={{fontSize:18}}>View All</Text>
      </View>
      <View style={styles.icons}>
        <Entypo name='home' size={30} color={'#509a8f'}/>
        <EvilIcons name="search" size={30}/>
        <Entypo name="bookmark" size={30}/>
        <Feather name='settings' size={30}/>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  img: {
    borderRadius: 60,
    height: 40,
    width: 40,
  },
  hellotext: {
    color: '#509a8f',
    fontSize: 20,
    fontWeight: 'bold',
  },
  maintext: {
    marginTop: 5,
    fontSize: 15,
    letterSpacing: 1,
    color: 'gray',
    fontWeight: '400',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  searchcontainer: {
    borderRadius: 10,
    marginHorizontal: 20,
    backgroundColor: '#f5f7fb',
    marginTop: 10,
  },
  vegimg: {
    width: 90,
    height: 90,
  },
  secondcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
    marginLeft: 5,
  },
  pretext: {
    letterSpacing: 1,
    fontSize: 15,
    fontWeight: '400',
    color: 'black',
  },
  prytext: {
    marginTop: 5,
    color: '#509a8f',
    fontSize: 17,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  container: {
    backgroundColor: '#eef9f0',
    marginTop: 25,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  primary: {
    marginLeft: 5,
  },
  recipe: {
    marginTop: 25,
    marginHorizontal: 20,
  },
  recipetext: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  bgimg: {
    width: 250,
    height: 350,
  },
  food: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#59595c',
    width: 70,
    padding: 2,
    borderRadius: 10,
  },
  foodtext: {
    color: '#fff',
    marginLeft: 4,
    textAlign: 'center',
    fontSize: 16,
  },

  foodcontainer: {
    marginHorizontal: 10,
    marginTop: 180,
    backgroundColor: '#232524',
    padding: 4,
    height: 100,
    borderRadius: 10,
  },
  itemcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  textfood: {
    width: 130,
    marginHorizontal: 10,
  },
  primarytext: {
    color: '#fff',
    letterSpacing: 1,
    lineHeight: 20,
    fontSize: 17,
  },
  secondarytext: {
    marginTop: 10,
    fontSize: 15,
    color: '#fff',
    fontWeight: '300',
  },
  categories:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:20,
    marginTop:20,
  },
  icons:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:30,
  }
});
