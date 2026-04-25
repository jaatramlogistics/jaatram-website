import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Always log the submission
    console.log('New quote request:', JSON.stringify(data, null, 2));

    const OWNER_EMAIL = 'jaatramlogistics@gmail.com';

    // Build email HTML
    const emailHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:Arial,sans-serif;background:#f4f6f9;padding:20px">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08)">
    <div style="background:#1A2B5E;padding:24px 32px">
      <h1 style="color:#fff;margin:0;font-size:20px">New Quote Request</h1>
      <p style="color:#F5C842;margin:4px 0 0;font-size:13px">Jaatram Logistics Website</p>
    </div>
    <div style="padding:32px">
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:10px 12px;border-bottom:1px solid #eee;color:#666;font-size:13px;width:40%"><strong>Name</strong></td><td style="padding:10px 12px;border-bottom:1px solid #eee;font-size:13px">${data.name || 'N/A'}</td></tr>
        <tr><td style="padding:10px 12px;border-bottom:1px solid #eee;color:#666;font-size:13px"><strong>Email</strong></td><td style="padding:10px 12px;border-bottom:1px solid #eee;font-size:13px"><a href="mailto:${data.email}" style="color:#1A2B5E">${data.email || 'N/A'}</a></td></tr>
        <tr><td style="padding:10px 12px;border-bottom:1px solid #eee;color:#666;font-size:13px"><strong>Phone</strong></td><td style="padding:10px 12px;border-bottom:1px solid #eee;font-size:13px"><a href="tel:${data.phone}" style="color:#1A2B5E">${data.phone || 'N/A'}</a></td></tr>
        <tr><td style="padding:10px 12px;border-bottom:1px solid #eee;color:#666;font-size:13px"><strong>Company</strong></td><td style="padding:10px 12px;border-bottom:1px solid #eee;font-size:13px">${data.company || 'N/A'}</td></tr>
        <tr><td style="padding:10px 12px;border-bottom:1px solid #eee;color:#666;font-size:13px"><strong>Pickup City</strong></td><td style="padding:10px 12px;border-bottom:1px solid #eee;font-size:13px">${data.pickupCity || 'N/A'}</td></tr>
        <tr><td style="padding:10px 12px;border-bottom:1px solid #eee;color:#666;font-size:13px"><strong>Destination</strong></td><td style="padding:10px 12px;border-bottom:1px solid #eee;font-size:13px">${data.destinationCity || 'N/A'}</td></tr>
        <tr><td style="padding:10px 12px;border-bottom:1px solid #eee;color:#666;font-size:13px"><strong>Package Type</strong></td><td style="padding:10px 12px;border-bottom:1px solid #eee;font-size:13px">${data.packageType || 'N/A'}</td></tr>
        <tr><td style="padding:10px 12px;border-bottom:1px solid #eee;color:#666;font-size:13px"><strong>Weight</strong></td><td style="padding:10px 12px;border-bottom:1px solid #eee;font-size:13px">${data.weight || 'N/A'}</td></tr>
        <tr><td style="padding:10px 12px;color:#666;font-size:13px"><strong>Message</strong></td><td style="padding:10px 12px;font-size:13px">${data.message || 'N/A'}</td></tr>
      </table>
      <div style="margin-top:24px;padding:16px;background:#f4f6f9;border-radius:8px">
        <p style="margin:0;font-size:12px;color:#888">This request was submitted via the Jaatram Logistics website quote form.</p>
      </div>
    </div>
  </div>
</body>
</html>
    `.trim();

    // Option 1: Resend (set RESEND_API_KEY in Vercel env vars)
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey && resendKey !== 're_your_key_here') {
      try {
        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'onboarding@resend.dev',
            to: OWNER_EMAIL,
            subject: `New Quote Request from ${data.name || 'website visitor'}`,
            html: emailHtml,
          }),
        });
        if (!res.ok) {
          const err = await res.text();
          console.error('Resend error:', err);
        } else {
          console.log('Email sent via Resend to', OWNER_EMAIL);
        }
      } catch (emailErr) {
        console.error('Resend send failed:', emailErr);
      }
    }

    // Option 2: Nodemailer / Gmail SMTP
    // Set GMAIL_USER=youraddress@gmail.com and GMAIL_APP_PASSWORD=your-app-password in Vercel env vars
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    if (gmailUser && gmailPass) {
      try {
        const nodemailer = await import('nodemailer');
        const transporter = nodemailer.default.createTransport({
          service: 'gmail',
          auth: { user: gmailUser, pass: gmailPass },
        });
        await transporter.sendMail({
          from: `"Jaatram Logistics Website" <${gmailUser}>`,
          to: OWNER_EMAIL,
          subject: `New Quote Request from ${data.name || 'website visitor'}`,
          html: emailHtml,
        });
        console.log('Email sent via Gmail SMTP to', OWNER_EMAIL);
      } catch (gmailErr) {
        console.error('Gmail send failed:', gmailErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Quote API error:', err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
