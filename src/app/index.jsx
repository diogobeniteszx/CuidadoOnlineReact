import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppButton } from "@/components/AppButton";
import { Brand } from "@/components/Brand";
import { Screen } from "@/components/Screen";
import { TextField } from "@/components/TextField";
import { useApp } from "@/context/AppContext";
import { colors } from "@/theme";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { setUserName } = useApp();
  function login() {
    const next = {};
    if (!email.includes("@")) next.email = "Digite um e-mail válido.";
    if (password.length < 4)
      next.password = "A senha precisa ter pelo menos 4 caracteres.";
    setErrors(next);
    if (!Object.keys(next).length) {
      setUserName(email.split("@")[0]);
      router.replace("/inicio");
    }
  }
  return (
    <Screen contentStyle={styles.screen}>
      <View style={styles.brand}>
        <Brand />
      </View>
      <View style={styles.welcome}>
        <Text style={styles.kicker}>BEM-VINDO DE VOLTA</Text>
        <Text style={styles.title}>Entre para continuar</Text>
        <Text style={styles.description}>
          Aprenda a reconhecer golpes e navegue com mais segurança.
        </Text>
      </View>
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
        placeholder="Digite sua senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        error={errors.password}
      />
      <AppButton title="Entrar" onPress={login} />
      <AppButton
        title="Continuar como visitante"
        variant="secondary"
        onPress={() => {
          setUserName("Visitante");
          router.replace("/inicio");
        }}
        style={styles.gap}
      />
      <View style={styles.switch}>
        <Text style={styles.muted}>Ainda não tem uma conta?</Text>
        <TouchableOpacity onPress={() => router.push("/cadastro")}>
          <Text style={styles.link}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: { justifyContent: "center", backgroundColor: colors.surface },
  brand: { marginBottom: 48 },
  welcome: { marginBottom: 28 },
  kicker: {
    color: colors.primary,
    fontSize: 11,
    letterSpacing: 1.7,
    fontWeight: "900",
    marginBottom: 10,
  },
  title: {
    color: colors.ink,
    fontSize: 31,
    fontWeight: "900",
    letterSpacing: -1,
  },
  description: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 24,
    marginTop: 10,
  },
  gap: { marginTop: 12 },
  switch: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 7,
    marginTop: 22,
  },
  muted: { color: colors.muted },
  link: { color: colors.primary, fontWeight: "800" },
});
