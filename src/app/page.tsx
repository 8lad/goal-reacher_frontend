export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home page</h1>
      <h2>{process.env.NEXT_PUBLIC_BASE_ENDPOINT}</h2>
    </main>
  );
}

