import { StyleSheet } from "react-native-web";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  img:{
    width: 150,
    height: 150,
    marginBottom: '2rem'
  },
  titulo: {
    fontSize: 30,
    color:'white',
    marginBottom:'2rem'
  },
  forms:{
    marginTop: '2rem',
    width: 250
  },
  inputs:{
    backgroundColor:'white',
    paddingHorizontal:'1rem',
    height: 40,
    marginBottom:'2rem'
  },
  msg:{
    color:'#51B2FF',
    textDecoration: 'none'
  },
  link:{
    marginTop:'1rem',
  }
});
export default styles;