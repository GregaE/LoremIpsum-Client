import { connect } from 'react-redux';
import Category from './Category/Category';

function Categories({ pdfStatus, lang, cert, skill, edu, exp }: any) {
  // Array of objects I let it here for future implementation
  const { languages } = lang;
  const { certificates } = cert;
  const { skills } = skill;
  const { education } = edu;
  const { experience } = exp;

  // console.log('pdfStatus from categories: ', pdfStatus)
  // console.log('lang fetch from categories: ',languages, pdfStatus)
  // category.name can be ['Certificates','Education','Languages','Skills','Work Experience']

  function renderCategories() {
    return pdfStatus.map((category: any) => {
      switch (category.name) {
        case 'Certificates':
          category.items = [...certificates];
          break;

        case 'Education':
          category.items = [...education];
          break;

        case 'Languages':
          category.items = [...languages];
          break;

        case 'Skills':
          category.items = [...skills];
          break;

        case 'Work Experience':
          category.items = [...experience];
          break;

        default:
          break;
      }
      return (
        <Category
          key={category.name}
          name={category.name}
          items={category.items}
        />
      );
    });
  }

  return (
    <div className="flex flex-col items-center gap-10 p-5 max-h-screen overflow-y-auto min-h-0">
      {renderCategories()}
    </div>
  );
}

//TODO - state & dispatch types
const mapStateToProps = (state: any) => {
  return {
    pdfStatus: state.pdf,
    lang: state.languages,
    cert: state.certificates,
    skill: state.skills,
    edu: state.education,
    exp: state.experience,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
