import React from 'react'

const Msg = ({el}) => {
  console.log(el)
  return (
    <article>
        <h2>{el.oggetto}</h2>
        {/* <h3>{el.metadata.isRead?'letto':'da leggere'} */}
    </article>
  )
}

export default Msg