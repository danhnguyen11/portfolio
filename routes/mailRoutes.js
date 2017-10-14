const Mailer = require('../services/Mailer');
const emailTemplate = require('../services/emailTemplate');

module.exports = app => {

    app.post('/contact/send', async (req,res) => {
        const { name, address, subject, message } = req.body;

        
        const email = {
            name,
            address,
            subject,
            message,
        }

        const mailer = new Mailer(email, emailTemplate(email));
       
       try{ 
        await mailer.send();
        
        res.send({});
       } catch (err) {
           console.log(err);
           res.status(422).send(err);
       }
       
    });


}
