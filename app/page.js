

export default async function Home() {
  const mmm = await fetch(`${process.env.BASE_URL}/api/hello`, {method: 'GET'})
  const name = await mmm.json()
  return (
    <main>
      <h3>{name.name}</h3>
    </main>
  )
}
