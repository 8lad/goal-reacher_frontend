export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home page</h1>
      <h2>{process.env.DATABASE_URL}</h2>
    </main>
  );
}

