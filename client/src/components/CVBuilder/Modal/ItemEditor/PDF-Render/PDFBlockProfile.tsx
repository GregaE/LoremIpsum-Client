import { View, Text, Svg} from '@react-pdf/renderer';
import { style } from './PDFStyles';
import { ReactComponent as LocationIcon } from './PDFIcons/locationIcon.svg';
export function PDFProfile({ personalDetails }: any) {
  return (
    <View wrap={false}>
      <Text style={style.profileHeader}>
        {personalDetails.first_name + ' ' + personalDetails.last_name}
      </Text>
      <Text style={style.text}>
        <Text style={style.subHeader}>
            <LocationIcon />
          Address:{' '}
        </Text>
        {`${personalDetails.street && personalDetails.street + ','} ${
          personalDetails.city && personalDetails.city
        }${personalDetails.postcode && ' ' + personalDetails.postcode}, ${
          personalDetails.country && personalDetails.country
        }`}
      </Text>
      <Text style={style.text}>
        <Text style={style.subHeader}>Email: </Text>
        {personalDetails.email}
      </Text>
      <Text style={style.text}>
        <Text style={style.subHeader}>Phone: </Text>
        {personalDetails.phone_number}
      </Text>
      <View>
        <Text style={style.header}>Profile </Text>
        <Text style={style.text}>{personalDetails.headline}</Text>
      </View>
    </View>
  );
}
