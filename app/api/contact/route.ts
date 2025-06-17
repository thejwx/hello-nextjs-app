import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    
    // Log the form data (in production, you'd save this to a database)
    console.log('Form submission:', { name, email })
    
    // For standard HTML form submissions, we need to return a redirect response
    // that the browser can follow
    return NextResponse.redirect(new URL('/thank-you', request.url), 303)
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json({ error: 'Form submission failed' }, { status: 500 })
  }
}