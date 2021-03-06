import {StyleSheet} from 'react-native';
import colors from '../../../colors';

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  modalView: {
    minHeight: 200,
    width: '100%',
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  title: {
    fontSize: 17,
  },
  body: {
    minHeight: 150,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#e3e3e3',
    marginTop: 10,
    paddingVertical: 10,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 50,
    backgroundColor: colors.grey,
  },
});
