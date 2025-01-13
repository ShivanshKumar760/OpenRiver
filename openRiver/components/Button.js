import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { COLORS, SHADOWS, SIZES ,FONTS} from '../constants';


const CircleButton=({imgUrl,right,top,handlePress})=>{
  return (
    <TouchableOpacity
      style={{
        width:40,
        height:40,
        backgroundColor:COLORS.white,
        position:'absolute',
        borderRadius:SIZES.extraLarge,
        alignItems:"center",
        justifyContent:"center",
        ...SHADOWS.light,
        right,top
      }}
    >
      <Image source={imgUrl} resizeMode='contain' style={{width:24,height:24}}/>
    </TouchableOpacity>
  );

};
const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
export {RectButton,CircleButton}