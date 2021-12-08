import { connect } from 'react-redux';

import CVItem from '../../../MyCVs/CVItem/CVItem';

function CVSelector({ curriculum }: any) {
  const { cvs } = curriculum;
  //TODO: This doesnt need to repeat itself twice can be outsourced once and imported second function is in MyCV
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
    return <p className="text-light text-lg">You don't have any CVs yet</p>;
  }

  return (
    <div className="h-full flex flex-wrap items-center gap-10 p-5 overflow-x-auto">
      {renderCVs('modal')}
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    curriculum: state.cvs,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CVSelector);
