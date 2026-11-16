import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppButton } from "@/components/AppButton";
import { AppHeader } from "@/components/AppHeader";
import { Screen } from "@/components/Screen";
import { TextField } from "@/components/TextField";
import { useApp } from "@/context/AppContext";
import { colors } from "@/theme";

const MIN_NAME_CHARACTERS = 5



export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { setUserName } = useApp();
  function register() {
    const next = {};
    if (name.trim().length < MIN_NAME_CHARACTERS) next.name = "Informe seu nome.";
    if (!email.includes("@")) next.email = "Digite um e-mail válido.";
    if (password.length < 4) next.password = "Use pelo menos 4 caracteres.";
    setErrors(next);
    if (!Object.keys(next).length) {
      setUserName(name.trim());
      router.replace("/inicio");
    }
  }
  return (
    <Screen>
      <AppHeader title="Criar conta" back />
      <Text style={styles.title}>Cuide da sua vida digital</Text>
      <Text style={styles.description}>
        Seu progresso ficará apenas na memória do app nesta primeira versão.
      </Text>
      <View style={styles.form}>
        <TextField
          label="Nome"
          placeholder="Como podemos chamar você?"
          value={name}
          onChangeText={setName}
          error={errors.name}
        />
        <TextField
          label="E-mail"
          placeholder="voce@exemplo.com"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          error={errors.email}
        />
        <TextField
          label="Senha"
          placeholder="Crie uma senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          error={errors.password}
        />
        <AppButton title="Criar minha conta" onPress={register} />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  title: {
    color: colors.ink,
    fontSize: 29,
    fontWeight: "900",
    letterSpacing: -1,
  },
  description: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 24,
    marginTop: 10,
  },
  form: { marginTop: 30 },
});
