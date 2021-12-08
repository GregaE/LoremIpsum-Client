/* eslint-disable @typescript-eslint/no-unused-vars */
import { connect } from 'react-redux';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFRender from '../../PDF-Render/PDF-Render';
import { useTypedSelector } from '../../../../utils/useTypeSelector';
import QualityChecker from './QualityChecker/QualityChecker'

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
    <div className='h-full w-full flex flex-col align-center p-2'>
      <button
        className='flex justify-center bg-accent hover:bg-danger rounded-lg p-3 mb-5 mx-2 cursor-pointer'
        onClick={saveCV}
      >
        Save CV
      </button>
      <PDFDownloadLink
        document={<PDFRender pdf={pdfItems} />}
        fileName={`CV-${new Date().toISOString()}.pdf`}
      >
        {({ blob, url, loading, error }) => (
          <button className='flex justify-center bg-primary hover:bg-primary-x text-light rounded-lg p-3 mx-2 mb-5'>
            {loading ? 'Loading document...' : 'Download'}
          </button>
        )}
      </PDFDownloadLink>
      <QualityChecker/>
    </div>
  );
}

//TODO - state & dispatch types
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

export default connect(null, mapDispatchToProps)(BuilderSettings);