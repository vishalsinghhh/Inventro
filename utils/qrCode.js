const QRCode = require('qrcode')


const QrGenerator = async text =>{
    try {
        console.log(await QRCode.toDataURL(text))
    } catch (error) {
        console.log(error);
    }
}

QrGenerator('404. User not found!')