import React, { useState } from 'react'
import axios from 'axios'

const AxiosComponent = () => {
    const [count,setcount] = useState(0)
    const [titledata,settitledata] = useState("Title not fetched")
    const [bodyData,setBodyData] = useState("Body Not fetched")


    const fetchfunction = async () => {
        setcount(count+1)
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${count+1}`)
        const jdata = response.data
        const tdata = jdata.title
        console.log(jdata)
        const bdata = jdata.body
        settitledata(tdata)
        setBodyData(bdata)
    }
  return (
   <React.Fragment>
    <h1>Fetching using axios</h1>
    <button onClick={fetchfunction}>Fetch</button>
    <h2>ID</h2>
    <p>{count}</p>
    <h2>Title</h2>
    <p>{titledata}</p>
    <h2>Body</h2>
    <p>{bodyData}</p>
   </React.Fragment>
  )
}

export default AxiosComponent