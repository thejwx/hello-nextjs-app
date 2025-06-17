import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    
    // Log the form data (in production, you'd save this to a database)
    console.log('Form submission:', { name, email })
    
    // Submit to Netlify forms if we're on Netlify
    if (process.env.NETLIFY) {
      try {
        const netlifyFormData = new FormData()
        netlifyFormData.append('form-name', 'my-new-contact')
        netlifyFormData.append('name', name)
        netlifyFormData.append('email', email)
        
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(netlifyFormData as any).toString()
        })
      } catch (netlifyError) {
        console.error('Netlify form submission error:', netlifyError)
        // Continue even if Netlify submission fails
      }
    }
    
    // For standard HTML form submissions, we need to return a redirect response
    // that the browser can follow
    return NextResponse.redirect(new URL('/thank-you', request.url), 303)
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json({ error: 'Form submission failed' }, { status: 500 })
  }
}