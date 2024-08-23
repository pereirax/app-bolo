import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';

export default function AboutUs() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://link-para-sua-imagem.com/banner.jpg' }}
        style={styles.bannerImage}
        resizeMode="cover"
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image
          source={{ uri: 'https://link-para-sua-imagem.com/imagem.jpg' }}
          style={styles.headerImage}
          resizeMode="cover"
        />
        <View style={styles.content}>
          <Text style={styles.title}>Bem-vindo à Nossa Confeitaria</Text>
          <Text style={styles.description}>
            Acreditamos que cada doce é uma obra de arte, feita com amor e dedicação. Nosso objetivo é criar experiências únicas e deliciosas para nossos clientes, usando os melhores ingredientes e técnicas tradicionais.
          </Text>
          <Text style={styles.subtitle}>Nossa História</Text>
          <Text style={styles.description}>
            Fundada em [ano], nossa confeitaria começou como um sonho de adoçar o dia a dia das pessoas. Crescemos e evoluímos, mas o compromisso com a qualidade e o sabor permanece.
          </Text>
          <Text style={styles.subtitle}>Nosso Compromisso</Text>
          <Text style={styles.description}>
            Oferecemos produtos frescos e de alta qualidade, feitos à mão com ingredientes selecionados. Cada criação é uma expressão da nossa paixão pela confeitaria.
          </Text>
          <Text style={styles.subtitle}>Venha Nos Visitar</Text>
          <Text style={styles.description}>
            Visite nossa loja e experimente nossas delícias. Estamos aqui para adoçar o seu dia.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2D8C2',
  },
  bannerImage: {
    width: '100%',
    height: 200,
  },
  scrollContent: {
    flexGrow: 1,
  },
  headerImage: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#703B10',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#8b4513',
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    textAlign: 'justify',
  },
});
