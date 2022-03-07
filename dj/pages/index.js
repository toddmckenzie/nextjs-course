import Layout from '@/components/Layout'
import Link from 'next/link'


export default function HomePage() {
  return (
    <Layout title='DJ Events'>
   
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <p>Homepage</p>
      
    </Layout>
  )
}
