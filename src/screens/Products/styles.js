import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === "web" ? "100vh" : "100%",
    backgroundColor: "#412053",
  },
  imgBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: "100%",
    backgroundColor:'rgba(255,255,255,0.2)',
  },
  image: {
    resizeMode: 'contain',
  }
});

export default styles;