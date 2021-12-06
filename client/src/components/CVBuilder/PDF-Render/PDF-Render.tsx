import { PDFViewer, Document, Page, View, usePDF } from '@react-pdf/renderer';
import { connect } from 'react-redux'

import { PDFBLockLarge } from './PDFBlockLarge';
import { PDFProfile } from './PDFBlockProfile';
import { PDFBlockSmall } from './PDFBlockSmall';
import { pageStyle } from './PDFStyles';
import { useTypedSelector } from '../../../utils/useTypeSelector';
import { PDF } from '../../../interfaces/CategoriesInterface';
import { useEffect } from 'react';

function PDFRender({ pdf, userDetail }: any) {
  // const pdfItems: PDF[] = pdf;
  // const {personal_details} = userDetail
  // const {id, email, phone_number, image, first_name, last_name, street, city, country, headline} = personal_details[0]

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
            {/* <PDFProfile personalDetails={personal_details[0]} />
            {renderPdf} */}
          </View>
        </Page>
      </Document>
    </PDFViewer>
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