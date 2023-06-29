import react,{useState,useEffect} from 'react'
import {View,Text,FlatList,TouchableHighlight,Image} from 'react-native'
import Axios from 'axios';

// interface Props {
//     navigation: any
// }
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
const Item = ({item, onPress}: ItemProps) => (
  
    <TouchableHighlight underlayColor="white"  onPress={onPress} >
        <View style={{margin:10,padding:10,backgroundColor:'#86E4EC',borderWidth:1, borderRadius:20,width:170,height:260}}>
        <Text style={{margin:10, fontSize:20,textAlign:'center'}} >{item.title}</Text>
        <Image source={{ uri: `${item.recipeImg}` }} style={{ width: 150, height: 150,borderRadius:20}}  />
      
        </View>
    
    </TouchableHighlight>
  );
function ListByCategory (props:any): JSX.Element{
    const [recipe,setRecipe] = useState<any>([])
    const { navigation, route } = props;
    const item = route.params?.item;
    console.log(item)
    const searchData =  () => {
        Axios.get(`http://192.168.1.135:5050/api/getrecipe?categoryId=${item.id}`)
        .then(result => {
          // console.log(result)
        setRecipe(result?.data?.response);
      })
       .catch((error: any) => {
         console.log(error);
       });
      }
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
      useEffect(()=>{
        
       searchData();
      },[item.id])
    return(
        <View>
            <Text style={{textAlign:'center', fontSize:30,color:'#E38ED0', margin:20}}>{item.name}</Text>
           {
            recipe.length === 0 ?(
                <Text style={{margin:20, textAlign:'center',fontSize:30}}>Recipe of this category not found !!!</Text>
            ):(
                <FlatList style={{marginBottom:80}} showsVerticalScrollIndicator={false} data={recipe} numColumns={2} renderItem={renderRecipes} />
            )
           } 
        </View>
    )
}
export default ListByCategory;