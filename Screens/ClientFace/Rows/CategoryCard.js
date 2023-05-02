import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl, title}) => {
  return (
    <View style={{position: 'relative', margin: 5}}>
        <Image source={{uri: imgUrl}} style={{height: 80, width: 80, borderRadius: 999}}/>
        <Text style={{position: 'absolute', bottom: 1, left: 1, color: 'white',fontWeight: 'bold', fontSize: 10, paddingLeft: 5, alignItems: 'center'}}>{title}</Text>
    </View>
  )
}

export default CategoryCard