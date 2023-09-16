import React from 'react'
import { useParams } from 'react-router-dom'

function List() {

    const parametrii = useParams();
  return (
    <div>
        {parametrii.listId}
    </div>
  )
}

export default List