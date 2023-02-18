

export default async function Home() {
  // const data = await fetch(`${process.env.VERCEL_URL}/api/hello`)
  const data = await fetch(`https://${THE_URL}/api/hello`)
  const json = await data.json()
  return (
    <main>
      <h3>{json.name}</h3>
    </main>
  )
}
