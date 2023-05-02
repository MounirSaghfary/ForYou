import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import RestaurantCard from './RestaurantCard';

const FeaturedRow2 = ({title, description, featuredCategory}) => {
  return (
    <View>
      <View style={{    marginTop: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 4}}>
        <Text style={{fontSize: 20,fontWeight: "bold"}}> {title} </Text>
        <Icon name="arrow-forward" type="Ionicons" color="#00CCBB" size={30}/> 
      </View>
      <Text style={{ fontSize: 12,color: '#888', paddingHorizontal: 4}}> {description}</Text>
      <ScrollView contentContainerStyle ={{paddingTop: 10, paddingHorizontal: 15}} horizontal showHorizontalScrollIndicator={false}>
            <RestaurantCard 
                id= {123}
                imgUrl="https://images.unsplash.com/photo-1570368336224-455084c1fb31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Q2hpbmVzZSUyMHNvdXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                title="ForYou Sushi"
                rating={5}
                genre="Japenese"
                address="123 main st"
                short_description="Best Sushi in the city!" 
                dishes={[]}
                long={20}
                lat={0}
            />
            <RestaurantCard 
                id= {123}
                imgUrl="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Rm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                title="ForYou FastFood"
                rating={4.5}
                genre="American"
                address="123 main st"
                short_description="Best Burgers in the city" 
                dishes={[]}
                long={20}
                lat={0}
            />
            <RestaurantCard 
                id= {123}
                imgUrl="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8UGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                title="ForYou Italia"
                rating={5}
                genre="Italian"
                address="123 main st"
                short_description="Best Pasta in the city" 
                dishes={[]}
                long={20}
                lat={0}
            />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow2