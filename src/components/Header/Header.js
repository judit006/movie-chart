import React, { Fragment } from 'react';
import './Header.css';
function Header({onChangeSeason}) {
    return (
        <Fragment>
            <nav>
               
               <div className='logo'><img style={{ height: 'auto'}} src={process.env.PUBLIC_URL + 'logo192.png'}  alt='titleImg' /> 
               </div>

                <div style={{display: 'inline'}} >
                    <ul className='season push' >
                     <li><span onClick={onChangeSeason} value='winter' className='season'>Winter</span></li>
                     <li><span onClick={onChangeSeason} value='spring' className='season'>Spring</span></li>
                     <li><span onClick={onChangeSeason} value='summer' className='season'>Summer</span></li>
                     <li><span onClick={onChangeSeason} value='fall' className='season'>Fall</span></li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
}

export default Header;