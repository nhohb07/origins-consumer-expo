import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailScreen from "../../scenes/ProductDetail";
import ShopScreen from "../../scenes/Shop";

const ShopStack = createNativeStackNavigator();

function ShopStackScreen() {
  return (
    <ShopStack.Navigator>
      <ShopStack.Screen name="Shop" component={ShopScreen} />

      <ShopStack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </ShopStack.Navigator>
  );
}

export default ShopStackScreen;
