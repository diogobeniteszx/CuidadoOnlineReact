import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { AppButton } from "@/components/AppButton";
import { AppHeader } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";
import { Screen } from "@/components/Screen";
import { useApp } from "@/context/AppContext";
import { lessons } from "@/data/content";
import { colors } from "@/theme";

export default function HomeScreen() {
  const { userName, completedLessons, quizScore } = useApp();
  const percent = Math.round((completedLessons.length / lessons.length) * 100);
  return (
    <View style={styles.page}>
      <Screen>
        <AppHeader />
        <Text style={styles.kicker}>UM PASSO DE CADA VEZ</Text>
        <Text style={styles.title}>Olá, {userName}!</Text>
        <Text style={styles.description}>
          Vamos aprender a reconhecer golpes?
        </Text>
        <View style={styles.hero}>
          <View style={styles.heroCopy}>
            <Text style={styles.badge}>CONHECIMENTO É PROTEÇÃO</Text>
            <Text style={styles.heroTitle}>Mais confiança em cada clique.</Text>
            <Text style={styles.heroText}>
              Reconheça os sinais antes de compartilhar dados ou enviar
              dinheiro.
            </Text>
          </View>
          <View style={styles.shield}>
            <Ionicons name="shield-checkmark" size={58} color="#FFFFFF" />
          </View>
          <AppButton
            title="Começar a aprender →"
            variant="secondary"
            onPress={() => router.push("/aprender")}
            style={styles.heroButton}
          />
        </View>
        <View style={styles.stats}>
          <View>
            <Text style={styles.statNumber}>
              {completedLessons.length}{" "}
              <Text style={styles.statTotal}>/ {lessons.length}</Text>
            </Text>
            <Text style={styles.statLabel}>temas concluídos</Text>
          </View>
          <View>
            <Text style={styles.statNumber}>{percent}%</Text>
            <Text style={styles.statLabel}>da sua jornada</Text>
          </View>
          <View>
            <Text style={styles.statNumber}>{quizScore}</Text>
            <Text style={styles.statLabel}>acertos na prática</Text>
          </View>
        </View>
        <View style={styles.tip}>
          <Ionicons name="heart-outline" size={23} color={colors.primary} />
          <View style={styles.tipCopy}>
            <Text style={styles.tipTitle}>Na dúvida, pare e confira.</Text>
            <Text style={styles.tipText}>
              Você não precisa decidir com pressa.
            </Text>
          </View>
        </View>
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
    marginTop: 8,
    marginBottom: 22,
  },
  hero: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 24,
    overflow: "hidden",
  },
  heroCopy: { maxWidth: "82%" },
  badge: {
    alignSelf: "flex-start",
    color: "#E1EEFF",
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 0.7,
  },
  heroTitle: {
    color: "#FFFFFF",
    fontSize: 27,
    fontWeight: "900",
    lineHeight: 33,
    marginTop: 17,
  },
  heroText: { color: "#DFEBFF", lineHeight: 22, marginTop: 10 },
  shield: { position: "absolute", right: -12, top: 70, opacity: 0.22 },
  heroButton: { marginTop: 22, alignSelf: "stretch" },
  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 14,
    padding: 18,
    marginTop: 18,
  },
  statNumber: { color: colors.ink, fontSize: 21, fontWeight: "900" },
  statTotal: { color: colors.muted, fontSize: 14 },
  statLabel: { color: colors.muted, fontSize: 11, marginTop: 3, maxWidth: 88 },
  tip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: colors.pale,
    borderRadius: 14,
    padding: 18,
    marginTop: 18,
  },
  tipCopy: { flex: 1 },
  tipTitle: { color: colors.ink, fontWeight: "800" },
  tipText: { color: colors.muted, fontSize: 13, marginTop: 4 },
});
