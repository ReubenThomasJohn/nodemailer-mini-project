const nodemailer = require('nodemailer');
require('dotenv').config();

let mailTransporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: process.env.USER, //'info@dorleco.com',
    pass: process.env.PASSWORD,
  },
});

let details = {
  from: process.env.USER, //'info@dorleco.com',
  to: process.env.TO_MAIL,
  subject: 'Dorleco SIMEV 2.0',
  text: `
  We are excited to announce our upcoming Automotive CAN Protocol Bootcamp, designed to help you gain a comprehensive understanding of the Controller Area Network (CAN) protocol used in the automotive industry.

This 5-day online bootcamp will take place from March 6th to 10th, 2023, and will be conducted completely online. Our instructors will guide you through the fundamentals of the CAN protocol, providing you with a solid foundation for working with automotive networking technology.

At the Automotive CAN Protocol Bootcamp, you will learn:
Introduction to CAN 2.0B specifications
Serial decoding of CAN messages using a USB oscilloscope
Understanding DBC files and decoding the CAN bus data
Developing CAN application software for Dorleco VCU in MATLAB Simulink
Introduction to Raptor and calibration over CAN for Bosch ECU
Live hands on calibration demonstration on a vehicle control unit

The bootcamp is open to anyone interested in learning about the CAN protocol, regardless of their level of experience. Whether you are an automotive engineer, a technician, or simply someone with an interest in automotive networking technology, this bootcamp is for you. Attendees who successfully complete this bootcamp will receive Professional Development Hour (PDH) credits from IEEE.

Don't miss this opportunity to gain a comprehensive understanding of the CAN protocol and its applications in the automotive industry. Register now to secure your spot in the bootcamp. Limited seats remaining!

To register or for more information, visit https://dorleco.com/courses/automotive-can-protocol-bootcamp/ or contact us at info@dorleco.com.

We look forward to seeing you at the Automotive CAN Protocol Bootcamp!
  `,
};

mailTransporter.sendMail(details, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log(info);
  }
});
