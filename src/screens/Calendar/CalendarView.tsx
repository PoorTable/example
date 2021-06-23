import React, { ReactElement } from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import {FloatingLabelInput} from 'react-native-floating-label-input';

interface i1 {
  onPress: Function,
}

const CalendarView =({onPress}:i1): ReactElement  => {
  return(
    <SafeAreaView>
      <TouchableOpacity onPress={()=>{onPress()}}>
        <Text> Calendar </Text>
        <FloatingLabelInput
          label={'label'}
          inputStyles={{
            fontSize: 23,
            color: '#000000'
          }}
          labelStyles={{
            fontSize: 23,
            color:'#111212'
          }}
          containerStyles={{
            borderWidth: 1,
            backgroundColor: '#fff',
            borderColor: '#CDCDCD',
            borderRadius: 8,
            paddingVertical: 10,
           marginHorizontal: 15
          }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  )
};

export default CalendarView;
