import express from "express";
import cors from "cors";
import { Resend } from "resend";
import multer from  "multer";
import { Import } from "lucide-react";
import Contact from "../src/components/pages/ContactPage"
import dotenv from "dotenv"
dotenv.config()
const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body ?? {};

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ ok: false, error: "Missing required fields" });
    }

    const { data, error } = await resend.emails.send({
      // مهم: لازم يكون from من دومينك المُوثّق داخل Resend
      from: "ENC Website <onboarding@resend.dev>",
      to: ["ayser.shaqruni1995@gmail.com"], // الإيميل اللي تبي توصله الرسائل
      replyTo: ["ayser.shaqruni1995@gmail.com"],            // عشان لما ترد، يروح لمرسل النموذج
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New message from website</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Phone:</b> ${escapeHtml(phone ?? "-")}</p>
        <hr/>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) return res.status(500).json({ ok: false, error });

    return res.json({ ok: true, data });
  } catch (e: any) {
    return res.status(500).json({ ok: false, error: e?.message || "Server error" });
  }
});
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 7 * 1024 * 1024, // 7MB
  },
  fileFilter: (req, file, cb) => {
    const allowedMime = new Set([
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]);
    if (!allowedMime.has(file.mimetype)) {
      return cb(new Error("Only PDF/DOC/DOCX files are allowed"));
    }
    cb(null, true);
  },
});

// ====== API: Apply with CV ======
// توقع الطلب:
// multipart/form-data
// fields: name, email, phone?, jobTitle?, message?
// file field: cv
app.post("/api/jobs/apply", upload.single("cv"), async (req, res) => {
  try {
    const { name, email,phone, jobtitle, message } = req.body ?? {};
    const file = req.file;

    // if (!name || !email || !file) {
    //   return res.status(400).json({
    //     ok: false,
    //     error: "Missing required fields: name, email, cv",
    //   });
    // }

    // تحويل Buffer إلى Base64 لإرساله كمرفق
    const base64 = file.buffer.toString("base64");

    const subject = `Job Application${jobtitle} (${name}):`

    const { data, error } = await resend.emails.send({
      // لازم from يكون من دومينك الموثّق داخل Resend 3
      from: process.env.FROM_EMAIL || "ENC Website <onboarding@resend.dev>",
      // ✅ هنا تضع الإيميل اللي يستقبل الطلبات
      to: ["ayser.shaqruni1995@gmail.com"],
      replyTo: email, // عشان الرد يروح لمقدم الطلب 4
      subject,
      html: `
        <h2>New Job Application</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Phone:</b> ${escapeHtml(phone || "-")}</p>
        <p><b>Job Title:</b> ${escapeHtml(jobtitle || "-")}</p>
        <hr/>
        <p><b>Message:</b><br/>${escapeHtml(message || "-").replace(/\n/g, "<br/>")}</p>
      `,
      // ✅ Attachments في Resend: filename + content (base64) + contentType اختياري 5
      attachments: [
        {
          filename: file.originalname || "cv.pdf",
          content: base64,
          contentType: file.mimetype,
        },
      ],
    });

    if (error) {
      return res.status(500).json({ ok: false, error });
    }

    return res.json({ ok: true, data });
  } catch (err: any) {
    return res.status(500).json({
      ok: false,
      error: err?.message || "Internal Server Error",
    });
  }
});





function escapeHtml(input: string) {
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

app.listen(3001, () => console.log("API running on http://localhost:3001"));