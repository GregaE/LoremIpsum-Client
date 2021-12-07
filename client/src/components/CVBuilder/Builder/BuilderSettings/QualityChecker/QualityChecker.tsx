import { useTypedSelector } from '../../../../../utils/useTypeSelector';
import { usePDF } from '@react-pdf/renderer';
import PDFRender from '../../../PDF-Render/PDF-Render';

const base64 = require('base-64');

export default function QualityChecker() {
  const pdfItems = useTypedSelector(state => state.pdf);

  /// this needs to be moved to other component/backend

  const [ pdf, updatePDF ] = usePDF({ document: <PDFRender pdf={pdfItems} /> })

  //the Base64 library can be found at https://sovren.com/downloads/v10/Libs/base64.zip
  const base64Text = base64.encode(pdf.url);

  const data = {
      "DocumentAsBase64String": base64Text,
      "DocumentLastModified": new Date(Date.now()).toISOString().substring(0, 10)
      //other options here (see https://sovren.com/technical-specs/latest/rest-api/resume-parser/api/)
  };

  //use https://eu-rest.resumeparsing.com/v10/parser/resume if your account is in the EU data center or
  //use https://au-rest.resumeparsing.com/v10/parser/resume if your account is in the AU data center
  //NOTE: this is shown for demonstration purposes only, you should never embed your credentials
  // in javascript that is going to be distributed to end users. Instead, your javascript should
  // call a back-end service which then makes the POST to Sovren's API
  const parseResume = async function ()  {
    try {
      const res = await fetch(`https://eu-rest.resumeparsing.com/v10/parser/resume`, {
        method: 'POST',
        // crossDomain: true,
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Sovren-AccountId": "14049786",
          "Sovren-ServiceKey": "TR2BwF7q7kZefULEgDVGXVnOljuQmfATaaF5TLUk"
        },
        body: JSON.stringify(data),
      });
      return await res.json();
    } catch (err) {
      return console.error(err);
    }
  }

  const logResume = async () => {
    const res = await parseResume()
    console.log(res)
  }

  return (
    <div>
      <h3 className="text-primary">Quality checker</h3>
      <div>Output:</div>
      <div></div>
      <button onClick={logResume}>Fetch</button>
    </div>
  );
}
