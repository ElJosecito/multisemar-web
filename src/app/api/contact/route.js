import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nombre, email y mensaje son campos obligatorios' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Por favor ingrese un email válido' },
        { status: 400 }
      );
    }

    // Check if SMTP environment variables are configured
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn('SMTP credentials not configured. Email not sent.');
      return NextResponse.json({
        success: true,
        message: 'Formulario recibido correctamente. Configure las variables de entorno SMTP para habilitar el envío de emails.',
        data: { name, email, service }
      });
    }

    // Create transporter for sending emails
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for port 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content for company (polished, company-branded)
    const companyEmailContent = `
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Nueva Consulta - Multiservicios Martínez</title>
  <style>
    :root{ --primary:#E12926; --accent:#0ea5e9; --muted:#6b7280; --bg:#ffffff; }
    body{ margin:0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; background:var(--bg); color:#111827 }
    .wrap{ max-width:680px; margin:24px auto; border:1px solid #e6e6e6; border-radius:8px; overflow:hidden; box-shadow:0 6px 18px rgba(14,21,47,0.06) }
    .header{ background:linear-gradient(90deg,var(--primary),#c71f20); color:#fff; padding:18px 24px }
    .header h1{ margin:0; font-size:18px; letter-spacing:0.2px }
    .brand{ display:flex; gap:12px; align-items:center }
    .brand .title{ font-weight:700 }
    .body{ padding:20px; background:#fbfdff }
    .row{ display:flex; gap:12px; margin-bottom:12px; align-items:flex-start }
    .label{ min-width:140px; color:var(--muted); font-size:13px }
    .value{ font-size:15px; color:#0f172a }
    .message{ white-space:pre-wrap; background:#fff; border:1px solid #f0f0f0; padding:12px; border-radius:6px }
    .footer{ padding:14px 20px; background:#f8fafc; color:var(--muted); font-size:13px; text-align:center }
    .actions{ margin-top:14px; display:flex; gap:8px }
    .btn{ display:inline-block; padding:8px 12px; border-radius:6px; text-decoration:none; font-weight:600 }
    .btn-primary{ background:var(--primary); color:#fff }
    .meta{ font-size:12px; color:var(--muted) }
    @media (max-width:520px){ .row{ flex-direction:column } .label{ min-width:0 } }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="header">
      <div class="brand">
        <div style="width:44px;height:44px;border-radius:6px;background:#fff;margin-right:8px;display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--primary)">MS</div>
        <div>
          <div class="title">Nueva consulta recibida</div>
          <div class="meta">Multiservicios Martínez — Formulario web</div>
        </div>
      </div>
    </div>
    <div class="body">
      <div style="margin-bottom:8px;color:#111827;font-weight:600">Resumen de contacto</div>

      <div class="row"><div class="label">Nombre</div><div class="value">${name}</div></div>
      <div class="row"><div class="label">Email</div><div class="value">${email}</div></div>
      ${phone ? `<div class="row"><div class="label">Teléfono</div><div class="value">${phone}</div></div>` : ''}
      ${company ? `<div class="row"><div class="label">Empresa</div><div class="value">${company}</div></div>` : ''}
      ${service ? `<div class="row"><div class="label">Servicio de interés</div><div class="value">${service}</div></div>` : ''}

      <div style="margin-top:12px;margin-bottom:6px;color:#111827;font-weight:600">Mensaje</div>
      <div class="message">${message.replace(/\n/g, '<br>')}</div>

      <div style="margin-top:14px" class="meta">Recibido: ${new Date().toLocaleString('es-DO', { timeZone: 'America/Santo_Domingo' })}</div>

      <div class="actions">
        <a href="mailto:${email}" class="btn btn-primary">Responder por email</a>
        <a href="tel:${phone || ''}" class="btn" style="border:1px solid #e5e7eb">Llamar / Agendar</a>
      </div>

      <hr style="margin:18px 0;border:none;border-top:1px solid #eef2f7" />
      <div class="meta">Sugerencia: Asigne la consulta a un agente y registre la respuesta en el CRM.</div>
    </div>
    <div class="footer">Multiservicios Martínez · multiserviciosmartinez@hotmail.com · 809-550-8815</div>
  </div>
</body>
</html>
    `.trim();

    // Email content for client (concise auto-reply)
    const clientEmailContent = `
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <style>
    body{ font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial; color:#111827; margin:0 }
    .box{ max-width:600px;margin:18px auto;padding:18px;border-radius:8px;border:1px solid #eef2f6;background:#fff }
    .brand{ color:#E12926; font-weight:700; margin-bottom:8px }
    .message{ color:#374151 }
    .meta{ margin-top:12px;font-size:13px;color:#6b7280 }
  </style>
</head>
<body>
  <div class="box">
    <div class="brand">Multiservicios Martínez</div>
    <div class="greet">Hola <strong>${name}</strong>,</div>
    <div class="message" style="margin-top:8px">Gracias por contactarnos. Hemos recibido tu mensaje y nuestro equipo lo revisará en breve. Te contactaremos por el medio que indicaste.</div>

    <div style="margin-top:12px;font-size:14px;color:#111827"><strong>Resumen:</strong></div>
    <div style="margin-top:6px;color:#374151"><strong>Servicio:</strong> ${service || 'No especificado'}</div>
    <div style="margin-top:6px;color:#374151"><strong>Mensaje:</strong> ${message}</div>

    <div class="meta">Si no ves nuestra respuesta en 48 horas, por favor llama al 809-550-8815.</div>
  </div>
</body>
</html>
    `.trim();

    const recipientEmail = process.env.RECIPIENT_EMAIL || 'multiserviciosmartinez@hotmail.com';

    // Send email to company
    await transporter.sendMail({
      from: `"Formulario Web" <${process.env.SMTP_USER}>`,
      to: recipientEmail,
      subject: `Nueva consulta de ${name} - ${service || 'Consulta general'}`,
      html: companyEmailContent,
      replyTo: email
    });

    // Send auto-reply to client
    await transporter.sendMail({
      from: `"Multiservicios Martínez" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Gracias por contactarnos - Multiservicios Martínez',
      html: clientEmailContent
    });

    console.log(`Contact form submitted successfully by ${name} (${email})`);

    return NextResponse.json({
      success: true,
      message: 'Mensaje enviado correctamente. Te responderemos pronto.'
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return NextResponse.json(
      { 
        error: 'Error interno del servidor. Por favor intenta nuevamente o contactanos directamente.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Método no permitido. Use POST para enviar formularios.' },
    { status: 405 }
  );
}