import React from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../components";

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView>
      <FocusedStatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        transLucent={true}
      />
      <View style={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        padding
      }}>
       <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} /> 
      </View>
    </SafeAreaView>

  )
}

export default Details