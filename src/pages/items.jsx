import React from 'react'
import { useListContext } from '../contexts/uselistcontext'
import ListItems from '../components/listitems'
import Layout from '../layouts'

const ItemsPage = () => {
    const listContext = useListContext()
  return (
    <Layout>
        <ListItems list={listContext.items} />
    </Layout>
  )
}

export default ItemsPage
