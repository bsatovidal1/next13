import Link from 'next/link'
import { User } from './components/User'
import { Repo } from './components/Repo'

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      {/* @ts-expect-error Async Server Component */}
      <User />

      {/* @ts-expect-error Async Server Component */}
      <Repo />
      {/* <Link href={'/dashboard'}>Dashboard</Link> */}
    </div>
  )
}
