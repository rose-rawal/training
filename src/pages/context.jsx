import React from 'react'
import Layout from '../layouts'
import { useListContext } from '../contexts/uselistcontext'
import IndexForm from '../components/indexform'

const ContextPage = () => {
  const listContext = useListContext()
  console.log("listContext", listContext)
  return (
    <Layout>
       <div style={{
        margin: "20px"
       }}>
       <IndexForm label='Adding Item by context' onSubmit={(data)=>{
            listContext.setItems([
                data,
                ...listContext.items,
            ])
        }} />
       </div>
    </Layout>
  )
}

export default ContextPage
