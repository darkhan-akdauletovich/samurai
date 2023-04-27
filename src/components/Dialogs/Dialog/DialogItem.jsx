import React from 'react'
import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <div className={s.people}>
        <div className={s.human}><NavLink to={'/dialog/' + props.id} className={s.human}>{props.name}</NavLink></div>
      </div>
  )
}

export default DialogItem