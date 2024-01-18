import {Track} from 'react-native-track-player';

export const playListData: Track[] = [
  {
    id: 1,
    title: 'closer',
    artist: 'justin',
    album: 'Chainsmokers',
    artwork: 'https://mpasa.org.za/search/closer',
    url: require('./assets/audio/one.mp3'),
  },
  {
    id: 2,
    title: 'Despasito',
    artist: 'Justin',
    album: 'Luis Fonsi & Daddy Yankee',
    artwork: 'https://mpasa.org.za/search/despacito-song',
    url: require('./assets/audio/two.mp3'),
  },
  {
    id: 3,
    title: 'Taki-Taki',
    artist: 'Selena Gomez',
    album: 'DJ Snake',
    artwork: 'https://mpasa.org.za/search/taki-taki-song    ',
    url: require('./assets/audio/three.mp3'),
  },
  {
    id: 4,
    title: 'Levitating',
    artist: 'Dua Lipa',
    album: 'DaBaby',
    artwork: 'https://mpasa.org.za/search/levitating-dua-lipa',
    url: require('./assets/audio/four.mp3'),
  },
  {
    id: 5,
    title: 'Houdini',
    artist: 'Dua Lipa',
    album: 'Houdini',
    artwork: 'https://mpasa.org.za/search/houdini-dua-lipa',
    url: require('./assets/audio/five.mp3'),
  },
];
