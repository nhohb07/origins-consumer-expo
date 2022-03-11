import fonts from "./fonts";
import colors from "./colors";

export default {
  activeColor: colors["color-primary-400"],
  inactiveColor: "gray",
  icons: {
    Home: "home-outline",
    Shop: "shopping-cart-outline",
    Blog: "list-outline",
    Guide: "alert-circle-outline",
    Account: "person-outline",
  },
  iconSize: {
    width: 20,
    height: 20,
  },
  label: {
    fontFamily: fonts["text-font-family"],
    fontSize: 14,
  },
  title: {
    fontFamily: fonts["text-subtitle-1-font-family"],
    fontSize: 20,
  },
};
