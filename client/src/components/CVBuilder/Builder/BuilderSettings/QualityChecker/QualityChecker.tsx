import { useTypedSelector } from '../../../../../utils/useTypeSelector';
import React from 'react'
import { pdf } from '@react-pdf/renderer';
import PDFRender from '../../../PDF-Render/PDF-Render';
import QualityCategory from './QualityCategory/QualityCategory';
import { AnimatePresence } from 'framer-motion';
import { blobToBase64, parseResume } from '../../../../../utils/CVCheckerConfig';

export default function QualityChecker() {
  const pdfItems = useTypedSelector(state => state.pdf);
  const [issues, setIssues] = React.useState<
    Array<{
      QualityCode: number,
      Message: string
    }>
  >([]);
  const [missingData, setMissingData] = React.useState<
    Array<{
      QualityCode: number,
      Message: string
    }>
  >([]);
  const [suggestions, setSuggestions] = React.useState<
    Array<{
      QualityCode: number,
      Message: string
    }>
  >([]);

  // Fetch the current built pdf as a pdf blob

  async function pdfBlob() {
    const blob = await pdf(
        PDFRender({ pdf: pdfItems })
      ).toBlob();
    return blob;
  }

  const fetchSuggestions = async () => {
    const res = await parseResume(blobToBase64(await pdfBlob()))
    const cvQuality = res.Value.RedactedResumeData.ResumeMetadata.ResumeQuality;
    console.log(res)
    cvQuality.forEach((category: { Level: string}, index: number) => {
      if (category.Level === 'Fatal Problems Found') {
        setIssues(cvQuality[index].Findings);
      }
      else if (category.Level === 'Major Problems Found') {
        // need to add to fatal problems not replace
        setIssues(cvQuality[index].Findings);
      }
      else if (category.Level === 'Data Missing') {
        setMissingData(cvQuality[index].Findings);
      }
      else if (category.Level === 'Suggested Improvements') {
        setSuggestions(cvQuality[index].Findings);
      }
    });
  }

  return (
    <div>
      <button onClick={fetchSuggestions} className="flex justify-center bg-primary text-light rounded-lg p-3 mx-6 mb-5">Analyze Your CV</button>
      <div className='h-auto max-h-cat mt-14 overflow-y-auto'>
        <AnimatePresence exitBeforeEnter>
          <QualityCategory name={"Issues"} key={"Issues"} comments={issues}/>
          <QualityCategory name={"Missing Data"} key={"Missing Data"} comments={missingData}/>
          <QualityCategory name={"Suggestions"} key={"Suggestions"} comments={suggestions}/>
        </AnimatePresence>
      </div>
    </div>
  );
}
