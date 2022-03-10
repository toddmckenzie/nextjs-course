import Layout from '@/components/Layout'
import Link from 'next/link'
import { API_URL } from '@/config/index'
import EventItem from '@/components/EventItem'


export default function EventsPage({ events }) {
  console.log(events)
  return (
    <Layout title='DJ Events'>
   
      <h1>Events</h1>
      {events.length === 0 && <h3>No Events To Show</h3>}

      {events.map(evt => (
        <EventItem key={evt.id} evt={evt} />
        
      ))}
      {
        events.length > 0 && (
          <Link href='/events'>
            <a className='btn-secondary'>View All</a>
          </Link>
        )
      }
    </Layout>
  )
}


export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  return {
    props: {events: events.slice(0,3)}
  }
}