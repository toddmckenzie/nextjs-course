import {useRouter} from 'next/router'
import Layout from '@/components/Layout'
import {API_URL} from '@/config/index'
import { resolveHref } from 'next/dist/shared/lib/router/router';

export default function MyEvent({evt}) {
  const router = useRouter();
  console.log(router);
  return (
    <Layout title="My Event"><h2>{evt.name}</h2></Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  const paths = events.map(evt => ({
    params: { slug: evt.slug }
  }))

  return {
    paths,
    fallback: false
  }
}


export async function getStaticProps({ params: {slug}}){
  const res = await fetch(`${API_URL}/api/events/${slug}`)
  const events = await res.json()

  return {
    props: {
      evt: events[0]
    }
  }
}