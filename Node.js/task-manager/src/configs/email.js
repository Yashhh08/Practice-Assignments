const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (name, email) => {
  sgMail
    .send({
      to: email,
      from: "yashyerunkar08@gmail.com",
      subject: "Welocme to Task-Manager",
      text: `Thank you ${name}, for creating an account with us.
      Your registration has been successful, and you can now access all the features and benefits of our platform.`,
    })
    .then(() => {
      console.log("welcome mail send");
    })
    .catch((err) => {
      console.log(err);
    });
};

const sendDeletionMail = (name, email) => {
  sgMail
    .send({
      to: email,
      from: "yashyerunkar08@gmail.com",
      subject: "Account Deletion Confirmation",
      text: `Dear ${name},
      We are sorry to see you go and wanted to confirm that your account has been successfully deleted.
      If you changed your mind and wish to reactivate your account, please feel free to reach out to our support team, and we will be happy to assist you.`,
    })
    .then(() => {
      console.log("Deletion mail send");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  sendWelcomeEmail,
  sendDeletionMail,
};
