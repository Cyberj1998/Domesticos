import React, { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, View, ViewStyle } from "react-native";

interface MyLoaderProps {
  size?: number;
  color?: string;
  speed?: number;
  containerStyle?: ViewStyle;
}

const MyLoader: React.FC<MyLoaderProps> = ({
  size = 60,
  color = "#48d769",
  speed = 2000,
  containerStyle,
}) => {
  const spinValue = useRef(new Animated.Value(0)).current;
  const pulseValue = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    // Animation 1 - Constant Spin
    const spin = Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: speed,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );

    // Animation 2 - Pulsing Opacity (Glow effect)
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseValue, {
          toValue: 1,
          duration: speed / 2,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(pulseValue, {
          toValue: 0.4,
          duration: speed / 2,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ]),
    );

    spin.start();
    pulse.start();

    return () => {
      spin.stop();
      pulse.stop();
    };
  }, [spinValue, pulseValue, speed]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const reverseSpin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["360deg", "0deg"],
  });

  return (
    <View style={[styles.wrapper, containerStyle]}>
      {/* Outer Pulsing Glow */}
      <Animated.View
        style={[
          styles.outerRing,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            borderColor: color,
            opacity: pulseValue,
            borderWidth: 1,
          },
        ]}
      />

      {/* Primary Spinning Ring */}
      <Animated.View
        style={[
          styles.mainRing,
          {
            width: size * 0.7,
            height: size * 0.7,
            borderRadius: (size * 0.7) / 2,
            borderWidth: size / 12,
            borderColor: color,
            borderTopColor: "transparent",
            borderLeftColor: "transparent",
            transform: [{ rotate: spin }],
          },
        ]}
      />

      {/* Inner Reverse Spinning Ring (Sophistication Layer) */}
      <Animated.View
        style={[
          styles.innerRing,
          {
            width: size * 0.4,
            height: size * 0.4,
            borderRadius: (size * 0.4) / 2,
            borderWidth: size / 20,
            borderColor: color,
            borderBottomColor: "transparent",
            borderRightColor: "transparent",
            transform: [{ rotate: reverseSpin }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  outerRing: {
    position: "absolute",
  },
  mainRing: {
    position: "absolute",
  },
  innerRing: {
    position: "absolute",
  },
});

export default MyLoader;
