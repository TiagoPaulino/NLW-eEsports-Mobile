import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header:{
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal:32,
    marginTop: 28,
    justifyContent: 'space-between'
  },
  logo:{
    width:72,
    height: 40
  },
  right:{
    width:20,
    height:20
  }, 
  cover:{
    width: "90%",
    height: 200,
    borderRadius: 8,
    marginTop: 32,
    marginHorizontal: 20
  },
  containerList:{
    width:"100%"
  },
  contentList:{
    paddingLeft: 32,
    paddingRight: 64,
    alignItems: "flex-start"
  },
  emptyListText:{
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  }
});