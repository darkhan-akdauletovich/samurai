import React from 'react'
import s from './Dialogs.module.css';
import DialogItem from './Dialog/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let DialogsElement = props.state.DialogsData.map( d => <DialogItem name={d.name} id={d.id}/> );
  let MessagesElement = props.state.MessagessData.map( m => <Message message={m.message}/> );

  return (
    <div className={s.dialogs}>
      <div className={s.people}>
        { DialogsElement }
      </div>
      <div className={s.messages}>
        { MessagesElement }
      </div>
    </div>
  )
}

export default Dialogs