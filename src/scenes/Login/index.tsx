import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Calendar, Text } from "@ui-kitten/components";
import * as React from "react";
import { Button } from "react-native";
import Layout from "../../components/Layout";

function LoginScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [date, setDate] = React.useState(new Date());

  return (
    <Layout>
      <Text category="h6">Selected date: {date.toLocaleDateString()}</Text>

      <Calendar date={date} onSelect={(nextDate) => setDate(nextDate)} />

      <Button
        title="Go to Login... again"
        onPress={() => navigation.push("Login")}
      />
    </Layout>
  );
}

export default LoginScreen;
