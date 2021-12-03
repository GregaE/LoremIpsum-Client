import { PDFViewer, Document, Page, View, usePDF } from '@react-pdf/renderer';

import { PDFBLockLarge } from './PDFBlockLarge';
import { PDFProfile } from './PDFBlockProfile';
import { PDFBlockSmall } from './PDFBlockSmall';
import { pageStyle } from './PDFStyles';
import { useTypedSelector } from '../../../utils/useTypeSelector';
import { PDF } from '../../../interfaces/CategoriesInterface';
import { useEffect } from 'react';

export default function PDFRender({ pdf }: any) {
  // const pdfItems: PDF[] = pdf;
  console.log(pdf);
  // console.log(pdfItems);
  const renderPdf =
    pdf &&
    pdf.map((category: PDF, index: number) => {
      if (
        category.name === 'Education' ||
        category.name === 'Work Experience'
      ) {
        return (
          <PDFBLockLarge
            key={index}
            category={category.name}
            dataList={category.pdf}
          />
        );
      }
      return (
        <PDFBlockSmall
          key={index}
          category={category.name}
          dataList={category.pdf}
        />
      );
    });

  // const [instance, updateInstance] = usePDF({ document: <PDFRender /> });
  // useEffect(() => {}, [pdfItems]);
  return (
    <PDFViewer
      showToolbar={false}
      style={{ height: '100%', display: 'flex', width: '100%' }}
    >
      <Document>
        <Page size="A4" style={pageStyle.page}>
          <View style={pageStyle.section}>
            <PDFProfile personalDetails={PDFMock.personalDetails} />
            {renderPdf}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

const PDFMock = {
  personalDetails: {
    first_name: 'Eugen',
    last_name: 'Nikolajev',
    phone_number: '123456789',
    email: 'carl.marx@gmail.com',
    street: 'Rambla',
    postcode: '65326',
    city: 'Barcelona',
    country: 'Spain',
    headline:
      'I have a clear, logical mind with a practical approach to problem-solving and a drive to see things through to completion. I have more than 2 years of experience in managing and leading teams across multiple sectors. I am eager to learn, I enjoy overcoming challenges, and I have a genuine interest in Business Management and making organisations successful.',
  },
};
