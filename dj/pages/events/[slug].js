import {useRouter} from 'next/router';

export default function MyEvent() {
  const router = useRouter();
  console.log(router);
  return (
    <div><h2>My Event</h2></div>
  )
}
