// import React from 'react'
import PropTypes from 'prop-types';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wrapper = ({children}) => {
  return (
    <>
        {/* <div className="h-[60px]"></div> */}
        <ToastContainer/>
        <div>
             {children} 
        </div>
    </>
   
    
  )
};

Wrapper.propTypes = {
    children: PropTypes.node.isRequired
};

export default Wrapper
