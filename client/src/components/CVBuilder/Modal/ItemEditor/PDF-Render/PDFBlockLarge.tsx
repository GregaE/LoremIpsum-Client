import { View, Text, StyleSheet } from '@react-pdf/renderer';

export function PDFBLockLarge({
  category,
  dataList,
}: {
  category: string;
  dataList: any[]; //keep it as any for now and then refactor
}) {
  const style = StyleSheet.create({
    header: {
      fontSize: '14px',
      fontWeight: 'bold',
      textDecoration: 'underline',
      marginBottom: '5px',
    },
    subHeader: {
      fontSize: '11px',
      fontWeight: 'medium',
    },
    text: {
      fontSize: '11px',
      fontWeight: 'light',
    },
  });
  const data =
    dataList &&
    dataList.map(data => {
      return (
        <li
          key={data.id}
          style={{ flexDirection: 'row', marginBottom: '10px' }}
        >
          <View style={{ width: '25%' }}>
            <Text style={style.text}>
              {data.beginMonth}, {data.beginYear} - {data.endMonth},{' '}
              {data.endYear}
            </Text>
            <Text style={style.text}>
              {data.country}, {data.city}
            </Text>
          </View>
          <View>
            <Text style={style.subHeader}>
              {data.job_title}, {data.company}
            </Text>
            <Text style={style.text}>{data.description}</Text>
          </View>
        </li>
      );
    });
  return (
    <View style={{ width: '100%' }}>
      <Text style={style.header}>{category}</Text>
      <View>
        <ul>{data}</ul>
      </View>
    </View>
  );
}
