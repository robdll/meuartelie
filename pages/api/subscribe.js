import mailchimp from "@mailchimp/mailchimp_marketing";
import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware';

//API RESPONSE FORMAT: https://github.com/omniti-labs/jsend

// Initialize the cors middleware
const cors = initMiddleware( Cors({ methods: ['POST'] }) );
mailchimp.setConfig({
  apiKey: process.env.API_KEY_MAILCHIMP,
  server: "us7",  
});


export default async function handler(req, res) {
  await cors(req, res)
  let payload = {}
  if(req.method === 'POST') {
    let mailchimpRes = await postUser(req.body)
    res.statusCode = mailchimpRes.status;
    payload.code = mailchimpRes.status;
    if(mailchimpRes.status === 'subscribed') {
      res.statusCode = 200;
      payload.code = 200;
        res.setHeader('Content-Type', 'application/json')
      payload.status = "success",
      payload.data = { "post" : { status: "subscribed" } }
      res.end(JSON.stringify(payload));
    } else {
      payload.status = "fail",
      res.end()
    }
  }
  else {
    res.statusCode = 404;
    res.end()
  }

}



// TODO: add useful customer field https://mailchimp.com/developer/marketing/api/list-members/add-member-to-list/
async function postUser(b) {
  const body = {
    email_address: b.email_address,
    status: "subscribed",
  };
  // 966766f547 is the list id for website subscriber
  const id = "966766f547";
  return await mailchimp.lists.addListMember(id, body).catch( e => e );
};