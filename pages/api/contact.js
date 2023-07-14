require("dotenv").config();
const nodemailer = require("nodemailer");

export default (req, res) => {

  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOption = {
    from: `${email}`,
    to: `${process.env.EMAIL}`,
    subject: `New mail from ${email}`,
    text: `
    ${name} wrote:
    ${message}
    `,
  };

  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      console.log(err);
      res.send("error" + JSON.stringify(err));
    } else {
      console.log("mail sent");
      res.send("success");
    }
  });

};

