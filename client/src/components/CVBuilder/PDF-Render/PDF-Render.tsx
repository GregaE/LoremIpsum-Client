import { Document, Page, View } from '@react-pdf/renderer';
import { PDF } from '../../../interfaces/PdfInterface';
import { PDFBLockLarge } from './PDFBlockLarge';
import { PDFProfile } from './PDFBlockProfile';
import { PDFBlockSmall } from './PDFBlockSmall';
import { pageStyle } from './PDFStyles';

export default function PDFRender({ pdf }: { pdf: PDF[] }) {
  const renderPdf =
    pdf &&
    pdf.map((category, index: number) => {
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
  return (
    <Document>
      <Page size="A4" style={pageStyle.page}>
        <View style={pageStyle.section}>
          <PDFProfile personalDetails={PDFMock.personalDetails} />
          {renderPdf}
        </View>
      </Page>
    </Document>
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