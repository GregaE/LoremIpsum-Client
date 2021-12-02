import { View, Text } from '@react-pdf/renderer';
import { style } from './PDFStyles';

export function PDFBlockSmall({
  category,
  dataList,
}: {
  category: string;
  dataList: any[]; //keep it as any for now and then refactor
}) {
  const data =
    dataList &&
    dataList.map(data => {
      return (
        <li
          key={data.id}
          style={{ width: '45%', maxWidth: '50%', marginRight: 'auto' }}
        >
          <View>
            <Text style={style.subHeader}>
              {category == 'Languages' ? data.language_name : data.name}
            </Text>
            <Text style={style.text}>
              {category == 'Languages' ? data.level : data.description}
            </Text>
          </View>
        </li>
      );
    });
  return (
    <View style={{ width: '100%' }} wrap={false}>
      <Text style={style.header}>{category}</Text>
      <View>
        <ul
          style={{
            flexDirection: 'row',
            marginBottom: '10px',
            flexWrap: 'wrap',
          }}
        >
          {data}
        </ul>
      </View>
    </View>
  );
}
