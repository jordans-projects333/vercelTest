

export default async function Home() {
  // const data = await fetch(`${process.env.VERCEL_URL}/api/hello`)
  // const data = await fetch(`https://${VERCEL_URL}/api/hello`)
  const data = await fetch(`https://vercel-test-5z6znkm99-jordans-projects333.vercel.app/api/hello`)
  
  const json = await data.json()
  console.log(json)
  return (
    <main>
      <h3>{process.env.VERCEL_URL}</h3>
      <h3>{json.name}</h3>
    </main>
  )
}
