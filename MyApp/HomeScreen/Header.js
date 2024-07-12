import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export default function Header() {
    const navigation = useNavigation();
    const translateX = useSharedValue(-300);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }],
            zIndex: 1000,
        };
    });

    const toggleMenu = () => {
        translateX.value = translateX.value === 0 ? withTiming(-300, { duration: 300 }) : withTiming(0, { duration: 300 });
    };

    return (
    <View style={styles.headerContainer}>
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={toggleMenu}>
                    <Image style={styles.menu} source={require('../assets/Menu.png')} />
                </TouchableOpacity>
            </View>
            <View>
                <Image style={styles.logo} source={require('../assets/Logo.png')} />
            </View>
            <View style={styles.iconsContainer}>
                <Image style={styles.search} source={require('../assets/Search.png')} />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cart')}>
                    <Image style={styles.shoppingBag} source={require('../assets/shoppingBag.png')} />
                </TouchableOpacity>
            </View>
            <Animated.View style={[styles.slidingMenu, animatedStyle]}>
                <TouchableOpacity style={styles.closeButtonContainer} onPress={toggleMenu}>
                    <Image style={styles.closeButton} source={require('../assets/Close.png')} />
                </TouchableOpacity>
                <Text style={styles.menuNameText}>Joel Djan</Text>
                <View style={styles.line} />
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.menuText}>Store</Text>
                </TouchableOpacity>
                <Text style={styles.menuText}>Locations</Text>
                <Text style={styles.menuText}>Blog</Text>
                <Text style={styles.menuText}>Jewelry</Text>
                <Text style={styles.menuText}>Electronics</Text>
                <Text style={styles.menuText}>Clothing</Text>
            </Animated.View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        position: 'relative',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000, 
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 10,
        width: '100%',
        position: 'relative',
        backgroundColor: 'white',
    },
    menu: {
        width: 30,
        height: 33,
    },
    logo: {
        width: 99,
        height: 40,
        left: 21,
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    search: {
        width: 30,
        height: 30,
        marginRight: 20,
    },
    shoppingBag: {
        width: 30,
        height: 30,
    },
    button: {
        position: 'relative',
    },
    slidingMenu: {
        position: 'absolute',
        left: 0,
        top: 60,
        width: 300,
        height: 900,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        padding: 20,
    },
    closeButtonContainer: {
        alignSelf: 'flex-start',
    },
    closeButton: {
        width: 30,
        height: 30,
    },
    menuNameText:{
        fontSize: 20,
        marginVertical: 10,
        letterSpacing: 3
    },
    menuText: {
        fontSize: 18,
        marginVertical: 10,
    },
    line:{
        height: 1, 
        width: 120, 
        backgroundColor: '#D18035', 
        marginVertical: 5,
        left: 25
    }
});
