import { View, Text, Image, ScrollViewComponent, ScrollView,FlatList,TouchableHighlight } from "react-native";

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
const Item =({item,onPress}:any)=>(
    
        <View style={{ marginVertical:10,marginHorizontal:10, padding:15,borderRadius:20}}>
            {/* <Text style={{textAlign:'center',fontSize:20}}>{item.name}</Text> */}
            <Image source={{uri:`${item.photo_url}`}} style={{width:310,height:200,margin:10,borderRadius:20}}/>
        </View>

   
  );
function Recipe(props: any): JSX.Element {
    const { navigation, route } = props;
    const item = route.params?.item;
    const getCategoryName = (categoryId: any) => {
        let name;
        categories.map((data: any) => {
            if (data.id == categoryId) {
                name = data.name;
            }
        });
        return name;
    }
    const renderCategories = ({item}:{item:any})=>{
        return(
            <Item 
            item={item} 
            onPress={()=>{}}
            />
        );
    }
    return (
        <ScrollView>
            <View>
            <FlatList data={categories} horizontal={true} renderItem={renderCategories}/>
            </View>
            <View>
                <Text style={{ fontSize: 40, margin: 10, textAlign: 'center', color: 'blue' }}>{item.title}</Text>
                <Image source={{ uri: `${item.recipeImg}` }} style={{ width: 300, height: 300, marginHorizontal: 50, borderRadius: 20 }} />
                <Text style={{ fontSize: 20, margin: 10, textAlign: 'center',color:'#E38ED0' }}>{getCategoryName(item.categoryId)}</Text>
                <Text style={{ fontSize: 15, margin: 10, textAlign: 'center',color:'blue' }}>Time</Text>
                <Text style={{ fontSize: 20, textAlign: 'center',color:'#E38ED0' }}>{`${item.time}${' '}Minutes`}</Text>
                <Text style={{ fontSize: 20, textAlign: 'center', margin: 20,color:'blue'}}>Reciepe</Text>
                <Text style={{ fontSize: 15, marginHorizontal: 20, color: 'purple' }}>{item.description}</Text>
            </View>

        </ScrollView>

    )
}
export default Recipe;