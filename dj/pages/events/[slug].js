import {useRouter} from 'next/router';
import Layout from '../../components/Layout'


export default function MyEvent() {
  const router = useRouter();
  console.log(router);
  return (
    <Layout title="My Event"><h2>My Event</h2></Layout>
  )
}
