import { useState } from "react";
import { Image, View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";


interface Props {
    navigation: any
}

function Register(): JSX.Element {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
            <View style={{
                flex: 1,
                backgroundColor: "grey",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Text style={{padding:10,borderRadius:20, fontFamily:'cursive', fontSize: 40, color: '#AFF307' }}>Recipe By Me</Text>

                {/* <Image source={{ uri: 'https://img.freepik.com/premium-photo/traditional-italian-pasta-with-tomato-sauce-basil-cheese-black-background-top-down-view-with-copy-space_221774-9148.jpg?w=2000' }}
                    style={{ width: 250, height: 350, borderRadius: 50 }} /> */}
                 <View style={{
                    backgroundColor: "#DCF3A3",
                    borderRadius: 30,
                    width: "60%",
                    height: 45,
                    marginBottom: 20,
                    marginTop:20,
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
                        placeholder="username"
                        secureTextEntry={true}
                        onChangeText={(e: any) => setPassword(e)}
                    />
                </View>
                <View style={{
                    backgroundColor: "#DCF3A3",
                    borderRadius: 30,
                    width: "60%",
                    height: 45,
                    marginBottom: 20,
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
                    marginBottom: 20,
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
                <View style={{
                    backgroundColor: "#DCF3A3",
                    borderRadius: 30,
                    width: "60%",
                    height: 45,
                    marginBottom: 20,
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
                        placeholder="Confirm Password."
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
                }}>
                    <Text style={{}}>SIGN UP</Text>
                </TouchableOpacity>
                <View style={{
                    margin: 10, alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Text style={{color:"#DCF3A3"}}>If you are already register please</Text>
                    <TouchableOpacity style={{}}>
                        <Text style={{ color:'#0648F8', fontSize: 20 }}> Sign In</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </>

    )
}
export default Register;