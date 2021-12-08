import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useState } from 'react'

//TODO - props type
function NavBar({ navigate }: any) {

  const white = 'invert(100%) sepia(94%) saturate(0%) hue-rotate(193deg) brightness(105%) contrast(108%)';
  const orange = 'invert(73%) sepia(22%) saturate(6069%) hue-rotate(355deg) brightness(94%) contrast(97%)'

  const [logoColor, setColor] = useState(white)

  return (
    <div className="bg-primary text-light w-1/8 h-screen flex flex-col items-center gap-6">
      <div className="w-4/6 h-1/6 m-5 flex justify-center">
        <Link to="/">
          <img
            onMouseEnter={() => setColor(orange)}
            onMouseLeave={() => setColor(white)}
            onClick={() => navigate('Home')}
            style={{objectFit:"contain",
            filter:`${logoColor}`}}
            className="h-48"
            // src="https://loremipsumcorp.com/wp-content/uploads/2021/03/Lorem-Ipsum-Logo-Stacked-Black.png"
            // src="https://www.theloremipsumco.com/wp-content/uploads/2017/09/Lorem-Ipsum-Co-Icon-Black.png"
            src="https://www.linkpicture.com/q/Lorem2-removebg-preview-black.png"
            alt="logo"
          />
        </Link>
      </div>
      <ul className="flex flex-col flex-wrap justify-around items-center h-3/6 w-5/6">
        <Link to="/" className="w-full">
          <li
            className="nav-link focus:bg-light"
            onClick={() => navigate('Home')}
          >
            Home
          </li>
        </Link>
        <Link to="/CVBuilder" className="w-full">
          <li
            className="nav-link focus:bg-light "
            onClick={() => {
              navigate('CVBuilder');
            }}
          >
            CVBuilder
          </li>
        </Link>
        <Link to="/MyCVs" className="w-full">
          <li className="nav-link" onClick={() => navigate('MyCVs')}>
            MyCVs
          </li>
        </Link>
      </ul>
    </div>
  );
}

//TODO - dispatch type
const mapDispatchToProps = (dispatch: any) => {
  return {
    navigate: (name: string) => {
      dispatch({
        type: 'HEADER_NAME',
        payload: name,
      });
      dispatch({
        type: 'SHOW_CVBUILDER',
        payload: false,
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(NavBar);
