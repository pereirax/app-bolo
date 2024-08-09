import { Text, View, Image, Pressable, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#703B10'
      }}
    >

      <Text
        style={{ fontWeight: 'bold', marginBottom: 20, marginTop: 20, color: '#fff', fontSize: 20 }}
      >
       
      </Text>
      


      <Image
        style={{
          width: 300,
          height: 300,
          borderRadius: 100,
        }}
        source={require('../assets/images/img01.png')}
      />

      <Text
        style={{ fontWeight: 'bold', marginBottom: 20, marginTop: 20, color: '#fff', fontSize: 20 }}
      >{''}</Text>
      
      <Link href='/products' style={styles.button} asChild>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Acesse jáá
        </Text>
      </Pressable>
      </Link>
      
    </View>
  );
}

const styles = StyleSheet.create({

  button: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 50,
    backgroundColor: '#F2D8C2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#010101',
    fontWeight: 'bold',
  },
});

