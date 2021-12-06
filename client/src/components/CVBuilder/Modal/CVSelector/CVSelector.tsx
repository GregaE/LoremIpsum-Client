import { connect } from 'react-redux';

import CVItem from '../../../MyCVs/CVItem/CVItem';

function CVSelector({ curriculum }: any) {
  const { cvs } = curriculum;

  function renderCVs() {
    if (cvs.length > 0) {
      return Array(cvs.length).fill(<CVItem />);
    }
    return <p>You dont have any CV yet</p>;
  }

  /*
  TO DO:
    Every CVItem should hold a key that identifies the CV so when you click CVItem changes selector state fetching cv data
  */

  return (
    <div className="h-full flex flex-wrap items-center gap-10 p-5 overflow-scroll">
      {renderCVs()}
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
