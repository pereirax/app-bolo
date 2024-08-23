import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#703B10",
          borderBottomWidth: 0, // teste
        },
        headerTintColor: "#fff", // Corrige a cor do texto para #fff
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center", // Centraliza o título na barra de navegação
      }}
    >
      {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
      <Stack.Screen name="index" options={{ title: "" }} />
      <Stack.Screen name="products" options={{ title: "Products" }} />                  
      <Stack.Screen name="About" options={{ title: "About" }} />                  
      <Stack.Screen name="coffeesingle/[id]" options={{ title: 'Cake Mania' }} />
      <Stack.Screen name="flex" options={{ title: "Flex" }} />
    </Stack>
  );
}
