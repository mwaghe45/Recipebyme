import {View, Text, FlatList, TouchableHighlight, Image} from "react-native";


type ItemData = {
    id: Number,
    name:String,
    photo_url: String
  };
type ItemProps = {
    item: ItemData;
    onPress: () => void;
  }; 

const categories :ItemData[]=[
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

  const Item =({item,onPress}:ItemProps)=>(
    <TouchableHighlight  underlayColor="white"  onPress={onPress}>
        <View style={{backgroundColor:'#86E4EC', marginVertical:10,marginHorizontal:50, padding:15,borderRadius:20}}>
            <Text style={{textAlign:'center',fontSize:20}}>{item.name}</Text>
            <Image source={{uri:`${item.photo_url}`}} style={{width:250,height:200,margin:10,borderRadius:20}}/>
        </View>

    </TouchableHighlight>
  );
interface Props{
    navigation:any
}
function Categories({navigation}:Props): JSX.Element {
    const onPressCategory = (item:any) => {
        navigation.navigate("ListByCategory",{ item });
      };
    const renderCategories = ({item}:{item:ItemData})=>{
        return(
            <Item 
            item={item} 
            onPress={()=>onPressCategory(item)}
            />
        );
    }
    return(
       <View>
        <FlatList data={categories}  renderItem={renderCategories}/>
       </View>
    )
}
export default Categories;