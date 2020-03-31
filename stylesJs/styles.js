import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'sans-serif'
  },

  title: {
    fontSize: 28,
    color: '#000000',
    textAlign: 'center',
    marginTop: 40,
    opacity: 0.6,
    marginBottom: 20
  },
  input: {
    backgroundColor: '#1211',
    borderRadius: 6,
    fontSize: 20,
    padding: 10,
    margin: 10,
    opacity:0.8
  },
  button: {
    backgroundColor: '#006661',
    padding: 10,
    margin: 20,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff'
  },

  scales: {
    margin: 10,
  },

  scale: {
    backgroundColor: '#f1f1f2',
    margin: 10,
    padding: 20,
    borderRadius: 4
  },

  value: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  classification: {
    color: '#717180'
  }
});

export default styles;