import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert, Linking } from 'react-native';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    // Aqui você pode adicionar a lógica para enviar os dados do formulário, como uma requisição HTTP

    Alert.alert('Mensagem enviada!', 'Obrigado por entrar em contato.');
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleWhatsAppPress = () => {
    const phoneNumber = '+5511999999999'; // Substitua pelo número do WhatsApp
    const messageToSend = encodeURIComponent(`Olá, meu nome é ${name}. ${message}`);
    const url = `whatsapp://send?phone=${phoneNumber}&text=${messageToSend}`;

    Linking.openURL(url).catch(() => {
      Alert.alert('Erro', 'Não foi possível abrir o WhatsApp');
    });
  };

  const handleInstagramPress = () => {
    const instagramUrl = 'https://www.instagram.com/seuPerfil'; // Substitua pelo URL do seu perfil do Instagram

    Linking.openURL(instagramUrl).catch(() => {
      Alert.alert('Erro', 'Não foi possível abrir o Instagram');
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contato</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Mensagem"
        value={message}
        onChangeText={setMessage}
        multiline
      />

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={handleWhatsAppPress}>
        <Text style={styles.buttonText}>WhatsApp</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={handleInstagramPress}>
        <Text style={styles.buttonText}>Instagram</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#703B10',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    color: '#F2D8C2',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#F2D8C2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    color: '#010101',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#F2D8C2',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#010101',
    fontWeight: 'bold',
  },
});
