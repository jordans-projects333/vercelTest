

export default async function Home() {
  const {name} = await fetch(`https://${process.env.VERCEL_URL}/api/hello`)
  return (
    <main>
      <h3>{name}</h3>
    </main>
  )
}
