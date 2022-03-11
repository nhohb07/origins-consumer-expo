import React from "react";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Profile: { userId: string };
  Feed: { sort: "latest" | "top" } | undefined;
};

export namespace Props {
  type Base = {
    children: React.ReactNode;
    style?: object;
  };

  export type Screen = Base;
  export type Component = Base;
}
