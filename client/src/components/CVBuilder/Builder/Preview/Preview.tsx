import { PDFViewer } from '@react-pdf/renderer';
import PDFRender from '../../PDF-Render/PDF-Render';
import { connect } from 'react-redux';

function Preview({ pdf,userDetail }: any) {

  const {personal_details} = userDetail

  console.log('personal details from preview component',personal_details, pdf)

  return (
      <div className='h-a4 w-a4 bg-light'>
        <PDFViewer
          showToolbar={false}
          style={{ height: '100%', display: 'flex', width: '100%' }}
        >
          <PDFRender pdf={pdf} personal_details={personal_details} />
        </PDFViewer>
      </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    pdf: state.pdf,
    userDetail: state.personal_details,
  };
};

export default connect(mapStateToProps)(Preview);
