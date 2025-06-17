export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center">
          Hello
        </h1>
        <form 
            action="/thank-you/"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            name="my-contacts">
          <input type="hidden" name="form-name" value="my-contacts" />
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