import { View, Text,TouchableOpacity, GestureResponderEvent } from "react-native";
import React, { FC } from "react";

type Props ={
    title:string;
    containerStyles?:string;
    textStyles?:string;
    isLoading?:boolean;
    onPress?:((event: GestureResponderEvent) => void) | undefined
}

const CustomButton:FC<Props> = ({
    title,
    containerStyles,
    textStyles,
    isLoading,
    onPress
}) => {
  return (
    <TouchableOpacity 
    className={`bg-secondary rounded-sm justify-center items-center mt-2 p-2 min-h-[50px] ${containerStyles} ${isLoading ? "opacity-50" : ""}`}
    onPress={onPress}
    disabled={isLoading}
    activeOpacity={0.7}
    >
      <Text className={`text-lg text-primary font-bold ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
