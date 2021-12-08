import { connect } from 'react-redux';

import PersonalData from './PersonalData/PersonalData';
import Categories from './Categories/Categories';
import Preview from './Preview/Preview';
import BuilderSettings from './BuilderSettings/BuilderSettings';

//TODO types for toggle
function Builder({toggle}:any) {

  return (
    <div className='h-full max-h-full w-full max-w-full flex flex-wrap' id='outter'>
      <div className='w-1/4 pl-20 pt-2 overflow-hidden text-center' id='inner'>
        <PersonalData />
        <div className='h-auto max-h-cat mt-5 overflow-y-auto'>
          <Categories toggle={toggle}/>
        </div>
      </div>

      <div className='h-full w-2/4 flex justify-center p-2'>
        <Preview />
      </div>

      <div className='h-full w-1/4'>
        <BuilderSettings />
      </div>
    </div>
  );
}

//TODO type for dispatch
const mapDispatchToProps = (dispatch: any) => {
  return {
    toggle: () =>
      dispatch({
        type: 'TOGGLE_MODAL',
        payload: {
          flag: true,
          identifier: 'Categories',
        },
      }),
  };
};

export default connect(null, mapDispatchToProps)(Builder);
