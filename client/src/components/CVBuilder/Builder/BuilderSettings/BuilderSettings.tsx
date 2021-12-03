import React from 'react';
import Button from '../../../Forms/Elements/Buttons/Button';
// import { toggleModal } from '../../../../redux/AppState/actionCreators/toggleModal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PDFDownloadLink, pdf } from '@react-pdf/renderer';
import PDFRender from '../../PDF-Render/PDF-Render';
import { saveAs } from 'file-saver';
import { connect } from 'react-redux';
import { useTypedSelector } from '../../../../utils/useTypeSelector';

export default function BuilderSettings() {
  // const [instance, updateInstance] = usePDF({ document: <PDFRender /> });
  // download={`CV-${new Date()}.pdf`}

  const pdfItems = useTypedSelector(state => state.pdf);
  function handleClick() {}

  return (
    <div>
      <div
        className="flex justify-center bg-primary text-light rounded-lg p-1 m-5"
        onClick={async () => {
          const doc = <PDFRender pdf={pdfItems} />;
          const asPdf = pdf(doc);
          asPdf.updateContainer(doc);
          const blob = await asPdf.toBlob();
          saveAs(blob, `CV.pdf`);
        }}
      >
        Download
      </div>
    </div>
  );
}
