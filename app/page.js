

export default async function Home() {
  const {name} = await fetch(`https://${process.env.VERCEL_URL}/api/hello`)
  return (
    <main>
      <h3>{name == 'undefined' ? 'boo' : 'yay'}</h3>
    </main>
  )
}
