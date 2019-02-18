const nodemailer=require('nodemailer');

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.Email,
    pass: process.env.PASSWORD,
  },
});

module.exports = {
  sendMail: async function(cpuUsage) {
    console.log(">>>>",process.env.Email,process.env.PASSWORD)
    let mailOptions = {
      from: process.env.Email,
      to: ["chandulella77@gmail.com"],
      subject: "Generated Report",
      html: `<table>
                <tr>
                  <td align="center"><h1>CPU Utilization</h1></td>
                </tr>
                <tr>
                  <td>
                    <table>
                      <tr>
                        <td>CPU%: ${cpuUsage}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
        `,
    };

    transport.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      }
      console.log(info);
    });
  },
};



