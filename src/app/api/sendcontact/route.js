import {
  tpt,
  mailOptions,
  compileFeedbackTemplate,
  compileContactTemplate,
} from "@/lib/nodemailerClient";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();
  const { full_name, phone, email, message } = data;
  // console.log(data);

  try {
    const mail = tpt.sendMail({
      from: email,
      to: process.env.NEXT_PUBLIC_NODEMAILER_MAIL,
      replyTo: email,
      message: `Novo Contact from Website ${full_name}`,
      html: compileContactTemplate(full_name, phone, email, message),
    });

    return NextResponse.json({ message: "SUCCESS: email was sent" });
  } catch (error) {
    console.log(error);
    NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}

export async function GET() {
  return NextResponse.json({
    asd: "hello",
  });
}
