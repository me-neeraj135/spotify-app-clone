import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {
  setupPlayer,
  playbackServices,
  addTrackData,
} from '../musicPlayerServices';
import MusicPlayer from './screen/MusicPlayer';

export default function App(): JSX.Element {
  let [isPlayerReady, setIsPlayerReady] = useState(false);

  async function handleSetup() {
    let isSetup = await setupPlayer();
    if (isSetup) {
      await addTrackData();
    }

    setIsPlayerReady(isSetup);
  }

  useEffect(() => {
    handleSetup();
  }, []);

  if (!setIsPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
