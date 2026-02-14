import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, companyName, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the form submission
    console.log('=== Contact Form Submission ===');
    console.log('Name:', firstName, lastName);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Company:', companyName || 'N/A');
    console.log('Message:', message);
    console.log('Submitted at:', new Date().toISOString());
    console.log('================================');

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for contacting us! We have received your message and will get back to you within 24 hours.'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred while submitting your message. Please try again.' },
      { status: 500 }
    );
  }
}
