import { usePDF } from '@react-pdf/renderer';
import PDFRender from '../../PDF-Render/PDF-Render';
import { connect } from 'react-redux';

function Preview({ pdf }: any) {

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="h-4/5 w-3/4 bg-light flex justify-center items-center p-2">
        <PDFRender pdf={pdf} />
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    pdf: state.pdf,
  };
};

export default connect(mapStateToProps)(Preview);
