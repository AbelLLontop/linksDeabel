import React from 'react'
import Link from './Link'

const ListLink = ({links=[]}) => {
  return (
    <>
        {links.map(({_id,link,title,description})=>(
            <Link key={_id} title={title} link={link} fecha="una fecha" description={description}/>
        ))}
    </>
  )
}

export default ListLink