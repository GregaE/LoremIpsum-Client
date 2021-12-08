import { Document, Page, View } from '@react-pdf/renderer';
import { PDF } from '../../../interfaces/PdfInterface';
import { PDFBLockLarge } from './PDFBlockLarge';
import { PDFProfile } from './PDFBlockProfile';
import { PDFBlockSmall } from './PDFBlockSmall';
import { pageStyle } from './PDFStyles';

export default function PDFRender({ pdf,personal_details }: { pdf: PDF[], personal_details?:any }) {

  const {first_name, last_name, phone_number,email,street, postcode, city,country, headline} = personal_details
  const data = {first_name, last_name, phone_number, email, street, postcode, city, country, headline}

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
          <PDFProfile personalDetails={data}/>
          {renderPdf}
        </View>
      </Page>
    </Document>
  );
}
