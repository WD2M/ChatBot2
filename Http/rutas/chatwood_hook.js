const express = require('express')
const router = express.Router()
const { join } = require('path')
const { createReadStream } = require('fs')


const chatwoodHook = async (req, res) => {
  const providerWs = req.providerWs
  const body = req.body
  if (body?.private) {
    res.send(null)
    return
  }
  const phone = body?.conversation?.meta?.sender?.phone_number.replace('+', '')
  providerWs.sendText(`${phone}@c.us`, body.content)
  res.send(body)
}
router.post('/chatwood_hook', chatwoodHook)
router.get("/empresas", async (_, res) => {
  const YOUR_PATH_QR = join(process.cwd(), `bot.qr.png`);
  const fileStream = createReadStream(YOUR_PATH_QR);

  res.writeHead(200, { "Content-Type": "image/png" });
  fileStream.pipe(res);
})
/*router.get("/get-qr2", async (_, res) => {
  const YOUR_PATH_QR = join(process.cwd(), `bot-2.qr.png`);
  const fileStream = createReadStream(YOUR_PATH_QR);

  res.writeHead(200, { "Content-Type": "image/png" });
  fileStream.pipe(res);
});*/


module.exports = router