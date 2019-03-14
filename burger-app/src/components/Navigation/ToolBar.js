import React from 'react'
import styles from './ToolBar.css'
import Logo from '../Logo/Logo'

import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems'
const toolBar = (props) => {
    return(
        <div className={styles.ToolBar}>
        <Logo/>
        <NavigationItems/>
        <nav>
            ...
            </nav>
            </div>
    )
};
export default toolBar