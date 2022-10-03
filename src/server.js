/* eslint-disable semi */
/* eslint-disable quotes */
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server ued to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  services: "gmail",
  auth: {
    user: "********@gmail.com",
    pass: ""
  }
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "********@gmail.com",
    subject: "Contact Form Submission - Postfolio",
    html: `<p>Name: ${name}</p>
                <p>Name: ${email}</p>
                <p>Name: ${phone}</p>
                <p>Name: ${message}</p>`
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      req.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
