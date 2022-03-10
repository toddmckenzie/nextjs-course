import Layout from '@/components/Layout'
import Link from 'next/link'
import { API_URL } from '@/config/index'


export default function HomePage({events}) {
  console.log(events)
  return (
    <Layout title='DJ Events'>
   
      <h1>UpComingEvents</h1>
      
    </Layout>
  )
}


export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  return {
    props: {events}
  }
}