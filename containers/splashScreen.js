import { Text, View, Image, TouchableOpacity } from "react-native"

const SplashScreen = ({navigation}) => {
    
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <View style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}>
                <Image
                    source={require("../assets/Frame.png")}
                />
            </View>
            <View style={{flex: 0.3, justifyContent: "space-between"}}>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "#61B846", fontSize: 30, fontWeight: "bold" }}>SAYLANI WELFARE</Text>
                    <Text style={{ color: "#024F9D", fontSize: 15, fontWeight: "bold" }}>ONLINE DISCOUNT STORE</Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ backgroundColor: "#61B846", height: 60, width: 200, borderRadius: 20, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default SplashScreen