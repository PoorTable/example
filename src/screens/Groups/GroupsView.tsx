import React, { ReactElement } from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";

interface i1 {
  onPress: Function,
}

const GroupsView =({onPress}:i1): ReactElement  => {
  return(
    <SafeAreaView>
      <TouchableOpacity onPress={()=>{onPress()}}>
        <Text> Groups </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
};

export default GroupsView;
