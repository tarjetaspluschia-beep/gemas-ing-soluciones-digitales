import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, company, email, phone, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact email for:", { name, email, company });

    // Send notification to company
    const companyEmailResponse = await resend.emails.send({
      from: "GEMAS Bioseguridad <onboarding@resend.dev>",
      to: ["info@gemasbioseguridad.com"], // Replace with actual company email
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    // Send confirmation to user
    const userEmailResponse = await resend.emails.send({
      from: "GEMAS Bioseguridad <onboarding@resend.dev>",
      to: [email],
      subject: "Hemos recibido tu mensaje",
      html: `
        <h1>¡Gracias por contactarnos, ${name}!</h1>
        <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.</p>
        <p>Tu mensaje:</p>
        <p style="background-color: #f4f4f4; padding: 15px; border-radius: 5px;">${message}</p>
        <p>Saludos,<br>El equipo de GEMAS Bioseguridad</p>
      `,
    });

    console.log("Emails sent successfully:", { companyEmailResponse, userEmailResponse });

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
