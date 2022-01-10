const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'paul.shubhojeet12345@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app ${name}.Let me know how you get along with the app`
    })
}

const sendDeleteEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'paul.shubhojeet12345@gmail.com',
        subject: 'Thankyou for being with us',
        text: `Hi ${name}, let me know if we could have done something to keep tou back.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendDeleteEmail
}



