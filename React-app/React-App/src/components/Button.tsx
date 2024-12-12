import React from 'react'
interface props{
    children:string;
    color ?:'primary'|'secondar'|'success'|'danger';
    onClick:()=>void;
  }

const Button = ({children,color='primary',onClick}:props) => {
  return (
    <div className={'btn btn-'+color} onClick={onClick}>{children}</div>
  )
}

export default Button