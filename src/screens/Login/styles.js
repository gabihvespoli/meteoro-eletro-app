import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'web' ? '100vh' : '100%',
    backgroundColor: "#412053",
  },
  top: {
    backgroundColor: '#412053',
    alignItems: 'center',
  },
  img: {
    alignSelf: 'center',
    width: 250,
    height: 290,
    margin: 30,
  },
  inputs: {
    marginHorizontal: 30,
    marginTop: 10,
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: '100%',
    margin: 5,
    padding: 15,
    textAlign: 'center',
    borderRadius: 30,
    backgroundColor: '#fff',
    fontSize: 20,
    // backgroundColor: 'rgba(255,255,255,0.3)',
    // placeholderTextColor: '#FFF',
  },
  button: {
    height: 50,
    width: '100%',
    margin: 15,
    alignItems: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    backgroundColor: 'purple',
  },
});

export default styles;