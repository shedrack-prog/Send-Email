const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const sendEmailEthereal = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'reece53@ethereal.email',
      pass: 'WZ1uqazNecYahZwyuY',
    },
  });

  let info = await transporter.sendMail({
    from: '"Shedrack Tobiloba" <usheddy07@gmail.com>',
    to: 'shedrack@gmail.com',
    subject: 'Hello world',
    html: '<h2>Send Email Node js </h2>',
  });
  res.send(info);
};

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'akinrefonsheddy07@gmail.com', // Change to your recipient
    from: 'usheddy07@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  const info = await sgMail.send(msg);
  res.send(info);
};

module.exports = sendEmail;
