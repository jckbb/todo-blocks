import React, { useEffect, useRef, useState } from "react";
import { Animated, Text, TouchableWithoutFeedback, View } from "react-native";

import { Task, TodoGroup } from "@/app/_machines/taskMachine";
import styles from "./styles";

const GroupItem = ({
  item,
  section: { color },
  onDone,
}: {
  item: Task;
  section: TodoGroup;
  onDone: () => void;
}) => {
  const [animateTo, setAnimateTo] = useState(0);
  return (
    <TouchableWithoutFeedback
      onPressIn={() => setAnimateTo(1)}
      onPressOut={() => setAnimateTo(0)}
      onPress={() => {
        onDone();
      }}
    >
      <View
        style={[
          styles.groupItem,
          color !== undefined && { backgroundColor: color },
        ]}
      >
        <AnimateScaleWrapper animateTo={animateTo}>
          <View style={styles.item}>
            <View style={styles.itemStatus}>
              {item.done && <View style={styles.itemStatusDone} />}
            </View>
            <Text style={styles.taskDescription}>{item.description}</Text>
          </View>
        </AnimateScaleWrapper>
      </View>
    </TouchableWithoutFeedback>
  );
};

interface AnimateScaleProps {
  children: JSX.Element;
  animateTo: number;
}

const AnimateScaleWrapper = ({ children, animateTo }: AnimateScaleProps) => {
  const animateScale = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    animateItem(animateTo);
  }, [animateTo]);

  const scaleInterpolate = animateScale.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.9],
  });

  const aniamtedStyle = {
    transform: [{ scale: scaleInterpolate }],
  };

  const animateItem = (toValue: number) => {
    Animated.spring(animateScale, {
      toValue,
      useNativeDriver: true,
      speed: 12,
    }).start(() => {});
  };

  return <Animated.View style={[aniamtedStyle]}>{children}</Animated.View>;
};

export default GroupItem;
