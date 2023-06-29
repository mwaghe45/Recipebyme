import react, { useState,useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image,Alert } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'
import DropDownPicker from 'react-native-dropdown-picker';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/Ionicons'
import Axios from 'axios';



const options: any = {
  title: 'Select Image',
  type: 'library',
  options: {
    selectionLimit: 0,
    mediaType: 'photo',
    includeBase64: false,
  },
}
type ItemData = {
  id: Number,
  name: String,
  photo_url: String
};
const categories: ItemData[] = [
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
interface Props {
  navigation: any
}
function AddRecipe({navigation} : Props): JSX.Element {
  const [img, setImg] = useState<any>()
  const [catId, setCatId] = useState<any>(null);
  const [title, setTitle] = useState<any>(null);
  const [time, setTime] = useState<any>(null);
  const [description, setDiscription] = useState<any>(null)
  const [items, setItems] = useState<any>(categories);
  const handleImage = async () => {
    const Image: any = await launchImageLibrary(options);
    setImg({
      uri: Image.assets[0].uri,
      name:  Image.assets[0].fileName,
      type:  Image.assets[0].type,
    })
  }
  // const getData =  () => {
  //   // try {
  //   //   let result:any = await Axios.get("http://192.168.1.135:5050/getRecipe")
  //   //   console.log( result)
  //   //   console.log("getap")
  //   // } catch (error) {
  //   //   console.log(error)
  //   // }
  //   console.log("getap")
  //   Axios.get("http://192.168.1.135:5050/api/getrecipe")
  //   .then(result => console.log(result.data.response))
  //  .catch((error: any) => {
  //    console.log(error);
  //  });
  // }
  // useEffect(()=>{
  //   getData();
  // },[])
  
  const submit = () => {
    console.log('data', img, catId, title, description, time)
    //  const fs = require('fs');
    let data = new FormData();
    data.append('recipeImg',img);
    data.append('title', title);
    data.append('description', description);
    data.append('time', time);
    data.append('categoryId', catId);
    Axios.post("http://192.168.1.135:5050/api/postrecipe",data, { headers: {'Content-Type' : 'multipart/form-data'}})
     .then((response: any) => {
      console.log('data1',response);
      Alert.alert('Recipe Add Successfully !!')
      navigation.navigate("Home");

    })
    .catch((error: any) => {
      console.log(error);
    });
    }
  return (
    <ScrollView>
      <Text style={{ color: '#C522F1', textAlign: 'center', fontSize: 20, marginTop: 20 }}>If You Intrested Then Add Your Special Recipe !!!</Text>
      <View style={{ backgroundColor: '#86E4EC', margin: 20, padding: 20, borderWidth: 1, borderColor: 'grey', borderRadius: 10 }}>
        <Text>Select Category</Text>
        <Dropdown
          style={{
            margin: 16,
            height: 50,
            borderColor: '#000',
            borderWidth: 1,
            borderRadius: 5
          }}
          data={items}
          search
          maxHeight={300}
          labelField="name"
          valueField="id"
          placeholder="Select Category"
          searchPlaceholder="Search..."
          value={catId}
          onChange={item => {
            setCatId(item.id);
          }}
          renderLeftIcon={() => (
            <AntDesign style={{ marginRight: 5 }} color="black" name="Safety" size={20} />
          )}
        />
        <Text>Recipe Name</Text>
        <TextInput style={{ margin: 20, padding: 5, borderWidth: 1, borderRadius: 5 }} onChangeText={(e: any) => { setTitle(e) }} value={title} placeholder="Enter Recipe Name" />
        <Text>Recipe Image</Text>
        <Icon name="add-circle" style={{ alignSelf: 'center' }} size={50} color="#4F8EF7" onPress={handleImage} />
        {img ? (
          <>
            <Image style={{ width: 200, height: 200,borderRadius:10,marginHorizontal:50 }} source={{ uri: `${img.uri}` }} />
          </>
        ) : null}
        <Text style={{ margin: 10, fontSize: 15 }}>Description</Text>
        <TextInput style={{ margin: 20,padding:10, borderWidth: 1, borderRadius: 5 }} onChangeText={(e: any) => { setDiscription(e) }} value={description}
          editable
          numberOfLines={10}
          multiline={true}
          textAlignVertical="top"
          placeholder='Enter Description'
          />
        <Text>Recipe Time</Text>
        <TextInput style={{ margin: 20, padding: 10, borderWidth: 1, borderRadius: 5 }} onChangeText={(e: any) => { setTime(e) }} value={time} keyboardType="numeric" placeholder="Enter Time" />
        <TouchableOpacity style={{ alignItems: 'center', backgroundColor: '#4F8EF7', padding: 10, margin: 30, borderRadius: 5 }} onPress={submit}>
          <Text>Add Recipe</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  )
}
export default AddRecipe;