import React, { ReactElement } from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";

interface i1 {
  onPress: Function,
}

const HomeworksView =({onPress}:i1): ReactElement  => {
  return(
    <SafeAreaView>
      <TouchableOpacity onPress={()=>{onPress()}}>
        <Text> Homeworks </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
};

export default HomeworksView;
