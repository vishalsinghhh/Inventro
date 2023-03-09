const createTokenUser = (user) =>{
    return {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phone: user.phone,
        userId: user._id,
        role: user.role,
        isVerified: user.isVerified,
        qrCodeImg: user.qrCodeImg,
      }
}

module.exports = createTokenUser