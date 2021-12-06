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

//TODO - state & dispatch types
const mapStateToProps = (state: any) => {
  return {
    userDetail: state.personal_details,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PDFRender);