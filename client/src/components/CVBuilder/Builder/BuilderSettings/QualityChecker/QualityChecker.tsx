import { useTypedSelector } from '../../../../../utils/useTypeSelector';
import { pdf, usePDF } from '@react-pdf/renderer';
import PDFRender from '../../../PDF-Render/PDF-Render';
import { PDFBLockLarge } from '../../../PDF-Render/PDFBlockLarge';

const base64 = require('base-64');

export default function QualityChecker() {
  const pdfItems = useTypedSelector(state => state.pdf);

  /// NEEDS REFACTORING TO MINIMIZE CODE (post video creation)

  // Fetch the current built pdf as a pdf blob

  async function pdfBlob() {
    const blob = await pdf(
        PDFRender({ pdf: pdfItems })
      ).toBlob();
    return blob;
  }

  // Transform blob with Base64

  async function blobToBase64() {
    const reader = new FileReader();
    reader.readAsDataURL(await pdfBlob());
    return new Promise(resolve => {
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  };
  console.log(process.env)

  //use https://eu-rest.resumeparsing.com/v10/parser/resume if your account is in the EU data center or
  //use https://au-rest.resumeparsing.com/v10/parser/resume if your account is in the AU data center
  //NOTE: this is shown for demonstration purposes only, you should never embed your credentials
  // in javascript that is going to be distributed to end users. Instead, your javascript should
  // call a back-end service which then makes the POST to Sovren's API
  const parseResume = async function ()  {
    const string: any = await blobToBase64();
    const newString = string.replace('data:application/pdf;base64,', '');
    console.log(newString)
    const data = {
      "DocumentAsBase64String": newString,
      "DocumentLastModified": new Date(Date.now()).toISOString().substring(0, 10),
    }
    try {
      const res = await fetch(`https://eu-rest.resumeparsing.com/v10/parser/resume`, {
        method: 'POST',
        // @ts-ignore
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Sovren-AccountId": process.env.REACT_APP_SOVREN_ACCOUNT_KEY,
          "Sovren-ServiceKey": process.env.REACT_APP_SOVREN_SERVICE_KEY
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
