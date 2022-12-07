import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {IMAGES} from '../assets';
const DetailsScreen = () => {
  const route = useRoute();
  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground source={route.params.Detail.image} style={styles.img}>
          <View style={styles.icon}>
            <View style={styles.iconbg}>
              <AntDesign name="left" size={30} color={'#fff'} />
            </View>
            <Entypo name="bookmark" size={30} color={'#509a8f'} />
          </View>
          <View style={styles.maincontainer}>
            <Image source={IMAGES.CELEBRATE} style={styles.imgcook} />
            <View style={styles.secondcontainer}>
              <Text style={styles.recipe}>Recipe by :</Text>
              <Text style={styles.name}>Pratyush Kumar</Text>
            </View>
            <TouchableOpacity style={{paddingRight: 20}}>
              <AntDesign name="rightsquare" size={35} color="white" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={styles.review}>
          <Text style={styles.title}>{route.params.Detail.title}</Text>
          <View style={styles.imgicons}>
            <Image source={IMAGES.PERSON1} style={styles.perimg} />
            <Image source={IMAGES.PERSON2} style={styles.perimg} />
            <Image source={IMAGES.PERSON3} style={styles.perimg} />
            <View style={styles.rate}>
              <Text style={{color:'#fff'}}>126+</Text>
            </View>
          </View>
        </View>
        <View style={styles.time}>
          <Text style={styles.sever}>{route.params.Detail.time}</Text>
          <Text style={styles.rating}>126+ people Already Try This</Text>
        </View>
        <View style={styles.thirdcontainer}>
          <Text style={styles.indgrident}>Ingridients</Text>
          <Text style={styles.item}>7 Item</Text>
        </View>
        <View style={styles.fouthcontainer}>
          <View style={styles.menu}>
            <View style={styles.menubg}>
              <Image source={IMAGES.CHEESE} style={styles.menuimg}/>
            </View>
            <View style={{marginRight: 110}}>
              <Text style={styles.menutext}>
                Parmesan Cheese
              </Text>
            </View>
            <Text>300g</Text>
          </View>
          <View style={styles.menu}>
            <View style={styles.menubg}>
              <Image source={IMAGES.EGG} style={styles.menuimg}/>
            </View>
            <View style={{marginRight: 225}}>
              <Text style={styles.menutext}>Eggs</Text>
            </View>
            <Text>2 pcs</Text>
          </View>
          <View style={styles.menu}>
            <View style={styles.menubg}>
              <Image source={IMAGES.PRAWN} style={styles.menuimg}/>
            </View>
            <View style={{marginRight: 150}}>
              <Text style={styles.menutext}>
                Fresh Shrimp
              </Text>
            </View>
            <Text>1/2kg</Text>
          </View>
          <View style={styles.menu}>
            <View style={styles.menubg}>
              <Image source={IMAGES.POTATO} style={styles.menuimg}/>
            </View>
            <View style={{marginRight: 210}}>
              <Text style={styles.menutext}>Potato</Text>
            </View>
            <Text>1/2kg</Text>
          </View>
          <View style={styles.menu}>
            <View style={styles.menubg}>
              <Image source={IMAGES.CHILI} style={styles.menuimg} />
            </View>
            <View style={{marginRight: 170}}>
              <Text style={styles.menutext}>
                Chili Sauce
              </Text>
            </View>
            <Text>300g</Text>
          </View>
          <View style={styles.menu}>
            <View style={styles.menubg}>
              <Image source={IMAGES.TOMATO} style={styles.menuimg}/>
            </View>
            <View style={{marginRight: 125}}>
              <Text style={styles.menutext}>
                Tomato Ketchup
              </Text>
            </View>
            <Text>300g</Text>
          </View>
          <View style={styles.menu}>
            <View style={styles.menubg}>
              <Image source={IMAGES.ONION} style={styles.menuimg}/>
            </View>
            <View style={{marginRight: 215}}>
              <Text style={styles.menutext}>Onion</Text>
            </View>
            <Text>300g</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  img: {
    width: 415,
    height: 330,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  iconbg: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 30,
    padding: 1,
  },
  maincontainer: {
    flexDirection: 'row',
    backgroundColor: '#262727',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 165,
    height: 90,
    alignItems: 'center',
    borderRadius: 10,
  },
  secondcontainer: {
    marginRight: 30,
    padding: 5,
  },
  recipe: {
    color: '#fff',
    fontSize: 16,
  },
  name: {
    fontSize: 19,
    color: '#fff',
  },
  imgcook: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 20,
  },
  perimg: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginHorizontal: -5,
  },
  review: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 23,
    width: 180,
    fontWeight: 'bold',
    color: '#202949',
  },
  imgicons: {
    flexDirection: 'row',
  },
  rate: {
    backgroundColor: '#12947C',
    width: 45,
    height: 45,
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 40,
    marginHorizontal: -15,
  },
  time: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    paddingVertical: 15,
  },
  sever: {
    fontWeight: '500',
  },
  rating: {
    width: 120,
    textAlign: 'right',
    fontWeight: '600',
  },
  thirdcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  indgrident: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  fouthcontainer: {
    marginVertical: 10,
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 5,
  },
  menubg: {
    backgroundColor: '#d7d8dc',
    padding: 7,
    borderRadius: 10,
  },
  menuimg:{
    width: 40, 
    height: 40,
  },
  menutext:{
    fontSize: 20, 
    fontWeight: 'bold',
  },
});
