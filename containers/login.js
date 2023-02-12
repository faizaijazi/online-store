import { Text, View, TextInput, Image, TouchableOpacity, ScrollView } from "react-native"
import axios from "axios"
import {useState} from "react"
const Login = ({ navigation }) => {
    // const baseUrl = "http://172.16.18.90:3002/user"
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const baseUrl = "http://localhost:3002/user"

    const data = async () => {
        console.log(email)
        console.log(password)
        const loginData = await axios.post(`${baseUrl}/login`, {
            email: email,
            password: password,
        })
        console.log(loginData)
    }


    return (
        <ScrollView>
            <View style={{ height: 840, alignItems: "center" }}>
                <View style={{ flex: .3, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "#61B846", fontSize: 30, fontWeight: "bold" }}>SAYLANI WELFARE</Text>
                    <Text style={{ color: "#024F9D", fontSize: 15, fontWeight: "bold" }}>ONLINE DISCOUNT STORE</Text>
                </View>
                <View style={{ flex: .4, justifyContent: "center" }}>
                    <View style={{ width: 300, borderBottomWidth: 1, borderColor: "black", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <TextInput placeholder="Email" style={{ width: 250 }} onChangeText={(e) => setEmail(e)} />
                        <Image
                            source={require("../assets/Emailicon.png")}
                            style={{ height: 30, width: 30 }}
                        />
                    </View>
                    <View style={{ width: 300, borderBottomWidth: 1, borderColor: "black", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <TextInput placeholder="Password" style={{ width: 250 }} onChangeText={(e) => setPassword(e)} />
                        <Image
                            source={require("../assets/Passwordicon.png")}
                            style={{ height: 30, width: 30 }}
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={() => {navigation.navigate('DiscountStore'),data()}} style={{ backgroundColor: "#61B846", paddingVertical: 20, paddingHorizontal: 100, borderRadius: 20 }}>
                    <Text style={{ color: "white", fontSize: 20 }}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={{ marginTop: 20 }}>
                    <Text style={{ color: "#024F9D", fontSize: 13 }}>Don't have an account? Register</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => navigation.navigate('AdminProduct')} style={{ marginTop: 20, backgroundColor: "#61B846", paddingVertical: 20, paddingHorizontal: 100, borderRadius: 20 }}>
                    <Text style={{ color: "white", fontSize: 20 }}>Admin Panel</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
};
export default Login