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
//   const recipe:ItemData[]=[
//     {
//         recipeId: 122,
//         categoryId: 3,
//         title: 'Oatmeal Cookies',
//         photo_url: 'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
//         description:
//           '-- Start with cleaned and peeled russet potatoes that you have cut into 3/8-inch match sticks. Place in bowl of very cold water: keep rinsing and changing the water until the water is clear; drain thoroughly and dry with paper towels or a clean lint-free kitchen towel.\n\n -- Meanwhile, you preheat your hot oil to 350 degrees F. Place prepared taters in oil and cook about 5 minutes. They will have that blond-tone color to them. \n\n -- Note: Once you add cold potatoes to the hot oil, the temperature of your oil is going to drop - you want it to be somewhere between 330 - 325 degrees F. \n\n -- Remove from oil; drain and cool. Now - either refrigerate until ready to finish cooking, or cool completely and freeze up to 3 months. To freeze properly - place completely cooled fries in single layer on tray and place in freezer until frozen. Then bag them.\n\n -- To finish cooking - preheat your oil to 400* F. Add your cold fries (which will drop the oil temp - which is fine because you want it near the 375 degrees F. temp) and cook a few minutes until done. Lightly salt them and shake well so that the salt distributes well and they are not salty.'
//       },
//       {
//         recipeId: 3,
//         categoryId: 4,
//         title: 'Triple Berry Smoothie',
//         photo_url:
//           'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
    
//         description: 'In a blender, combine all ingredients and blend until smooth. Then divide between 2 cups and top with blackberries, if desired.'
//       },
//       {
//         recipeId: 2,
//         categoryId: 3,
//         title: 'Vegan Cookies',
//         photo_url: 'https://www.texanerin.com/content/uploads/2018/06/no-bake-lactation-cookies-1-650x975.jpg',
      
//         description:
//           '-- Beat the egg and then combine it with water in a bowl. Stir. Combine the flour, salt, MSG, pepper, onion powder and garlic powder in a gallon size zip lock bag. Pound each of the breast filets until about 1/4-inch thick. Then cut into bite sized pieces. Coat each piece with the flour mixture by shaking in the zip lock bag. Remove and coat in the egg mixture. Then coat in the flour mixture again. Shake to coat. Deep fry at 375 degrees for 10-12 minutes, until browned and crispy.'
//       },
//       {
//         recipeId: 3,
//         categoryId: 3,
//         title: 'Pumpkin Spice Cookies',
//         photo_url:
//           'https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg',
    
      
//         description:
//           '-- In a medium pot over medium heat, heat 1 tablespoon oil. Add onion and cook until soft, 5 minutes. Add garlic and cook until fragrant, 1 minute more. Add tomato paste and stir to coat onion and garlic. Add ground beef and cook, breaking up meat with a wooden spoon, until no longer pink, 6 minutes. Drain fat.\n\n -- Return beef to pot and season with chili powder, paprika, salt, and pepper. Add tomato sauce and kidney beans. Bring to a boil, then reduce heat and let simmer 15 minutes. Add some chili to center of each tortilla, leaving room to fold in edges. Top with Fritos, then cheddar. Fold edges of tortillas toward the center, creating pleats. Invert Crunchwraps so pleats are on the bottom and stay together.\n\n -- In medium skillet over medium heat, heat remaining tablespoon oil. Add a Crunchwrap seam side down and cook until tortilla is golden, 3 to 5 minutes per side. Repeat with remaining Crunchwraps'
//       },
//       {
//         recipeId: 3,
//         categoryId: 3,
//         title: 'Pumpkin Spice Cookies',
//         photo_url:
//           'https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg',
    
      
//         description:
//           '-- In a medium pot over medium heat, heat 1 tablespoon oil. Add onion and cook until soft, 5 minutes. Add garlic and cook until fragrant, 1 minute more. Add tomato paste and stir to coat onion and garlic. Add ground beef and cook, breaking up meat with a wooden spoon, until no longer pink, 6 minutes. Drain fat.\n\n -- Return beef to pot and season with chili powder, paprika, salt, and pepper. Add tomato sauce and kidney beans. Bring to a boil, then reduce heat and let simmer 15 minutes. Add some chili to center of each tortilla, leaving room to fold in edges. Top with Fritos, then cheddar. Fold edges of tortillas toward the center, creating pleats. Invert Crunchwraps so pleats are on the bottom and stay together.\n\n -- In medium skillet over medium heat, heat remaining tablespoon oil. Add a Crunchwrap seam side down and cook until tortilla is golden, 3 to 5 minutes per side. Repeat with remaining Crunchwraps'
//       },
//       {
//         recipeId: 3,
//         categoryId: 3,
//         title: 'Pumpkin Spice Cookies',
//         photo_url:
//           'https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg',
    
      
//         description:
//           '-- In a medium pot over medium heat, heat 1 tablespoon oil. Add onion and cook until soft, 5 minutes. Add garlic and cook until fragrant, 1 minute more. Add tomato paste and stir to coat onion and garlic. Add ground beef and cook, breaking up meat with a wooden spoon, until no longer pink, 6 minutes. Drain fat.\n\n -- Return beef to pot and season with chili powder, paprika, salt, and pepper. Add tomato sauce and kidney beans. Bring to a boil, then reduce heat and let simmer 15 minutes. Add some chili to center of each tortilla, leaving room to fold in edges. Top with Fritos, then cheddar. Fold edges of tortillas toward the center, creating pleats. Invert Crunchwraps so pleats are on the bottom and stay together.\n\n -- In medium skillet over medium heat, heat remaining tablespoon oil. Add a Crunchwrap seam side down and cook until tortilla is golden, 3 to 5 minutes per side. Repeat with remaining Crunchwraps'
//       },
//       {
//         recipeId: 3,
//         categoryId: 3,
//         title: 'Pumpkin Spice Cookies',
//         photo_url:
//           'https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg',
    
      
//         description:
//           '-- In a medium pot over medium heat, heat 1 tablespoon oil. Add onion and cook until soft, 5 minutes. Add garlic and cook until fragrant, 1 minute more. Add tomato paste and stir to coat onion and garlic. Add ground beef and cook, breaking up meat with a wooden spoon, until no longer pink, 6 minutes. Drain fat.\n\n -- Return beef to pot and season with chili powder, paprika, salt, and pepper. Add tomato sauce and kidney beans. Bring to a boil, then reduce heat and let simmer 15 minutes. Add some chili to center of each tortilla, leaving room to fold in edges. Top with Fritos, then cheddar. Fold edges of tortillas toward the center, creating pleats. Invert Crunchwraps so pleats are on the bottom and stay together.\n\n -- In medium skillet over medium heat, heat remaining tablespoon oil. Add a Crunchwrap seam side down and cook until tortilla is golden, 3 to 5 minutes per side. Repeat with remaining Crunchwraps'
//       },
//       {
//         recipeId: 3,
//         categoryId: 3,
//         title: 'Pumpkin Spice Cookies',
//         photo_url:
//           'https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg',
    
      
//         description:
//           '-- In a medium pot over medium heat, heat 1 tablespoon oil. Add onion and cook until soft, 5 minutes. Add garlic and cook until fragrant, 1 minute more. Add tomato paste and stir to coat onion and garlic. Add ground beef and cook, breaking up meat with a wooden spoon, until no longer pink, 6 minutes. Drain fat.\n\n -- Return beef to pot and season with chili powder, paprika, salt, and pepper. Add tomato sauce and kidney beans. Bring to a boil, then reduce heat and let simmer 15 minutes. Add some chili to center of each tortilla, leaving room to fold in edges. Top with Fritos, then cheddar. Fold edges of tortillas toward the center, creating pleats. Invert Crunchwraps so pleats are on the bottom and stay together.\n\n -- In medium skillet over medium heat, heat remaining tablespoon oil. Add a Crunchwrap seam side down and cook until tortilla is golden, 3 to 5 minutes per side. Repeat with remaining Crunchwraps'
//       },
// ]
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
function Home({navigation} : Props): JSX.Element {

  const [recipe,setRecipe] = useState<any>([])


    // const storeData = async () => {
    //   try {
    //     await AsyncStorage.setItem('recipe',  JSON.stringify(recipe.length))
    //   } catch (e) {
    //     // saving error
    //   }
    
    // };
    // // useEffect(()=>{
    // //   storeData();
    // // },[])
    // storeData();
    
 
  const getData =  () => {
    Axios.get('http://192.168.1.135:5050/api/getrecipe')
    .then(result => {
      // console.log(result)
    setRecipe(result.data.response);
  })
   .catch((error: any) => {
     console.log(error);
   });
  }
  useEffect(()=>{
    getData();
  },[])
  
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
   
    return(
      <>
       <View>
      
        <FlatList showsVerticalScrollIndicator={false} data={recipe} numColumns={2} renderItem={renderRecipes} />
        
       </View>
      </>
 
    )
}
export default Home;