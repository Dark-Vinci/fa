import {StatusBar as SBar} from "expo-status-bar";
import {JSX, useEffect, useState} from "react";
import {
    Alert,
    Button,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    // View
    // ImageBackground
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Platform,
    StatusBar,
} from "react-native";

import { useDeviceOrientation } from '@react-native-community/hooks';

function getRandomColor(): string {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const rHex = r.toString(16).padStart(2, "0");
  const gHex = g.toString(16).padStart(2, "0");
  const bHex = b.toString(16).padStart(2, "0");

  return `#${rHex}${gHex}${bHex}`;
}

export default function App(): JSX.Element {
  const [color, setColor] = useState<string>(getRandomColor());

    const dem = useDeviceOrientation();
    console.log({dem});

  useEffect(() => {
    let id = setInterval(() => {
      setColor(getRandomColor());
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <SafeAreaView style={{ ...style.container, backgroundColor: color }}>
      <Text
        style={{ color: "white" }}
        numberOfLines={1}
        onPress={() => console.log("Text clicked")}
      >
        Background | running color {color} Tomiwa and Beccy and melonny
      </Text>
      <TouchableWithoutFeedback
        onPress={() => console.log("ON PRESS, IMAGE TAPPED")}
        onLongPress={() => console.log("PRESSED FOR LONGER DURATION")}
      >
        <Image
          source={{
            uri: "https://picsum.photos/200/300",
            width: 200,
            height: 300,
          }}
          blurRadius={0}
          fadeDuration={1000}
          resizeMode="cover"
        />
      </TouchableWithoutFeedback>

      <TouchableOpacity
        onPress={() => console.log("ON PRESS, IMAGE TAPPED")}
        onLongPress={() => console.log("PRESSED FOR LONGER DURATION")}
      >
        <Image
          source={{
            uri: "https://picsum.photos/200/300",
            width: 200,
            height: 300,
          }}
          blurRadius={0}
          fadeDuration={1000}
          resizeMode="cover"
        />
      </TouchableOpacity>

      <Button
        title="click me"
        color={color}
        onPress={() =>
          // Alert.alert("Question", "Are you normal", [
          //   { text: "yes", onPress: () => console.log("YES WAS CLICKED") },
          //   { text: "no", onPress: () => console.log("NO WAS CLICKED") },
          // ])
          Alert.prompt("Question", "Are you normal", (text) => {
            console.log({ text });
          })
        }
      />

      <TouchableHighlight
        onPress={() => console.log("ON PRESS, IMAGE TAPPED")}
        onLongPress={() => console.log("PRESSED FOR LONGER DURATION")}
      >
        <Image
          source={{
            uri: "https://picsum.photos/200/300",
            width: 200,
            height: 300,
          }}
          blurRadius={0}
          fadeDuration={1000}
          resizeMode="cover"
        />
      </TouchableHighlight>

      <TouchableNativeFeedback
        onPress={() => console.log("ON PRESS, IMAGE TAPPED")}
        onLongPress={() => console.log("PRESSED FOR LONGER DURATION")}
      >
        <Image
          source={{
            uri: "https://picsum.photos/200/300",
            width: 200,
            height: 300,
          }}
          blurRadius={0}
          fadeDuration={1000}
          resizeMode="cover"
        />
      </TouchableNativeFeedback>
      <SBar style="auto" />
    </SafeAreaView>
  );
}

// Dimension.get("screen"|"window")
// orientation| default, portrait, landscape

const style = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
      paddingTop: Platform.OS == "android" ? StatusBar.currentHeight: 0,
  },
});
