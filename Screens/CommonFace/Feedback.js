import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { ScrollView } from 'react-native';
import { supabase } from '../../DATABASE/SupaBaseCLient/helper';
import { fetchFeedbacks } from '../../DATABASE/handlers';
import { getColor } from '../../RemoteInterface/remoteinterface';
import { filterFeedbacks } from '../../RemoteInterface/remoteinterface';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';

const Feedback = () => {
  const navigation = useNavigation();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [feedbacks, setFeedbacks] = useState([]);
  const [filteredFeedbacks, setFilteredFeedbacks] = useState([]);
  const [ratingFilter, setRatingFilter] = useState('');
  const [selectedFeedback, setSelectedFeedback] = useState(null);


  useEffect(() => {
    fetchFeedbacks(setFeedbacks,setFilteredFeedbacks);
  }, []);




  useEffect(() => {
    filterFeedbacks(setFilteredFeedbacks,feedbacks,ratingFilter);
  }, [ratingFilter, feedbacks]);


  const handleFeedbackPress = () => {
    navigation.navigate('AddFeedback');
  }

  const MinushandleFeedbackPress = () => {
    navigation.navigate('DeleteFeedback');
  }





  return (
    <ScrollView style={{backgroundColor: '#1c1c1c', height: 1000}}>
    <View style={styles.container}>
          <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end',  right: 300, elevation: 5,flexDirection: 'row', paddingLeft: 400}}>
                  <TouchableOpacity onPress={handleFeedbackPress} style={{borderRadius: 50, backgroundColor: '#DC143C', width: 50, height: 50, alignItems: 'center', justifyContent:'center'}}>
                    <AntDesign name="plus" size={24} color="white" />
                  </TouchableOpacity>
         </View>
         <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end',  right: 300, elevation: 5,flexDirection: 'row', paddingLeft: 400, paddingTop: 10}}>
                  <TouchableOpacity onPress={MinushandleFeedbackPress} style={{borderRadius: 50, backgroundColor: '#DC143C', width: 50, height: 50, alignItems: 'center', justifyContent:'center'}}>
                    <AntDesign name="minus" size={24} color="white" />
                  </TouchableOpacity>
         </View>
      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Search by rating:</Text>
        <TextInput
          style={styles.filterInput}
          value={ratingFilter}
          onChangeText={(text) => setRatingFilter(text)}
          keyboardType="numeric"
          placeholderTextColor="#777"
        />
      </View>
      {filteredFeedbacks.map((feedback, index) => (
        <TouchableOpacity>
            <View >
                <View key={index} style={styles.feedback}>
                <View style={styles.client}>
                    <AntDesign name="user" size={24} color="#BBB" />
                    <Text style={styles.clientName}>
                    {feedback.ClientFirstName} {feedback.ClientLastName}
                    </Text>
                </View>
                <View style={styles.feedbackText}>
                    <Text style={{ color: '#CCC' }}>{feedback.feedback}</Text>
                </View>
                <View style={styles.rating}>
                    <AntDesign name="star" size={24} color="#FFC107" />
                    <Text
                    style={[
                        styles.ratingText,
                        { backgroundColor: getColor(feedback.rating), color: '#FFF' }
                    ]}
                    >
                    {feedback.rating}
                    </Text>
                </View>
                </View>
            </View>
        </TouchableOpacity>
      ))}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: '#1c1c1c',
    paddingTop: 50
  },
    filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    },
    filterLabel: {
    flex: 1,
    color: '#FFF',
    fontWeight: 'bold',
    },
    filterInput: {
    backgroundColor: '#444',
    borderRadius: 8,
    padding: 8,
    width: 50,
    color: '#FFF',
    textAlign: 'center',
    marginLeft: 8,
    },
    feedback: {
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#282828'
    },
    client: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    },
    clientName: {
    marginLeft: 8,
    color: '#FFF',
    fontWeight: 'bold',
    },
    feedbackText: {
    marginBottom: 8,
    },
    rating: {
    flexDirection: 'row',
    alignItems: 'center',
    },
    ratingText: {
    borderRadius: 4,
    padding: 4,
    marginLeft: 8,
    fontWeight: 'bold',
    },
    });
    
    export default Feedback;
    
    
    
    
    
    
