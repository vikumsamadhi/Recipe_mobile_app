import React from "react";
import { View, Text, Image, TouchableOpacity, ImageBackground, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const AboutUs = ({ navigation, route }) => {
    const openUrl = (url) => {
        Linking.openURL(url).catch((err) => console.error("An error occurred", err));
    };

    return (
        <ImageBackground
            source={require("../../assets/images/png-clipart-food-background-food-fruit.png")}
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <TouchableOpacity
                onPress={() => navigation.navigate("Welcome")}
                style={{
                    position: "absolute",
                    top: 35,
                    left: 20,
                    color: "red",
                }}
            >
                <Image
                    source={require("../../assets/images/home-button.jpg")}
                    style={{
                        width: 45,
                        height: 45,
                        resizeMode: "contain",

                    }}
                />
            </TouchableOpacity>

            <View style={{ alignItems: "center", marginTop: -90 }}>
                <View
                    style={{
                        fontSize: 60,
                        fontWeight: "bold",
                        color: "#FF0000",
                        marginTop: 20,
                        marginBottom: 20,
                        marginLeft: 10,
                        marginRight: 10,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "#FFb00c",
                            textAlign: "center",
                        }}
                    >
                        Welcome to the world of culinary delight with our Recipes App!
                    </Text>
                </View>
                <Text
                    style={{
                        fontSize: 22,
                        fontWeight: "bold",
                        color: "#000000",
                        marginTop: 20,
                        marginBottom: 20,
                        marginLeft: 40,
                        marginRight: 40,
                        textAlign: "justify",
                    }}
                >
                    We are your dedicated culinary companion, here to inspire, guide, and simplify your cooking journey. Whether you're an experienced chef or just starting out in the kitchen, our app is designed to cater to all skill levels and tastes.
                </Text>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#3ccafc",
                        marginTop: 7,
                        marginBottom: 10,
                        marginLeft: 40,
                        marginRight: 40,
                        textAlign: "left",
                    }}
                >
                    Our Features:
                </Text>
                <View
                    style={{
                        marginLeft: 40,
                        marginRight: 40,
                        marginBottom: 40,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: "bold",
                            color: "#000000",
                        }}
                    >
                        - Discover a wide range of recipes
                    </Text>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: "bold",
                            color: "#000000",
                        }}
                    >
                        - Step-by-step cooking instructions
                    </Text>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: "bold",
                            color: "#000000",
                        }}
                    >
                        - Save your favorite recipes
                    </Text>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: "bold",
                            color: "#000000",
                        }}
                    >
                        - Shopping list for ingredients
                    </Text>

                </View>
                <View style={{ flexDirection: "row", marginTop: -5 }}>
                    <TouchableOpacity
                        onPress={() => openUrl("https://www.facebook.com/vikum.samadi.9?mibextid=ZbWKwL")}
                        style={{ marginRight: 25 }}
                    >
                        <Icon name="facebook" size={40} color="#3b89ff" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => openUrl("https://instagram.com/vikumgajanayake?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D")}
                        style={{ marginRight: 25 }}
                    >
                        <Icon name="instagram" size={40} color="#832ab4" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => openUrl("https://www.youtube.com/channel/UCl5FV_81vNAOL5uPtTecBMA")}
                        style={{ marginRight: 25 }}
                    >
                        <Icon name="youtube" size={40} color="#Fe6000" />
                    </TouchableOpacity>
                </View>

            </View>
        </ImageBackground>
    );
};

export default AboutUs;
