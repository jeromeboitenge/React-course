import React from 'react';
import styles from './button.module.css';
interface props{
    children:string;
    color ?:'primary'|'secondar'|'success'|'danger';
    onClick:()=>void;
  }

const Button = ({children,color='primary',onClick}:props) => {
  return (
    <button className={[styles.bt,styles['btn-'+color]].join(' ')} onClick={onClick}>{children}</button>
  )
}

export default Button