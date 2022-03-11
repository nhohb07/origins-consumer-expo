import { ParamListBase, RouteProp } from "@react-navigation/native";
import { Icon } from "@ui-kitten/components";
import React, { useMemo } from "react";
import tabbar from "../../theme/tabbar";

type TabbarIconProps = {
  route: RouteProp<ParamListBase, string>;
  focused: boolean;
  color: string;
  size: number;
};

function TabbarIcon(props: TabbarIconProps) {
  const iconName = useMemo(() => {
    const icons: { [key: string]: string } = tabbar.icons;
    return icons[props.route.name];
  }, []);

  return <Icon name={iconName} style={tabbar.iconSize} fill={props.color} />;
}

export default TabbarIcon;
