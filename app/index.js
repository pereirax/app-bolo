import { Text, View, Image, Pressable, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#703B10'
      }}
    >

      <Image
        style={{
          width: 300,
          height: 300,
          borderRadius: 100,
        }}
        source={require('../assets/images/img01.png')}
      />

      <View style={styles.buttonContainer}>
        <Link href='/products' style={styles.button} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Acesse já</Text>
          </Pressable>
        </Link>

        <Link href='/About' style={styles.button} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Sobre Nós</Text>
          </Pressable>
        </Link>

        <Link href='/About02' style={styles.button} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contato</Text>
          </Pressable>
        </Link>

        <Link href='/flex' style={styles.button} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Linguagem</Text>
          </Pressable>
        </Link>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#F2D8C2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 10,
    width: 200, // Fixed width to ensure buttons are the same size
    marginVertical: 10, // Space between buttons
  },
  buttonText: {
    fontSize: 18,
    color: '#010101',
    fontWeight: 'bold',
  },
});
