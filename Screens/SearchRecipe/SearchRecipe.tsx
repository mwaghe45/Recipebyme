import { useEffect, useState } from "react";
import {View, Text, FlatList, TouchableHighlight, Image, TextInput, StyleSheet} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';

type ItemData = {
    recipeId: Number,
    categoryId: Number,
    title: String,
    recipeImg: String,
    description:String
  };
type ItemProps = {
    item: ItemData;
    onPress: () => void;
  };
const categories: any = [
  {
      id: 0,
      name: 'Pizza',
      photo_url: 'https://amp.businessinsider.com/images/5c084bf7bde70f4ea53f0436-750-563.jpg'
  },
  {
      id: 1,
      name: 'Mexican Food',
      photo_url: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg'
  },
  {
      id: 2,
      name: 'Italian Food',
      photo_url:
          'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  },
  {
      id: 3,
      name: 'Cookies',
      photo_url:
          'https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imwidth=1400'
  },

  {
      id: 4,
      name: 'Smoothies',
      photo_url:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still-life-of-three-fresh-smoothies-in-front-of-royalty-free-image-561093647-1544042068.jpg?crop=0.715xw:0.534xh;0.0945xw,0.451xh&resize=768:*'
  },
];
const getCategoryName = (categoryId: any) => {
  let name;
  categories.map((data: any) => {
      if (data.id == categoryId) {
          name = data.name;
      }
  });
  return name;
}
const Item = ({item, onPress}: ItemProps) => (
  
    <TouchableHighlight underlayColor="white"  onPress={onPress} >
        <View style={{margin:10,padding:10,backgroundColor:'#86E4EC',borderWidth:1, borderRadius:20,width:170,height:260}}>
        <Text style={{fontSize:20,textAlign:'center'}} >{item.title}</Text>
        <Text style={{fontSize:20,margin:10,minHeight:40,textAlign:'center',color:'#E38ED0' }}>{getCategoryName(item.categoryId)}</Text>
        <Image source={{ uri: `${item.recipeImg}` }} style={{ width: 150, height: 150,borderRadius:20}}  />
      
        </View>
    
    </TouchableHighlight>
  );
interface Props {
    navigation: any
}
function SearchRecipe({navigation} : Props): JSX.Element {

  const [recipe,setRecipe] = useState<any>([])
  const[serchText,setSearchText] = useState<any>(null)
  const [serchwidth,setSeachwidth] = useState<any>(150)

const styles =  StyleSheet.create({
  search : {
    margin:20,
    padding: 10, 
    borderWidth: 1, 
    borderRadius: 25,
    width:serchwidth,
    height:40,
    
  }
})
 
  const searchData =  () => {
    Axios.get(`http://192.168.1.135:5050/api/getrecipe?title=${serchText}`)
    .then(result => {
      // console.log(result)
    setRecipe(result?.data?.response);
  })
   .catch((error: any) => {
     console.log(error);
   });
  }

  useEffect(()=>{
    
   searchData();
  },[serchText])
 
  
    const onPressRecipe = (item:any) => {
        navigation.navigate("Recipe",{ item });
      };
    const renderRecipes = ({item}: {item: ItemData}) => {
    
        return (
          <Item
            item={item}
            onPress={() => {
                onPressRecipe(item)
            }}
            
          />
        
        );
      }; 
   
    const onFocus = () =>{
      setSeachwidth(300)
    }
    const onBlur = () =>{
      setSeachwidth(150)
    }
  
    return(
      <>
       <View>
       <TextInput style={styles.search} value={serchText} onChangeText={(e:any)=>{setSearchText(e)}} placeholder="search" onFocus={onFocus} onBlur={onBlur}/>
      {
        serchText ? <>
        <FlatList style={{marginBottom:80}} showsVerticalScrollIndicator={false} data={recipe} numColumns={2} renderItem={renderRecipes} />
        </>:null
      }
        
        
       </View>
      </>
 
    )
}
export default SearchRecipe;