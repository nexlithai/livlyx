import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');
const LOGO_URL = 'https://i.ibb.co/B7s8ckB/12348.png';

export default function App() {
  // --- NAVIGATION STATE ---
  const [activeTab, setActiveTab] = useState('home');
  const [currentScreen, setCurrentScreen] = useState('Dashboard');

  // --- DASHBOARD DATA STATES ---
  const [xp, setXp] = useState(650);
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Morning Mobility & Cardio', done: true },
    { id: '2', title: 'Complete 2 Deep Work Cycles', done: false },
    { id: '3', title: 'Read 15 Pages of Non-Fiction', done: false },
  ]);
  const [habits, setHabits] = useState([
    { id: '1', name: 'Water', icon: '💧', completed: true },
    { id: '2', name: 'Sleep', icon: '🌙', completed: true },
    { id: '3', name: 'Workout', icon: '🏋️', completed: false },
    { id: '4', name: 'Study', icon: '📚', completed: false },
    { id: '5', name: 'Meditation', icon: '🧘', completed: false },
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const toggleHabit = (id) => {
    setHabits(
      habits.map((h) => (h.id === id ? { ...h, completed: !h.completed } : h))
    );
  };

  // --- PLACEHOLDER NAVIGATION SCREEN ---
  if (currentScreen !== 'Dashboard') {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#08090C" />
        <View style={styles.placeholderContainer}>
          <Text style={styles.placeholderTitle}>{currentScreen}</Text>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => setCurrentScreen('Dashboard')}
          >
            <Text style={styles.backBtnText}>← Back to Dashboard</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#08090C" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* 1. PREMIUM HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setCurrentScreen('Logo Details Screen')}>
            <Image source={{ uri: LOGO_URL }} style={styles.logo} resizeMode="contain" />
          </TouchableOpacity>

          <View style={styles.headerRight}>
            <TouchableOpacity
              style={styles.streakBadge}
              onPress={() => setCurrentScreen('Streak Stats Screen')}
            >
              <Text style={{ fontSize: 13 }}>🔥</Text>
              <Text style={styles.streakText}>14d</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => setCurrentScreen('Notifications Screen')}
            >
              <Text style={{ fontSize: 14 }}>🔔</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.avatarButton}
              onPress={() => setCurrentScreen('Profile Screen')}
            >
              <Text style={{ fontSize: 14 }}>👤</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 2. WELCOME CARD */}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setCurrentScreen('Life Score Breakdown')}
        >
          <View style={styles.welcomeCard}>
            <View style={styles.welcomeTop}>
              <View>
                <Text style={styles.greetingText}>Good Day 👋</Text>
                <Text style={styles.userNameText}>Anand</Text>
              </View>
              <View style={styles.scoreBadge}>
                <Text style={styles.scoreLabel}>LIFE SCORE</Text>
                <Text style={styles.scoreValue}>86</Text>
              </View>
            </View>

            <View style={styles.levelRow}>
              <View style={styles.levelInfo}>
                <Text style={{ fontSize: 12 }}>🎖️</Text>
                <Text style={styles.levelText}>Level 8 Warrior</Text>
              </View>
              <Text style={styles.xpText}>{xp} / 1000 XP</Text>
            </View>

            <View style={styles.progressBarTrack}>
              <View style={[styles.progressBarFill, { width: `${(xp / 1000) * 100}%` }]} />
            </View>
          </View>
        </TouchableOpacity>

        {/* 3. DAILY FOCUS CARD */}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setCurrentScreen('Focus Session Screen')}
        >
          <View style={styles.focusCard}>
            <View style={styles.focusHeader}>
              <Text style={styles.cardHeaderTitle}>DAILY FOCUS MISSION</Text>
              <Text style={{ fontSize: 14 }}>⚡</Text>
            </View>
            <Text style={styles.focusMissionText}>
              Complete NDA Practice Test & 30m Mobility Circuit
            </Text>
            <View style={styles.focusProgressRow}>
              <Text style={styles.focusSubText}>Progress: 65%</Text>
              <TouchableOpacity
                style={styles.continueBtn}
                onPress={() => setCurrentScreen('Focus Session Screen')}
              >
                <Text style={styles.continueBtnText}>Continue →</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        {/* 4. SEVEN PILLARS GRID */}
        <Text style={styles.sectionTitle}>SEVEN PILLARS</Text>
        <View style={styles.pillarsGrid}>
          {[
            { id: 'Body', icon: '💪', color: '#10B981', pct: 82 },
            { id: 'Mind', icon: '🧠', color: '#818CF8', pct: 88 },
            { id: 'Productivity', icon: '⚡', color: '#F59E0B', pct: 75 },
            { id: 'Wealth', icon: '💰', color: '#34D399', pct: 90 },
            { id: 'Spirit', icon: '🌺', color: '#F472B6', pct: 84 },
            { id: 'Custom 1', icon: '➕', color: '#A855F7', pct: 60 },
            { id: 'Custom 2', icon: '➕', color: '#EC4899', pct: 45 },
          ].map((pillar) => (
            <TouchableOpacity
              key={pillar.id}
              style={styles.pillarCard}
              onPress={() => setCurrentScreen(`${pillar.id} Pillar Detail`)}
            >
              <View style={styles.pillarHeader}>
                <Text style={{ fontSize: 18 }}>{pillar.icon}</Text>
                <Text style={[styles.pillarPct, { color: pillar.color }]}>
                  {pillar.pct}%
                </Text>
              </View>
              <Text style={styles.pillarTitle}>{pillar.id}</Text>
              <View style={styles.pillarTrack}>
                <View
                  style={[
                    styles.pillarFill,
                    { width: `${pillar.pct}%`, backgroundColor: pillar.color },
                  ]}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* 5. TODAY'S TASKS */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>TODAY'S TASKS</Text>
          <TouchableOpacity
            style={styles.addTaskBtn}
            onPress={() => setCurrentScreen('Add Task Screen')}
          >
            <Text style={styles.addTaskBtnText}>+ Add Task</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.glassContainer}>
          {tasks.map((task) => (
            <TouchableOpacity
              key={task.id}
              style={styles.taskRow}
              onPress={() => toggleTask(task.id)}
            >
              <View style={[styles.checkbox, task.done && styles.checkboxActive]}>
                {task.done && <Text style={{ color: '#000', fontSize: 10, fontWeight: 'bold' }}>✓</Text>}
              </View>
              <Text style={[styles.taskText, task.done && styles.taskTextDone]}>
                {task.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 6. DAILY HABITS */}
        <Text style={styles.sectionTitle}>DAILY HABITS</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.habitsScroll}>
          {habits.map((habit) => (
            <TouchableOpacity
              key={habit.id}
              style={[styles.habitCard, habit.completed && styles.habitCardCompleted]}
              onPress={() => toggleHabit(habit.id)}
            >
              <Text style={{ fontSize: 18 }}>{habit.icon}</Text>
              <Text style={[styles.habitTitle, habit.completed && styles.habitTitleCompleted]}>
                {habit.name}
              </Text>
              <View style={[styles.habitCheckBadge, habit.completed && styles.habitCheckBadgeActive]}>
                <Text style={{ fontSize: 9, color: habit.completed ? '#000' : '#64748B', fontWeight: 'bold' }}>
                  {habit.completed ? '✓' : '+'}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* 7. WEEKLY PROGRESS */}
        <TouchableOpacity activeOpacity={0.9} onPress={() => setCurrentScreen('Weekly Analytics')}>
          <View style={styles.chartCard}>
            <View style={styles.chartHeader}>
              <Text style={styles.cardHeaderTitle}>WEEKLY PROGRESS</Text>
              <Text style={{ fontSize: 12, color: '#10B981', fontWeight: 'bold' }}>📈 +8.2%</Text>
            </View>
            <View style={styles.barChartContainer}>
              {[
                { day: 'M', h: '60%' },
                { day: 'T', h: '85%' },
                { day: 'W', h: '40%' },
                { day: 'T', h: '95%' },
                { day: 'F', h: '70%' },
                { day: 'S', h: '90%' },
                { day: 'S', h: '50%' },
              ].map((item, index) => (
                <View key={index} style={styles.barCol}>
                  <View style={styles.barTrack}>
                    <View style={[styles.barFill, { height: item.h }]} />
                  </View>
                  <Text style={styles.barLabel}>{item.day}</Text>
                </View>
              ))}
            </View>
          </View>
        </TouchableOpacity>

        {/* 8. MONTHLY PROGRESS */}
        <TouchableOpacity activeOpacity={0.9} onPress={() => setCurrentScreen('Monthly Analytics')}>
          <View style={styles.chartCard}>
            <View style={styles.chartHeader}>
              <Text style={styles.cardHeaderTitle}>MONTHLY TRENDS</Text>
              <Text style={styles.chartDelta}>+12.4%</Text>
            </View>
            <View style={styles.lineChartMock}>
              <View style={styles.lineGrid} />
              <View style={styles.mockTrendLine} />
            </View>
          </View>
        </TouchableOpacity>

        {/* 9. YEARLY PROGRESS */}
        <TouchableOpacity activeOpacity={0.9} onPress={() => setCurrentScreen('Yearly Analytics')}>
          <View style={styles.glassContainer}>
            <Text style={styles.cardHeaderTitle}>YEARLY OVERVIEW</Text>
            <View style={styles.yearlyStatsRow}>
              <View style={styles.yearlyStat}>
                <Text style={styles.statNumber}>1,240</Text>
                <Text style={styles.statLabel}>Hours Focused</Text>
              </View>
              <View style={styles.yearlyStat}>
                <Text style={styles.statNumber}>88%</Text>
                <Text style={styles.statLabel}>Habit Rate</Text>
              </View>
              <View style={styles.yearlyStat}>
                <Text style={styles.statNumber}>312</Text>
                <Text style={styles.statLabel}>Days Active</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* 10. AI COACH PREVIEW */}
        <TouchableOpacity activeOpacity={0.9} onPress={() => setCurrentScreen('AI Coach Screen')}>
          <View style={styles.coachCard}>
            <View style={styles.coachHeader}>
              <Text style={{ fontSize: 16 }}>🤖</Text>
              <Text style={styles.coachTitle}>AI COACH INSIGHT</Text>
            </View>
            <Text style={styles.coachAdvice}>
              "Your focus peak occurs at 10 AM. Schedule your toughest Study modules in that window to double retention."
            </Text>
            <TouchableOpacity
              style={styles.askCoachBtn}
              onPress={() => setCurrentScreen('AI Coach Screen')}
            >
              <Text style={styles.askCoachBtnText}>Ask Coach →</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        {/* 11. COMMUNITY PREVIEW */}
        <View style={styles.glassContainer}>
          <View style={styles.chartHeader}>
            <Text style={styles.cardHeaderTitle}>COMMUNITY HIGHLIGHTS</Text>
            <Text style={{ fontSize: 14 }}>👥</Text>
          </View>

          <TouchableOpacity
            style={styles.postPreview}
            onPress={() => setCurrentScreen('Community Feed')}
          >
            <Text style={styles.postUser}>Vikram S. • Warrior</Text>
            <Text style={styles.postText}>
              Hit a 30-day Meditation streak! Peak mental clarity unlocked.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.postPreview}
            onPress={() => setCurrentScreen('Community Feed')}
          >
            <Text style={styles.postUser}>Rohan M. • Novice</Text>
            <Text style={styles.postText}>
              Completed 4 full Pomodoro sessions before noon.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.openCommunityBtn}
            onPress={() => setCurrentScreen('Community Feed')}
          >
            <Text style={styles.openCommunityText}>Open Community Feed →</Text>
          </TouchableOpacity>
        </View>

        {/* 12. DAILY QUOTE CARD */}
        <View style={styles.quoteCard}>
          <Text style={styles.quoteBody}>
            "We are what we repeatedly do. Excellence, then, is not an act, but a habit."
          </Text>
          <Text style={styles.quoteAuthor}>— Aristotle</Text>
        </View>

        <View style={{ height: 70 }} />
      </ScrollView>

      {/* 13. BOTTOM NAVIGATION */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => {
            setActiveTab('home');
            setCurrentScreen('Dashboard');
          }}
        >
          <Text style={{ fontSize: 18, opacity: activeTab === 'home' ? 1 : 0.4 }}>🏠</Text>
          <Text style={[styles.tabLabel, activeTab === 'home' && styles.tabLabelActive]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => {
            setActiveTab('community');
            setCurrentScreen('Community Screen');
          }}
        >
          <Text style={{ fontSize: 18, opacity: activeTab === 'community' ? 1 : 0.4 }}>👥</Text>
          <Text style={[styles.tabLabel, activeTab === 'community' && styles.tabLabelActive]}>Community</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => {
            setActiveTab('coach');
            setCurrentScreen('AI Coach Screen');
          }}
        >
          <Text style={{ fontSize: 18, opacity: activeTab === 'coach' ? 1 : 0.4 }}>🧠</Text>
          <Text style={[styles.tabLabel, activeTab === 'coach' && styles.tabLabelActive]}>Coach</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => {
            setActiveTab('clock');
            setCurrentScreen('Focus Timer Screen');
          }}
        >
          <Text style={{ fontSize: 18, opacity: activeTab === 'clock' ? 1 : 0.4 }}>⏰</Text>
          <Text style={[styles.tabLabel, activeTab === 'clock' && styles.tabLabelActive]}>Clock</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08090C',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 10,
  },
  logo: {
    width: 38,
    height: 38,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(245, 158, 11, 0.15)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.3)',
  },
  streakText: {
    color: '#F59E0B',
    fontWeight: 'bold',
    fontSize: 11,
    marginLeft: 4,
  },
  iconButton: {
    backgroundColor: '#0F1117',
    padding: 8,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#1E2230',
  },
  avatarButton: {
    backgroundColor: '#0F1117',
    padding: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#6366F1',
  },
  welcomeCard: {
    backgroundColor: '#0F1117',
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: 'rgba(99, 102, 241, 0.35)',
    marginBottom: 16,
  },
  welcomeTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greetingText: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '600',
  },
  userNameText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 2,
  },
  scoreBadge: {
    alignItems: 'flex-end',
  },
  scoreLabel: {
    color: '#64748B',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  scoreValue: {
    color: '#6366F1',
    fontSize: 28,
    fontWeight: '900',
  },
  levelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  levelInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  levelText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 6,
  },
  xpText: {
    color: '#64748B',
    fontSize: 11,
    fontWeight: '600',
  },
  progressBarTrack: {
    height: 6,
    backgroundColor: '#1E2230',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#6366F1',
    borderRadius: 3,
  },
  focusCard: {
    backgroundColor: '#0F1117',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: '#1E2230',
    marginBottom: 20,
  },
  focusHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardHeaderTitle: {
    color: '#64748B',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  focusMissionText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
  },
  focusProgressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  focusSubText: {
    color: '#94A3B8',
    fontSize: 11,
  },
  continueBtn: {
    backgroundColor: '#10B981',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
  continueBtnText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 11,
  },
  sectionTitle: {
    color: '#64748B',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 12,
    marginTop: 6,
  },
  pillarsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  pillarCard: {
    width: (width - 44) / 2,
    backgroundColor: '#0F1117',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#1E2230',
    marginBottom: 12,
  },
  pillarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pillarPct: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  pillarTitle: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 8,
  },
  pillarTrack: {
    height: 4,
    backgroundColor: '#1E2230',
    borderRadius: 2,
    overflow: 'hidden',
  },
  pillarFill: {
    height: '100%',
    borderRadius: 2,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addTaskBtn: {
    backgroundColor: '#6366F1',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  addTaskBtnText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  glassContainer: {
    backgroundColor: '#0F1117',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: '#1E2230',
    marginBottom: 16,
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#64748B',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxActive: {
    backgroundColor: '#10B981',
    borderColor: '#10B981',
  },
  taskText: {
    color: '#FFF',
    fontSize: 13,
  },
  taskTextDone: {
    textDecorationLine: 'line-through',
    color: '#64748B',
  },
  habitsScroll: {
    marginBottom: 20,
  },
  habitCard: {
    backgroundColor: '#0F1117',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#1E2230',
    marginRight: 10,
    width: 90,
    alignItems: 'center',
  },
  habitCardCompleted: {
    borderColor: 'rgba(16, 185, 129, 0.4)',
    backgroundColor: 'rgba(16, 185, 129, 0.05)',
  },
  habitTitle: {
    color: '#94A3B8',
    fontSize: 11,
    fontWeight: '600',
    marginTop: 6,
    marginBottom: 8,
  },
  habitTitleCompleted: {
    color: '#FFF',
  },
  habitCheckBadge: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#1E2230',
    justifyContent: 'center',
    alignItems: 'center',
  },
  habitCheckBadgeActive: {
    backgroundColor: '#10B981',
  },
  chartCard: {
    backgroundColor: '#0F1117',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: '#1E2230',
    marginBottom: 16,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  chartDelta: {
    color: '#10B981',
    fontSize: 11,
    fontWeight: 'bold',
  },
  barChartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 100,
    paddingTop: 10,
  },
  barCol: {
    alignItems: 'center',
    flex: 1,
  },
  barTrack: {
    width: 8,
    height: 80,
    backgroundColor: '#1E2230',
    borderRadius: 4,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  barFill: {
    backgroundColor: '#6366F1',
    borderRadius: 4,
  },
  barLabel: {
    color: '#64748B',
    fontSize: 10,
    marginTop: 6,
  },
  lineChartMock: {
    height: 60,
    justifyContent: 'center',
  },
  lineGrid: {
    height: 1,
    backgroundColor: '#1E2230',
    width: '100%',
  },
  mockTrendLine: {
    height: 2,
    backgroundColor: '#10B981',
    width: '100%',
    position: 'absolute',
    transform: [{ rotate: '-4deg' }],
  },
  yearlyStatsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  yearlyStat: {
    alignItems: 'center',
  },
  statNumber: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#64748B',
    fontSize: 10,
    marginTop: 2,
  },
  coachCard: {
    backgroundColor: '#0F1117',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(99, 102, 241, 0.4)',
    marginBottom: 16,
  },
  coachHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  coachTitle: {
    color: '#818CF8',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginLeft: 6,
  },
  coachAdvice: {
    color: '#FFF',
    fontSize: 12,
    lineHeight: 18,
    fontStyle: 'italic',
    marginBottom: 12,
  },
  askCoachBtn: {
    backgroundColor: '#6366F1',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  askCoachBtnText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
  postPreview: {
    borderBottomWidth: 1,
    borderBottomColor: '#1E2230',
    paddingVertical: 10,
  },
  postUser: {
    color: '#6366F1',
    fontSize: 11,
    fontWeight: 'bold',
  },
  postText: {
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 2,
  },
  openCommunityBtn: {
    alignItems: 'center',
    marginTop: 12,
  },
  openCommunityText: {
    color: '#6366F1',
    fontSize: 11,
    fontWeight: 'bold',
  },
  quoteCard: {
    backgroundColor: '#0F1117',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#1E2230',
    borderLeftWidth: 3,
    borderLeftColor: '#F59E0B',
    marginBottom: 16,
  },
  quoteBody: {
    color: '#94A3B8',
    fontSize: 12,
    fontStyle: 'italic',
    lineHeight: 18,
  },
  quoteAuthor: {
    color: '#64748B',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 6,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#0F1117',
    borderTopWidth: 1,
    borderTopColor: '#1E2230',
    paddingVertical: 8,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabItem: {
    alignItems: 'center',
  },
  tabLabel: {
    color: '#64748B',
    fontSize: 10,
    fontWeight: '600',
    marginTop: 2,
  },
  tabLabelActive: {
    color: '#6366F1',
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  placeholderTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  backBtn: {
    backgroundColor: '#6366F1',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
  },
  backBtnText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
