import { StyleSheet, Text, View, Button, Image} from 'react-native';
import Card from '../images/dos-carte.png';
import Card2 from '../images/as-coeur.png';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.logo_title}>
            <Image style={styles.card} source={Card2} />
            <Image style={styles.Card_back1} source={Card} />
            <Image style={styles.Card_back2} source={Card} />
            <Image style={styles.Card_back3} source={Card} />
            <Text style={styles.title}>Street Bataille</Text>
        </View>
      <Button
        title="Play"
        onPress={() => {navigation.navigate("game")}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: "100%",
    backgroundColor: '#000',
  },

  logo_title: {
    justifyContent: 'center',
    height: "60%",
  },
  
  title: {
    position: 'absolute',
    top: "45%",
    left: "25%",
    color: "#FFF",
    textShadowColor: 'black', 
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 10,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  Card_back1: {
    position: 'absolute',
    top: '30%',
    left: '45%',
    transform: [{ rotate: '25deg'}, {scale: 2}]
  },

  Card_back2: {
    position: 'absolute',
    top: '32%',
    left: '47%',
    transform: [{ rotate: '25deg'}, {scale: 2}]
  },

  Card_back3: {
    position: 'absolute',
    top: '34%',
    left: '49%',
    transform: [{ rotate: '25deg'}, {scale: 2}]
  },

  card: {
    position: 'absolute',
    top: '30%',
    left: '25%',
    transform: [{ rotate: '-15deg'}, {scale: 2}]
  }
});
