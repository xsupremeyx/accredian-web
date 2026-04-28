export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message } = body

    if (!name || !email || !phone) {
      return Response.json(
        { success: false, message: 'Name, email, and phone are required.' },
        { status: 400 }
      )
    }

    // Log the lead
    console.log('New lead enquiry:', { name, email, phone, company, message, timestamp: new Date().toISOString() })

    return Response.json({
      success: true,
      message: "Thanks! We'll be in touch soon.",
    })
  } catch (error) {
    return Response.json(
      { success: false, message: 'Something went wrong.' },
      { status: 500 }
    )
  }
}
