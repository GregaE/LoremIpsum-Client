import { useTypedSelector } from '../../../../../utils/useTypeSelector';
import { useState } from 'react';
import React from 'react'
import { pdf } from '@react-pdf/renderer';
import PDFRender from '../../../PDF-Render/PDF-Render';
import QualityCategory from './QualityCategory/QualityCategory';
import { AnimatePresence } from 'framer-motion';

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

  // Call Sovren API to parse the CV

  const parseResume = async function ()  {
    const string: any = await blobToBase64();
    const newString = string.replace('data:application/pdf;base64,', '');
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
    const cvQuality = res.Value.RedactedResumeData.ResumeMetadata.ResumeQuality;
    console.log(cvQuality)
    cvQuality.forEach((category: { Level: string}, index: number) => {
      if (category.Level === 'Fatal Problems Found') {
        setIssues(cvQuality[index].Findings);
      }
      else if (category.Level === 'Major Problems Found') {
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

  console.log(issues)

  return (
    <div>
      <button onClick={logResume} className="flex justify-center bg-primary text-light rounded-lg p-3 mx-6 mb-5">Analyze Your CV</button>
      <AnimatePresence exitBeforeEnter>
        <QualityCategory name={"Issues"} comments={issues}/>
        <QualityCategory name={"Missing Data"} comments={missingData}/>
        <QualityCategory name={"Suggestions"} comments={suggestions}/>
      </AnimatePresence>
    </div>
  );
}
