import { View, Text } from 'react-native'
import React from 'react'

import { EthPrice, NFTTitle } from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants';

const DetailsDesc = ({ data }) => {
  return (
    <>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyCopntent: 'space-between',
        alignItems: 'center'
      }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarger}
          sybTitleSize={SIZES.font}
        />

        <EthPrice price={data.price} />
      </View>

      <View style={{ marginVerticle: SIZES.extraLarge * 1.5 }}>
        <Text style={{
          fontSize:SIZES.font,
          fontFamily: FONTS.semiBold, fontSizecolor: COLORS.primary,
        }}>
          Description</Text>
      </View>
      <View style={{ marginTop: SIZES. base }}>
        <Text style={{
          fontSize:SIZES.small,
          fontFamily: FONTS.regular,
          color: COLORS.secondary,
          lineHeight: SIZES.large
        }}>{data.description}</Text>
      </View>
    </>
  )
}

export default DetailsDesc