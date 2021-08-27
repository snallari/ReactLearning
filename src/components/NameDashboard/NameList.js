import React from 'react'
import Name from './Name'

function NameList() {

    const names= [
        {
          "id":1,
          "rank": 1,
          "name": "QA playground"
        },
        { "id":2,
          "rank": 2,
          "name": "QA Player"
        },
        {
          "id":3,
          "rank": 3,
          "name": "QA Playground"
        }
      ]
     // names.map(name=>name.rank>3?name.price=1 : name.price=2)
    // let nameList= names.map(name=>
    //     <div>
    //         <h1>{name.name}</h1>
    //         <p>{name.rank}</p>
    //     </div> 
    // )
    return names.map((name, index)=>
      <div>
        { name.rank>3?name.price=1 : name.price=2}
          <Name key={name.index} name={name}></Name>
      </div> 
    )
}

export default NameList
