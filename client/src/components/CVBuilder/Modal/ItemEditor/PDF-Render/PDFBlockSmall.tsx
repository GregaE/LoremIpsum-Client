import { View, Text, StyleSheet } from '@react-pdf/renderer';

export function PDFBlockSmall({
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
      marginBottom: '5px',
    },
  });

  const data =
    dataList &&
    dataList.map(data => {
      return (
        <li key={data.id}>
          <Text style={style.subHeader}>{data.name}</Text>
          <Text style={style.text}>{data.description}</Text>
        </li>
      );
    });
  return (
    <View style={{ width: '50%' }}>
      <Text style={style.header}>{category}</Text>
      <View style={{ flexDirection: 'row' }}>
        <ul>{data}</ul>
      </View>
    </View>
  );
}
