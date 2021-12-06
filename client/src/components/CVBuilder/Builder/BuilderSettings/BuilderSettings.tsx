import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFRender from '../../PDF-Render/PDF-Render';
import { useTypedSelector } from '../../../../utils/useTypeSelector';

export default function BuilderSettings() {
  const pdfItems = useTypedSelector(state => state.pdf);
  return (
    <div>
      <PDFDownloadLink
        document={<PDFRender pdf={pdfItems} />}
        fileName={`CV-${new Date().toISOString()}.pdf`}
      >
        {({ blob, url, loading, error }) => (
          <div className="flex justify-center bg-primary text-light rounded-lg p-1 m-5">
            {loading ? 'Loading document...' : 'Download'}
          </div>
        )}
      </PDFDownloadLink>
    </div>
  );
}

//TODO - state & dispatch types
const mapStateToProps = (state: any) => {
  return {
    culos: state.cvs,
    pdfStatus: state.pdf,
    userDetail: state.personal_details,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    postForm: (action: any, data: any) => dispatch({
      type: 'FETCH_DATA',
      endpoint: '/savedCV',
      method: 'POST',
      id:'',
      dispatch: action,
      payload: data
    }),
    reserPDF: () => dispatch({
      type: 'RESET_PDF',
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuilderSettings);