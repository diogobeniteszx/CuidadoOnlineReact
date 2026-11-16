import { StyleSheet, Text, View } from "react-native";
import { AppHeader } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";
import { LessonCard } from "@/components/LessonCard";
import { Screen } from "@/components/Screen";
import { useApp } from "@/context/AppContext";
import { lessons } from "@/data/content";
import { colors } from "@/theme";

export default function LearnScreen() {
  const { completedLessons } = useApp();
  return (
    <View style={styles.page}>
      <Screen>
        <AppHeader />
        <Text style={styles.kicker}>APRENDA NO SEU RITMO</Text>
        <Text style={styles.title}>Escolha um tema</Text>
        <Text style={styles.description}>
          Leituras rápidas e diretas para situações do dia a dia.
        </Text>
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            completed={completedLessons.includes(lesson.id)}
          />
        ))}
      </Screen>
      <BottomNav />
    </View>
  );
}
const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.background },
  kicker: {
    color: colors.primary,
    fontSize: 11,
    letterSpacing: 1.7,
    fontWeight: "900",
  },
  title: { color: colors.ink, fontSize: 30, fontWeight: "900", marginTop: 8 },
  description: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
    marginBottom: 22,
  },
});
