import { mailtrapClient, sender } from './mailtrap.config.js'
import {VERIFICATION_EMAIL_TEMPLATE} from './emailTemplates.js'

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{email}]

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification"

        })
        console.log("Email sent successfully", response)
    } catch (error) {
        console.log(`Error sending verification`, error);

        throw new Error(`Error sending verification email : ${error}`)
    }
}


export const sendWelcomeEmail = async (email, name) =>{
    const recipient = [{email}];

    try {
        
       const response =  await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid:"200a53a7-fb61-4943-ac8f-791c4df935fe",
            template_variables:{
                "name": name
            },
        });

        console.log("email sent successfully", response);
    } catch (error) {
        console.error(`error sending welcome email`, error);

        throw new Error(`Error sending welcome email:${error}`)
    }
}