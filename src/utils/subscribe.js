import request from 'superagent';

export default function subscribe(email) {
  console.log(email);
  // Send POST request to '/subscribe', send email as data
  request
    .post('/subscribe')
    .send({ email: email })
    .end(function(err, res) {
      if (err) {
        // Throw error in browser
        throw new Error("Bad response from server");
      }
      console.log(JSON.parse(res.text));
    });
}
