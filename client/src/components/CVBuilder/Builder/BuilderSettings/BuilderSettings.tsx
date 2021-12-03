import React from 'react';
import Button from '../../../Forms/Elements/Buttons/Button';
import { useDispatch, connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PDFDownloadLink, pdf } from '@react-pdf/renderer';
import PDFRender from '../../PDF-Render/PDF-Render';
import { saveAs } from 'file-saver';
import { useTypedSelector } from '../../../../utils/useTypeSelector';

function BuilderSettings({culos, pdfStatus, userDetail, postForm, reserPDF}:any) {

  const {personal_details} = userDetail;
  const {user_id} = personal_details
  
  function handleClick() {}

  return (
    <div>
      <div
        className="flex justify-center bg-primary text-light rounded-lg p-1 m-5"
        onClick={async () => {
          const doc = <PDFRender pdf={pdfStatus} />;
          const asPdf = pdf(doc);
          asPdf.updateContainer(doc);
          const blob = await asPdf.toBlob();
          saveAs(blob, `CV.pdf`);
        }}
      >
        Download
      </div>

      <div
        /*
        This is able to post CV but it stringifies the whole pdfState, so to get it later
        we will need to parse it in place, to prevent errors when PUT...

        We should modify the object we send to db in order to get some picture, thumbnail...
        */
        className="flex justify-center bg-primary text-light rounded-lg p-1 m-5"
        onClick={async () => {
          const data = {
            saved_cv: JSON.stringify([...pdfStatus]), 
            userId: user_id,
          }
          postForm("POST_CV",data)
          reserPDF()
        }}
      >
        Posting CV
      </div>
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