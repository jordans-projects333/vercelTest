

export default async function Home() {
  const ggg = await fetch(`https://${process.env.VERCEL_URL}/api/hello`)
  console.log(ggg)
  return (
    <main>
      <h3>Login</h3>
    </main>
  )
}
