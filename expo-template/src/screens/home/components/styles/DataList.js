import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  dataCard: {
    height: 200,
    width: 175,
    marginLeft: 2,
    marginRight: 2,
    backgroundColor: '$greenColor',
  },
  title: {
    color: '$whiteColor',
    fontSize: 25,
    fontFamily: 'opnsen',
  },
  titleContainer: {
    flex: 0.2,
    paddingHorizontal: '2.5%',
    paddingVertical: '2.5%',
  },
  contentContainer: {
    flex: 1,

  },
  dataCartTopContainer: {
    flex: 1,
    position: 'relative',
  },
  dataCardBottonContainer: {
    flex: 0.4,
    backgroundColor: '$whiteColor',
    justifyContent: 'center',
    paddingHorizontal: '2.5%',
  },
  dataCartTitle: {
    position: 'absolute',
    color: '$whiteColor',
    top: '2%',
    left: '2.5%',
    fontFamily: 'opnsenBold',
  },
  dataCardMetaName: {
    fontSize: 15,
    fontFamily: 'opnsen',
  },
  dataCardMetaDate: {
    fontSize: 13,
    fontFamily: 'opnsenLight',
  },

});

export default styles;
