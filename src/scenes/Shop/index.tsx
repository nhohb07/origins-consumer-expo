import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Text } from "@ui-kitten/components";
import * as React from "react";
import Layout from "../../components/Layout";

function ShopScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <Layout contentStyles={{ padding: 15 }}>
      <Text category="h6">Shop</Text>

      <Button
        appearance="outline"
        onPress={() => navigation.push("ProductDetail")}
      >
        Product Detail
      </Button>
    </Layout>
  );
}

export default ShopScreen;
