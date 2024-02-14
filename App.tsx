import { StatusBar } from 'expo-status-bar';
import { useEffect, useState, JSX } from 'react';
import { Text, View } from 'react-native';

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const rHex = r.toString(16).padStart(2, '0');
  const gHex = g.toString(16).padStart(2, '0');
  const bHex = b.toString(16).padStart(2, '0');

  const color = `#${rHex}${gHex}${bHex}`;

  return color;
}

export default function App(): JSX.Element {
  const [color, setColor] = useState(getRandomColor());

  useEffect(() => {
    let id = setInterval(() => {
      setColor(getRandomColor());
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <View style={{
      flex: 1,
      backgroundColor: color,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text style={{color: "white"}}>Background | running color { color } Tomiwa and Beccy</Text>
      <StatusBar style="auto" />
    </View>
  );
}
