import { useTypedSelector } from '../../../../../utils/useTypeSelector';
import React from 'react';
import { pdf } from '@react-pdf/renderer';
import PDFRender from '../../../PDF-Render/PDF-Render';
import QualityCategory from './QualityCategory/QualityCategory';
import { AnimatePresence } from 'framer-motion';
import {
  blobToBase64,
  parseResume,
} from '../../../../../utils/CVCheckerConfig';
import { connect } from 'react-redux';

function QualityChecker({ userDetail }: any) {
  const pdfItems = useTypedSelector(state => state.pdf);
  const { personal_details } = userDetail;

  const [issues, setIssues] = React.useState<
    Array<{
      QualityCode: string;
      Message: string;
    }>
  >([]);
  const [missingData, setMissingData] = React.useState<
    Array<{
      QualityCode: string;
      Message: string;
    }>
  >([]);
  const [suggestions, setSuggestions] = React.useState<
    Array<{
      QualityCode: string;
      Message: string;
    }>
  >([]);

  // Fetch the current built pdf as a pdf blob

  async function pdfBlob() {
    const blob = await pdf(
      PDFRender({ pdf: pdfItems, personal_details })
    ).toBlob();
    return blob;
  }

  const fetchSuggestions = async () => {
    const res = await parseResume(blobToBase64(await pdfBlob()));
    const cvQuality = res.Value.RedactedResumeData.ResumeMetadata.ResumeQuality;
    console.log(res);
    cvQuality.forEach((category: { Level: string }, index: number) => {
      if (category.Level === 'Fatal Problems Found') {
        // needs to be adjusted since fatal and major problems go into the same bucket
        // setIssues(cvQuality[index].Findings);
      } else if (category.Level === 'Major Problems Found') {
        setIssues(cvQuality[index].Findings);
      } else if (category.Level === 'Data Missing') {
        setMissingData([...issues, ...cvQuality[index].Findings]);
      } else if (category.Level === 'Suggested Improvements') {
        setSuggestions(cvQuality[index].Findings);
      }
    });
  };

  return (
    <div>
      <button
        onClick={fetchSuggestions}
        className="flex w-1/2 font-bold justify-center bg-accent hover:bg-primary-x hover:text-light rounded-lg p-3 mx-auto mb-5"
      >
        Analyze Your CV
      </button>
      <div className="h-auto max-h-cat overflow-y-auto pl-5">
        <AnimatePresence exitBeforeEnter>
          <QualityCategory name={'Issues'} key={'Issues'} comments={issues} />
          <QualityCategory
            name={'Missing Data'}
            key={'Missing Data'}
            comments={missingData}
          />
          <QualityCategory
            name={'Suggestions'}
            key={'Suggestions'}
            comments={suggestions}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    userDetail: state.personal_details,
  };
};

export default connect(mapStateToProps)(QualityChecker);
