

export default async function Home() {
  const ggg = await fetch(`vercel-test-bymdy19d2-jordans-projects333.vercel.app/api/hello`).then(res => res.json())
  console.log(ggg)
  return (
    <main>
      <h3>{ggg.name}</h3>
    </main>
  )
}
