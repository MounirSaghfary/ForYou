import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView contentContainerStyle ={{paddingTop: 10, paddingHorizontal: 15}} horizontal showHorizontalScrollIndicator={false}>
      <CategoryCard imgUrl="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
      <CategoryCard imgUrl="https://images.unsplash.com/photo-1618449840665-9ed506d73a34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8VGhhaSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
      <CategoryCard imgUrl="https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8SW5kaWFuJTIwRm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
      <CategoryCard imgUrl="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8TW9yb2NjYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
      <CategoryCard imgUrl="https://images.unsplash.com/photo-1601313816462-fe3cbebf6753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8QW1lcmljYW4lMjBGb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
      <CategoryCard imgUrl="https://plus.unsplash.com/premium_photo-1664648184178-c9d4866c56f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
    </ScrollView>
  )
}

export default Categories

