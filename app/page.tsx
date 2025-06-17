export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center">
          Hello
          <form name="new-contact" netlify>
            <p>
                <label>Name <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Email <input type="email" name="email" /></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
            </form>
        </h1>
      </div>
    </main>
  )
}