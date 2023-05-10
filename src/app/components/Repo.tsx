export async function Repo() {
  const response = await fetch(
    'https://api.github.com/users/bsatovidal1/repos',
    {
      cache: 'no-store',
      // next: {
      //   revalidate: 30,
      // },
    },
  )
  const user = await response.json()
  return (
    <div>
      <h1>Repos</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}
