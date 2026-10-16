import React from 'react'
import Msg from './Msg.jsx'


const Messages = () => {
    if (import.meta.env.DEV) {
    const { messages } = import('./samples/data.json')
    }
    console.log(messages)


  return (
    messages.map((el) => {
        return (
            <Msg el={el} key={el.id} />
        )
    })    

  )
}

export default Messages