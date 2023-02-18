

export default async function Home() {
  
  // const data = await fetch(`https://vercel-test-b7zs-9bae9zelw-jordans-projects333.vercel.app/api/hello`)
  // const data = await fetch(`https://${process.env.VERCEL_URL}/api/hello`)
  const data = await fetch(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/hello`)  
  const json = await data.json()
  return (
    <main>
      <h3>{process.env.VERCEL_URL}</h3>
      <h3>{json.name}</h3>
      <h3>hail mary</h3>
    </main>
  )
}
