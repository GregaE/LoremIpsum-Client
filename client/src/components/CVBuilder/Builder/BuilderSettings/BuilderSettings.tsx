/* eslint-disable @typescript-eslint/no-unused-vars */
import { connect } from 'react-redux';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFRender from '../../PDF-Render/PDF-Render';
import { useTypedSelector } from '../../../../utils/useTypeSelector';

function BuilderSettings({ postCV, user }: any) {
  const pdfItems = useTypedSelector(state => state.pdf);

  const saveCV = () => {
    const { userId } = user;
    const dbPDF = pdfItems.map(pdfCat => {
      const { items, ...pdf } = pdfCat;
      return { ...pdf };
    });
    const data = {
      userId,
      saved_cv: JSON.stringify(dbPDF),
    };
    postCV(data);
  };
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
      <div
        className="flex justify-center bg-primary text-light rounded-lg p-1 m-5 cursor-pointer"
        onClick={() => saveCV()}
      >
        Save CV
      </div>
    </div>
  );
}

//TODO - state & dispatch types
const mapStateToProps = (state: any) => {
  return {
    pdfStatus: state.pdf,
    user: state.login,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    postCV: (data: any) =>
      dispatch({
        type: 'FETCH_DATA',
        endpoint: '/savedCV',
        method: 'POST',
        id: '',
        dispatch: 'POST_CV',
        payload: data,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuilderSettings);
