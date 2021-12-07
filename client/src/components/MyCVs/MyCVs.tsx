import CVItem from './CVItem/CVItem';
import { motion } from 'framer-motion';
import { useTypedSelector } from '../../utils/useTypeSelector';
import { pdf } from '@react-pdf/renderer';
import PDFRender from '../CVBuilder/PDF-Render/PDF-Render';

export default function MyCVs() {
  const { cvs } = useTypedSelector(state => state.cvs);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.1, duration: 0.1 },
    },
    exit: {
      opacity: 0,
    },
  };

  /*
  In the meantime it just shows as many items as cvs we have in the list, but should be just
  a picture / thumbnail of the cv item
  */
  //TODO: No proper thumbnail generator get back to it later
  async function generateThumbnail(cv: {
    date_create: string;
    saved_cv: string;
  }) {
    const pdfBlob = await pdf(
      PDFRender({ pdf: JSON.parse(cv.saved_cv) })
    ).toBlob();
    console.log(URL.createObjectURL(pdfBlob));
  }

  function renderCVs(page: string) {
    if (cvs.length > 0) {
      return cvs.map((cv: any) => {
        return (
          <CVItem
            key={cv.id}
            cvId={cv.id}
            date_created={cv.date_created}
            data={cv.saved_cv}
            page={page}
          />
        );
      });
    }
    return <p className="mx-auto">You dont have any CV</p>;
  }

  return (
    <motion.div
      className="h-full flex flex-wrap items-center gap-10 p-5 overflow-scroll"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
    >
      {renderCVs('mycv')}
    </motion.div>
  );
}
