import React, { useRef, useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Pressable, StyleSheet, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BatSignal from './components/BatSignal';
import { colors, spacing } from './theme';

export default function App() {
  const [on, setOn] = useState(false);
  const [alerta, setAlerta] = useState(false);
  const intensity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    if (on) {
      Animated.parallel([
        Animated.timing(intensity, { toValue: 1, duration: 500, useNativeDriver: true }),
        Animated.spring(scale, { toValue: 1, useNativeDriver: true })
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(intensity, { toValue: 0, duration: 400, useNativeDriver: true }),
        Animated.spring(scale, { toValue: 0.9, useNativeDriver: true })
      ]).start();
    }
  }, [on]);

  useEffect(() => {
    let loop;
    if (alerta && on) {
      loop = Animated.loop(
        Animated.sequence([
          Animated.timing(intensity, { toValue: 0.5, duration: 600, useNativeDriver: true }),
          Animated.timing(intensity, { toValue: 1.0, duration: 600, useNativeDriver: true })
        ])
      );
      loop.start();
    }
    return () => loop && loop.stop();
  }, [alerta, on]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text accessibilityRole="header" style={styles.title}>Bat‑Sinal</Text>
        <Text style={styles.subtitle}>Acione o sinal do Batman</Text>
      </View>

      <View style={styles.stage}>
        <Animated.View
          style={[
            styles.beam,
            { opacity: intensity.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }),
              transform: [{ scale }] }
          ]}
          pointerEvents="none"
        />
        <Animated.View style={{ opacity: intensity, transform: [{ scale }] }}>
          <BatSignal size={240} color={colors.accent} />
        </Animated.View>
      </View>

      <View style={styles.controls}>
        <Pressable
          accessibilityLabel="Alternar Bat-Sinal"
          onPress={() => setOn(v => !v)}
          style={[styles.button, on ? styles.btnOn : styles.btnOff]}
        >
          <Text style={styles.buttonText}>{on ? 'Desligar' : 'Ligar'}</Text>
        </Pressable>

        <Pressable
          accessibilityLabel="Ativar modo alerta"
          onPress={() => setAlerta(v => !v)}
          disabled={!on}
          style={[styles.button, styles.secondary, !on && styles.disabled]}
        >
          <Text style={styles.buttonText}>{alerta ? 'Alerta: ON' : 'Alerta: OFF'}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgTop
  },
  header: {
    paddingHorizontal: spacing(2),
    paddingTop: spacing(2)
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text
  },
  subtitle: {
    marginTop: 4,
    color: colors.muted
  },
  stage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bgBottom
  },
  beam: {
    position: 'absolute',
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: 'rgba(255, 213, 74, 0.25)',
    shadowColor: '#ffd54a',
    shadowOpacity: 0.6,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 0 }
  },
  controls: {
    flexDirection: 'row',
    gap: spacing(1),
    padding: spacing(2),
    justifyContent: 'center'
  },
  button: {
    flex: 1,
    paddingVertical: spacing(1.5),
    alignItems: 'center',
    borderRadius: 12
  },
  btnOn: { backgroundColor: '#2e7d32' },
  btnOff: { backgroundColor: '#1565c0' },
  secondary: { backgroundColor: '#5e35b1' },
  disabled: { opacity: 0.5 },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16
  }
});
