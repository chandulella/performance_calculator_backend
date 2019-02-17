const nodemailer=require('nodemailer');

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: 'chandu.sai@venturepact.com',
    pass: 'Chandusai3$',
  },
});

module.exports = {
  sendMail: async function(cpuUsage) {
    let mailOptions = {
      from: 'chandu.sai@venturepact.com',
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



