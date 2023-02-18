

export default async function Home() {
  // const name = await fetch(`https://${process.env.VERCEL_URL}/api/hello`).then(res => res.json())
  // const {name} = await fetch(`${process.env.VERCEL_URL}/api/hello`)
  const data = await fetch(`${process.env.VERCEL_URL}/api/hello`)
  const json = await data.json()
  return (
    <main>
      <h3>{json.name}</h3>
    </main>
  )
}
