import React, {ReactElement} from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import MainNavigation from "./src/navigation/MainNavigation";

export default function App (): ReactElement  {
  return (
 <MainNavigation/>
  );
}

