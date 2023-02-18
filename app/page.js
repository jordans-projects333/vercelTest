

export default async function Home() {
  const ggg = await fetch(`${process.env.VERCEL_URL}/api/hello`).then(res => res.json())
  console.log(ggg)
  return (
    <main>
      <h3>{ggg.name}</h3>
    </main>
  )
}
