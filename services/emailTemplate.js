const keys = require('../config/keys');

module.exports = email => {
    return  `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>Message from ${email.name} with email adress of ${email.address}</h3>
                    <p>Subject: ${email.subject}</p>
                    <p>${email.message}</p>
                </div>
            </body>
        </html>
    
    
    `;
};