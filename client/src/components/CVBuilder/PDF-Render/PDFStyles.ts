import { StyleSheet, Font } from '@react-pdf/renderer';
Font.register({
  family: 'Roboto',
  fonts: [
    {
      src: `https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.11.0/font/roboto/Roboto-Regular.ttf`,
    },
    {
      src: `https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.11.0/font/roboto/Roboto-Bold.ttf`,
      fontWeight: 'bold',
    },
    {
      src: `https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.11.0/font/roboto/Roboto-Medium.ttf`,
      fontWeight: 'medium',
    },
    {
      src: `https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.11.0/font/roboto/Roboto-Light.ttf`,
      fontWeight: 'light',
    },
  ],
});
export const style = StyleSheet.create({
  header: {
    fontSize: '14px',
    fontWeight: 'bold',
    textDecoration: 'underline',
    marginBottom: '5px',
  },
  profileHeader: { fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' },
  subHeader: {
    fontSize: '11px',
    fontWeight: 'medium',
  },
  sub: {
    marginTop: '5px',
    width: '65%',
  },
  text: {
    fontSize: '11px',
    fontWeight: 'light',
    marginBottom: '5px',
  },
  textLargeCtn: {
    fontSize: '11px',
    fontWeight: 'light',
  },
  sectionCtn: {
    marginBottom: '5px',
  },
  largeCtn: { width: '25%', marginRight: '10px', marginTop: '5px' },
  img: {width: '5%', height: '5%'}
});

export const pageStyle = StyleSheet.create({
  page: {
    fontFamily: 'Roboto',
    padding: 25,
    alignItems: 'flex-start',
    flexDirection: 'column',
    backgroundColor: '#FFF',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    textAlign: 'left',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: '15px',
  },
});
