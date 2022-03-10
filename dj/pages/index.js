import Layout from '@/components/Layout'
import Link from 'next/link'
import { API_URL } from '@/config/index'
import EventItem from '@/components/EventItem'


export default function HomePage({ events }) {
  console.log(events)
  return (
    <Layout title='DJ Events'>
   
      <h1>UpComingEvents</h1>
      {events.length === 0 && <h3>No Events To Show</h3>}

      {events.map(evt => (
        <EventItem key={evt.id} evt={evt} />
        
      ))}
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