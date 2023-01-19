const sgMail = require('@sendgrid/mail');

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const fromEmail = 'takoexerrorx@gmail.com';

const sendEmail = async (data) => {
  const email = { ...data, from: fromEmail };

  // eslint-disable-next-line no-useless-catch
  try {
    await sgMail
      .send(email)
      .then(() => {
        console.log('Email sent');
      })
      .catch((error) => {
        console.error(error);
      });
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = sendEmail;
