import express from "express";
import QRCode from "qrcode";

const app = express();
const PORT = 3050;

app.get("/generateQR", async (req, res) => {
  try {
    const url = req.query.url || "https://example.com";
    if (typeof url == "string") {
        const qrCodeImage = await QRCode.toDataURL(url);
        res.send(`<img src="${qrCodeImage}" alt="QR Code"/>`);
    }
  } catch (err) {
    console.error("Error generating QR code:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});