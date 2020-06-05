import React from 'react'
import styles from './Dialogs.module.scss'
import DialogsList from './DialogsList/DialogsList'
import { Route } from 'react-router-dom'
import Messages from './Messages/Messages'


const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <Route exact path='/dialogs' render={() => <DialogsList dialogsData={props.dialogsData} />} />
            <Route path='/dialogs/*'  render={() => <Messages dialogsData={props.dialogsData} />} />
        </div>
    )
}

export default Dialogs