import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({title, description}) => {



  return (
    <View>
      <View style={{marginTop: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 4}}>
        <Text style={{fontSize: 20,fontWeight: "bold"}}> {title} </Text>
        <Icon name="arrow-forward" type="Ionicons" color="#00CCBB" size={30}/> 
      </View>
      <Text style={{ fontSize: 12,color: '#888', paddingHorizontal: 4}}> {description}</Text>
      <ScrollView contentContainerStyle ={{paddingTop: 10, paddingHorizontal: 15}} horizontal showHorizontalScrollIndicator={false}>
            <RestaurantCard 
                id= {0}
                imgUrl="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VzaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                title="ForYou Sushi"
                rating={5}
                genre="Japenese"
                address="123 main st"
                short_description="Best Sushi in the city!" 
                restaurant_description= "ForYou Sushi is a high-quality Japanese restaurant known for their fresh sushi and sashimi, as well as hot dishes like ramen and udon."
            />
            <RestaurantCard 
                id= {1}
                imgUrl="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                title="ForYou FastFood"
                rating={4.5}
                genre="American"
                address="123 main st"
                short_description="Best Burgers in the city" 
                restaurant_description="ForYou Fastfood is a casual eatery that serves classic American fast food favorites. Their menu features a variety of burgers, fries, hot dogs, and milkshakes, as well as salads and vegetarian options."
            />
            <RestaurantCard 
                id= {2}
                imgUrl="https://plus.unsplash.com/premium_photo-1673809798970-30c14cfd0ab6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFzdGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                title="ForYou Italia"
                rating={5}
                genre="Italien"
                address="123 main st"
                short_description="Best Pasta in the city" 
                restaurant_description="ForYou Restaurant is a cozy eatery that serves authentic Italian cuisine in a warm and inviting atmosphere. Their menu features a variety of classic dishes such as pasta, pizza, and seafood, as well as salads and antipasti."
            />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow

