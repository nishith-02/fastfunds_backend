module.exports = () => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        .heading {
          text-align: center;
        }
        .mid, .footer {
          margin: auto;
          width: 60%;
        }
      </style>
    </head>
    <body>
      <div class="heading">
        <h1>Personal Loan Agreement</h1>
        <hr />
      </div>
      <div class="mid">
        <u><h2>PARTIES</h2></u>
        <p>
          This loan agreement is entered into on 12-02-2023, by and between
          <u>rithika</u> with an address of ____(here in referred to as borrower)
          and <u>nishith</u> with an address of ____(here in referred to as
          "Parties").
        </p>
        <hr />
        <u><h2>INFORMATION</h2></u>
        <p>The parties agree to insert their information</p>
        <u>Name: Rithika</u><br />
        <u>Phone number: 23456789</u><br />
        <u> Email: rithika@gmail.com</u><br />
        <u>Address: jhsxiedui</u><br />
        <u>Amount: 2000</u><br />
        <u>IntrestRate: 2.5%</u><br />
        <u>months: 5</u><br />
      </div>
      <br></br><br></br>
      <div class="footer">
        <u>Signature of borrower</u>
      </div>
    </body>
  </html>
  
    `;
};
