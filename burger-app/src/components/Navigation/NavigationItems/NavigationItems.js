import React from 'react'
import styles from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
const navigationItems = (props) => {
    return (
    <div className={styles.NavigationItems}>
    <NavigationItem link="/" active> Burguer Builder </NavigationItem>

    <NavigationItem link="/" active> Checkout </NavigationItem>
    </div>
    )

};
export default navigationItems