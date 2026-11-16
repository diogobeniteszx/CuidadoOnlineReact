import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "@/theme";

export function TextField({ label, error, secureTextEntry, ...props }) {
  const [hidden, setHidden] = useState(Boolean(secureTextEntry));
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.wrap, error && styles.invalid]}>
        <TextInput
          placeholderTextColor="#8995A7"
          secureTextEntry={secureTextEntry ? hidden : false}
          style={styles.input}
          {...props}
        />
        {secureTextEntry && (
          <TouchableOpacity
            accessibilityLabel={hidden ? "Mostrar senha" : "Ocultar senha"}
            onPress={() => setHidden((value) => !value)}
            style={styles.eye}
          >
            <Ionicons
              name={hidden ? "eye-outline" : "eye-off-outline"}
              size={21}
              color={colors.muted}
            />
          </TouchableOpacity>
        )}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  field: { gap: 8, marginBottom: 16 },
  label: { color: colors.ink, fontSize: 15, fontWeight: "700" },
  wrap: {
    minHeight: 54,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DCE3ED",
    borderRadius: 12,
    backgroundColor: colors.surface,
  },
  invalid: { borderColor: colors.danger },
  input: {
    flex: 1,
    color: colors.ink,
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 14,
  },
  eye: {
    width: 50,
    minHeight: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  error: { color: colors.danger, fontSize: 13 },
});
