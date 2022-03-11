import React from "react";
import { SafeAreaView, View } from "react-native";
import { Props } from "../../types/Props";

type LayoutProps = Props.Component & {
  headerStyles?: object;
  contentStyles?: object;
};

function Layout(props: LayoutProps) {
  return (
    <SafeAreaView style={[props.style, { flex: 1 }]}>
      <View style={[props.contentStyles, { flex: 1 }]}>{props.children}</View>
    </SafeAreaView>
  );
}

export default Layout;
