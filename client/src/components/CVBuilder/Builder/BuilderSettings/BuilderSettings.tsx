/* eslint-disable @typescript-eslint/no-unused-vars */
import { connect } from 'react-redux';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFRender from '../../PDF-Render/PDF-Render';
import { useTypedSelector } from '../../../../utils/useTypeSelector';
import QualityChecker from './QualityChecker/QualityChecker'

function BuilderSettings({postCV,resetPdf,userDetail, user} :any) {
  const pdfItems = useTypedSelector(state => state.pdf);

  const {personal_details} = userDetail

  const saveCV = () => {
    const { userId } = user;
    const dbPDF = pdfItems.map(pdfCat => {
      const { items, ...pdf } = pdfCat;
      return { ...pdf };
    });
    const data = {
      userId,
      saved_cv: JSON.stringify(pdfItems)
    }
    console.log('Cv posted')
    postCV(data)
    resetPdf()
  }
  return (
    <div className='h-full w-full flex flex-col align-center p-2'>
      <button
        className='flex w-1/2 justify-center font-bold bg-accent hover:text-light hover:bg-primary-x rounded-lg p-3 mb-5 mx-auto cursor-pointer'
        onClick={saveCV}
      >
        Save CV
      </button>
      <PDFDownloadLink
        document={<PDFRender pdf={pdfItems} personal_details={personal_details}/>}
        fileName={`CV-${new Date().toISOString()}.pdf`}
      >
        {({ blob, url, loading, error }) => (
          <button className='flex w-1/2 justify-center bg-accent font-bold hover:bg-primary-x hover:text-light rounded-lg p-3 mx-auto mb-5'>
            {loading ? 'Loading document...' : 'Download'}
          </button>
        )}
      </PDFDownloadLink>
      <QualityChecker/>
    </div>
  );
}

//TODO - state & dispatch types
const mapStateToProps = (state: any) => {
  return {
    pdfStatus: state.pdf,
    user: state.login,
    userDetail: state.personal_details,
  }
}

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
    resetPdf: () =>
      dispatch({
        type: 'RESET_PDF',
      }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuilderSettings);