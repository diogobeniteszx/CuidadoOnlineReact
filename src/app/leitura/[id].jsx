import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { AppButton } from "@/components/AppButton";
import { AppHeader } from "@/components/AppHeader";
import { Screen } from "@/components/Screen";
import { useApp } from "@/context/AppContext";
import { lessons } from "@/data/content";
import { colors } from "@/theme";

export default function ReadingScreen() {
  const { id } = useLocalSearchParams();
  const lesson = lessons.find((item) => item.id === id);
  const { completedLessons, completeLesson } = useApp();
  if (!lesson)
    return (
      <Screen>
        <AppHeader title="Leitura" back />
        <Text style={styles.title}>Tema não encontrado</Text>
        <AppButton
          title="Voltar aos temas"
          onPress={() => router.replace("/aprender")}
          style={styles.button}
        />
      </Screen>
    );
  const completed = completedLessons.includes(lesson.id);
  function finish() {
    completeLesson(lesson.id);
    router.replace("/aprender");
  }
  return (
    <Screen>
      <AppHeader title="Leitura" back />
      <View style={[styles.icon, { backgroundColor: lesson.background }]}>
        <Ionicons name={lesson.icon} size={34} color={lesson.color} />
      </View>
      <Text style={styles.kicker}>LEITURA RÁPIDA</Text>
      <Text style={styles.title}>{lesson.title}</Text>
      <Text style={styles.intro}>{lesson.intro}</Text>
      <Text style={styles.section}>Como se proteger</Text>
      {lesson.tips.map((tip, index) => (
        <View key={tip} style={styles.tip}>
          <View style={styles.number}>
            <Text style={styles.numberText}>{index + 1}</Text>
          </View>
          <Text style={styles.tipText}>{tip}</Text>
        </View>
      ))}
      <View style={styles.reminder}>
        <Ionicons name="heart" size={21} color={colors.primary} />
        <Text style={styles.reminderText}>
          Na dúvida, pare e procure o canal oficial.
        </Text>
      </View>
      <AppButton
        title={completed ? "Tema já concluído ✓" : "Marcar como concluído"}
        onPress={finish}
        style={styles.button}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  icon: {
    width: 64,
    height: 64,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  kicker: {
    color: colors.primary,
    fontSize: 11,
    letterSpacing: 1.7,
    fontWeight: "900",
  },
  title: { color: colors.ink, fontSize: 30, fontWeight: "900", marginTop: 8 },
  intro: { color: colors.body, fontSize: 16, lineHeight: 26, marginTop: 14 },
  section: {
    color: colors.ink,
    fontSize: 21,
    fontWeight: "900",
    marginTop: 30,
    marginBottom: 16,
  },
  tip: { flexDirection: "row", gap: 13, marginBottom: 16 },
  number: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.pale,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: { color: colors.primary, fontWeight: "900" },
  tipText: { flex: 1, color: colors.body, fontSize: 15, lineHeight: 23 },
  reminder: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: colors.pale,
    padding: 16,
    borderRadius: 14,
    marginTop: 8,
  },
  reminderText: { flex: 1, color: colors.ink, fontWeight: "700" },
  button: { marginTop: 24, marginBottom: 12 },
});
