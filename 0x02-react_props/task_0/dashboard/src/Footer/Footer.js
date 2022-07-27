import React from 'react'
import {getFooterCopy, getFullYear} from '../utils/utils';


function Footer() {
    return (
        <div>
            <div className='App-footer'>
                <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
            </div>
        </div>
    )
}

export default Footer