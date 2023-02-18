

export default async function Home() {
  const mmm = await fetch(`http://localhost:3000/api/hello`, {method: 'GET'})
  const name = await mmm.json()
  return (
    <main>
      <h3>{name}</h3>
    </main>
  )
}
