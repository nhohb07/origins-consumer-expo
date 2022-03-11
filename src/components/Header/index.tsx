import { useNavigation } from "@react-navigation/native";
import {
  Icon,
  TopNavigationAction,
  OverflowMenu,
  MenuItem,
  TopNavigation,
} from "@ui-kitten/components";
import React from "react";

function Header() {
  const navigation = useNavigation();

  const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;

  const EditIcon = (props: any) => <Icon {...props} name="edit" />;

  const MenuIcon = (props: any) => <Icon {...props} name="more-vertical" />;

  const InfoIcon = (props: any) => <Icon {...props} name="info" />;

  const LogoutIcon = (props: any) => <Icon {...props} name="log-out" />;

  const renderBackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );

  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );

  const renderRightActions = () => (
    <React.Fragment>
      <TopNavigationAction icon={EditIcon} />
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}
      >
        <MenuItem accessoryLeft={InfoIcon} title="About" />
        <MenuItem accessoryLeft={LogoutIcon} title="Logout" />
      </OverflowMenu>
    </React.Fragment>
  );

  return (
    <TopNavigation
      alignment="center"
      title="Eva Application"
      subtitle="Subtitle"
      accessoryLeft={renderBackAction}
      accessoryRight={renderRightActions}
    />
  );
}

export default Header;
