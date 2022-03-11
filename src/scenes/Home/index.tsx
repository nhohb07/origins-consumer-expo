import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Spinner, Text } from "@ui-kitten/components";
import * as React from "react";
import { View } from "react-native";
import Layout from "../../components/Layout";
import { styles } from "./style";

const LoadingIndicator = (props: any) => (
  <View style={[props.style, styles.indicator]}>
    <Spinner size="small" />
  </View>
);

function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <Layout contentStyles={{ padding: 15 }}>
      <Text>Home</Text>

      <Button
        style={styles.button}
        appearance="outline"
        accessoryLeft={LoadingIndicator}
        onPress={() => navigation.push("Login")}
      >
        LOADING
      </Button>
    </Layout>
  );
}

export default HomeScreen;
