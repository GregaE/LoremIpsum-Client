import { PDFViewer } from '@react-pdf/renderer';
import PDFRender from '../../PDF-Render/PDF-Render';
import { connect } from 'react-redux';

function Preview({ pdf,userDetail }: any) {

  const {personal_details} = userDetail

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="h-4/5 w-3/4 bg-light flex justify-center items-center p-2">
        <PDFViewer
          showToolbar={false}
          style={{ height: '100%', display: 'flex', width: '100%' }}
        >
          <PDFRender pdf={pdf} personal_details={personal_details} />
        </PDFViewer>
      </div>
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
