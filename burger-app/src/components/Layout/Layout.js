import React from 'react'; 
import Aux from '../../hoc/Aux'; 
import styles from './Layout.css';
import ToolBar from '../../components/Navigation/ToolBar'
const layout = (props) => (
    <Aux>
    <ToolBar/>
    <main className={styles.Content}>
        {props.children}    
    </main>
    </Aux>
);

export default layout; 