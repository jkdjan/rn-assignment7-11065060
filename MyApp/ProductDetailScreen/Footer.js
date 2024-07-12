import { StyleSheet, View, Text, Image} from "react-native";
import { useCart } from "../CartContext";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Footer({product}){
    const {dispatch} = useCart();

    const addToCart = () => {
        if (product && product.id) {
            dispatch({ type: 'ADD_TO_CART', payload: product });
        }
    };
    // if (!product) {
    //     return null;
    // }
    return(
        <View style={styles.footer}>
            <TouchableOpacity onPress={addToCart}>
                <Image style={styles.plus} source={require('../assets/Plus.png')}></Image>
            </TouchableOpacity>
                <Text style={styles.buttonText}>ADD TO BASKET</Text>
            <Image style={styles.wishlist} source={require('../assets/Heart.png')}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: '#000000',
        height: 90,
        bottom: 4,
        borderTopWidth: 1,
        borderColor: '#333333',
    },

    plus: {
        tintColor: '#FFFFFF',
        right: 70,
        width: 30,
        height: 40,
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '300',
        right: 50
    },

    wishlist: {
        tintColor: '#FFFFFF',
        left: 70,
        width: 30,
        height: 30,
        
    },
});
