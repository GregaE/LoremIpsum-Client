/* eslint-disable @typescript-eslint/no-unused-vars */
import { connect } from 'react-redux'
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFRender from '../../PDF-Render/PDF-Render';
import { useTypedSelector } from '../../../../utils/useTypeSelector';

function BuilderSettings({postCV,resetPdf,userDetail, user} :any) {
  const pdfItems = useTypedSelector(state => state.pdf);

  const {personal_details} = userDetail

  const saveCV = () => {
    const {userId} = user
    const data = {
      userId,
      saved_cv: JSON.stringify(pdfItems)
    }
    console.log('Cv posted')
    postCV(data)
    resetPdf()
  }
  return (
    <div>
      <PDFDownloadLink
        document={<PDFRender pdf={pdfItems} personal_details={personal_details}/>}
        fileName={`CV-${new Date().toISOString()}.pdf`}
      >
        {({ blob, url, loading, error }) => (
          <div className="flex justify-center bg-primary text-light rounded-lg p-1 m-5">
            {loading ? 'Loading document...' : 'Download'}
          </div>
        )}
      </PDFDownloadLink>
      <div className="flex justify-center bg-primary text-light rounded-lg p-1 m-5"
        onClick={() => saveCV()}>
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
    userDetail: state.personal_details,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    postCV: (data:any) =>
      dispatch({
        type: 'FETCH_DATA',
        endpoint: '/savedCV',
        method: 'POST',
        id: '',
        dispatch: 'POST_CV',
        payload: data
      }),
    resetPdf: () =>
      dispatch({
        type: 'RESET_PDF',
      }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuilderSettings);