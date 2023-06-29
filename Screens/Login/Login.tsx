import axios, { Axios } from "axios";
import { useState } from "react";
import { Image, View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";


interface Props {
    navigation: any
}

function Login({navigation}:Props): JSX.Element {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submit = ()=>{
        let data={
            email:email,
            password:password
        }
        console.log(data)
    
        axios.post("http://192.168.1.135:5050/api/login",data, { headers: {'Content-Type' : 'application/json'}})
        .then((response: any) => {
         console.log('data1',response);
         Alert.alert('Login Successfully !!')
         //navigation.navigate("Home");
    
    
       })
       .catch((error: any) => {
         console.log(error);
       });
    }
   
   
    return (
        <>
            <View style={{
                flex: 1,
                backgroundColor: "grey",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Text style={{padding:10,borderRadius:20, fontFamily:'cursive', fontSize: 40, color: '#AFF307' }}>Recipe By Me</Text>

                <Image source={{ uri: 'https://img.freepik.com/premium-photo/traditional-italian-pasta-with-tomato-sauce-basil-cheese-black-background-top-down-view-with-copy-space_221774-9148.jpg?w=2000' }}
                    style={{ width: 250, height: 350, borderRadius: 50 }} />

                <View style={{
                    backgroundColor: "#DCF3A3",
                    borderRadius: 30,
                    width: "60%",
                    height: 45,
                    marginBottom: 10,
                    marginTop: 20,
                    alignItems: "center",
                }}>
                    <TextInput
                        style={{}}
                        placeholder="Email"
                        value={email}
                        onChangeText={(e: any) => { setEmail(e) }}
                    />
                </View>
                <View style={{
                    backgroundColor: "#DCF3A3",
                    borderRadius: 30,
                    width: "60%",
                    height: 45,
                    marginBottom: 10,
                    alignItems: "center",
                }}>
                    <TextInput
                        style={{
                            height: 50,
                            flex: 1,
                            padding: 10,
                            marginLeft: 20,
                        }}
                        value={password}
                        placeholder="Password."
                        secureTextEntry={true}
                        onChangeText={(e: any) => setPassword(e)}
                    />
                </View>
                <TouchableOpacity>
                    <Text style={{color:'#0648F8'
                    }}>Forgot Password?</Text>

                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: "70%",
                    borderRadius: 25,
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 10,
                    backgroundColor: "#AFF307",
                }}  onPress={submit}>
                    <Text style={{}}>SIGN IN</Text>
                </TouchableOpacity>
                <View style={{
                    margin: 10, alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Text style={{color:"#DCF3A3"}}>If you are new please</Text>
                    <TouchableOpacity style={{}} onPress={navigation.navigate("MainNavigator")}>
                        <Text style={{ color:'#0648F8', fontSize: 20 }}> Sign up</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </>

    )
}
export default Login;