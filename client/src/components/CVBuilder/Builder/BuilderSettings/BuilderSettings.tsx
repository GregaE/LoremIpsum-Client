import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFRender from '../../PDF-Render/PDF-Render';
import { useTypedSelector } from '../../../../utils/useTypeSelector';

export default function BuilderSettings() {
  const pdfItems = useTypedSelector(state => state.pdf);
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
    </div>
  );
}
