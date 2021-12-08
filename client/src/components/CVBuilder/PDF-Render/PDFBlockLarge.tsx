import { View, Text } from '@react-pdf/renderer';
import {
  Education,
  WorkExperience,
} from '../../../interfaces/CategoriesInterface';
import { style } from './PDFStyles';

export function PDFBLockLarge({
  category,
  dataList,
}: {
  category: string;
  dataList: (WorkExperience & Education)[]; //keep it as any for now and then refactor
}) {
  const data =
    dataList &&
    dataList.map(data => {
      return (
        <li
          key={data.id}
          style={{ flexDirection: 'row', marginBottom: '10px' }}
        >
          <View style={style.largeCtn}>
            <Text style={style.textLargeCtn}>
              {data.beginMonth && data.beginMonth + ', '}
              {data.beginYear && data.beginYear + ' - '}
              {data.endMonth ? data.endMonth + ',' : 'present'} {data.endYear}
            </Text>
            <Text style={style.textLargeCtn}>
              {data.country}, {data.city}
            </Text>
          </View>
          <View style={style.sub}>
            <Text style={style.subHeader}>
              {category === 'Education' ? data.degree : data.job_title},{' '}
              {category === 'Education' ? data.school : data.company}
            </Text>
            <Text style={style.textLargeCtn}>{data.description}</Text>
          </View>
        </li>
      );
    });
  return (
    <View style={{ width: '100%' }} wrap={false}>
      <Text style={style.header}>{category}</Text>
      <View>
        <ul>{data}</ul>
      </View>
    </View>
  );
}
