import React, { useState ,useEffect} from 'react'
import { useActionData, useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data,setdata]= useState ([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/Arshanashraf')
    //   .then(response=> response.json())
    //   .then(data => {
    //     console.log(data);
    //     setdata(data)
    //   })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt=" git pic" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/Arshanashraf')
    return response.json()
}
