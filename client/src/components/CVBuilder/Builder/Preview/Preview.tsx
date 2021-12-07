import { PDFViewer } from '@react-pdf/renderer';
import PDFRender from '../../PDF-Render/PDF-Render';
import { connect } from 'react-redux';

function Preview({ pdf }: any) {
  return (
      <div className='h-a4 w-a4 bg-light'>
        <PDFViewer
          showToolbar={false}
          style={{ height: '100%', display: 'flex', width: '100%' }}
        >
          <PDFRender pdf={pdf} />
        </PDFViewer>
      </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    pdf: state.pdf,
  };
};

export default connect(mapStateToProps)(Preview);
