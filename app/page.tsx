export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center">
          Hello!
        </h1>
        <form
            name="my-new-contact"
            data-netlify="true"
            data-netlify-redirect="/thank-you"
            netlify-honeypot="bot-field"
            method="POST">
            <input type="hidden" name="form-name" value="my-new-contact" />
            <input type="hidden" name="bot-field" />
            <p>
              <label>Name <input type="text" name="name" required /></label>
            </p>
            <p>
              <label>Email <input type="email" name="email" required /></label>
            </p>
            <p>
              <input type="submit" value="Submit"/>
            </p>
        </form>
      </div>
    </main>
  )
}