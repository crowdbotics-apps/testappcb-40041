import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
const recipes = [{
  id: '1',
  title: 'Spaghetti Carbonara',
  instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.',
  prepTime: '20 mins',
  cookTime: '30 mins',
  rating: '4.5',
  image: require('../assets/spaghetti.jpg')
}, {
  id: '2',
  title: 'Chicken Alfredo',
  instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.',
  prepTime: '15 mins',
  cookTime: '25 mins',
  rating: '4.2',
  image: require('../assets/chicken_alfredo.jpg')
}, {
  id: '3',
  title: 'Beef Stroganoff',
  instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.',
  prepTime: '25 mins',
  cookTime: '35 mins',
  rating: '4.8',
  image: require('../assets/beef_stroganoff.jpg')
}];

const RecipeListingScreen = () => {
  const renderItem = ({
    item
  }) => <View style={styles.recipeContainer}>
      <Image source={{
      uri: "https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1"
    }} style={styles.recipeImage} />
      <View style={styles.recipeDetails}>
        <Text style={styles.recipeTitle}>{item.title}</Text>
        <Text style={styles.recipeTime}>Prep Time: {item.prepTime} | Cook Time: {item.cookTime}</Text>
        <Text style={styles.recipeInstructions}>{item.instructions}</Text>
        <Text style={styles.recipeRating}>Rating: {item.rating}</Text>
      </View>
    </View>;

  return <View style={styles.container}>
      <FlatList data={recipes} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  recipeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  recipeImage: {
    width: 360,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
    flexDirection: "row",
    flex: 1,
    alignItems: "end"
  },
  recipeDetails: {
    flex: 1
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  recipeTime: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5
  },
  recipeInstructions: {
    fontSize: 14,
    marginBottom: 5
  },
  recipeRating: {
    fontSize: 14,
    fontWeight: 'bold'
  }
});
export default RecipeListingScreen;