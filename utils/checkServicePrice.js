const checkServicePrice=(clothType, serviceType)=>{
    if(clothType==='T_shirts' && serviceType==='washing_ironing'){
        const servicePrice = 15
        return servicePrice
    }
    if(clothType==='T_shirts' && serviceType==='only_washing'){
        const servicePrice = 10
        return servicePrice
    }
    if(clothType==='T_shirts' && serviceType==='only_ironing'){
        const servicePrice = 5
        return servicePrice
    }
    if(clothType==='Jeans_Pants' && serviceType==='washing_ironing'){
        const servicePrice = 15
        return servicePrice
    }
    if(clothType==='Jeans_Pants' && serviceType==='only_washing'){
        const servicePrice = 15
        return servicePrice
    }
    if(clothType==='Jeans_Pants' && serviceType==='only_ironing'){
        const servicePrice = 8
        return servicePrice
    }
    if(clothType==='Shirts' && serviceType==='washing_ironing'){
        const servicePrice = 15
        return servicePrice
    }
    if(clothType==='Shirts' && serviceType==='only_washing'){
        const servicePrice = 10
        return servicePrice
    }
    if(clothType==='Shirts' && serviceType==='only_ironing'){
        const servicePrice = 6
        return servicePrice
    }
    if(clothType==='Dhoti' && serviceType==='washing_ironing'){
        const servicePrice = 10
        return servicePrice
    }
    if(clothType==='Dhoti' && serviceType==='only_washing'){
        const servicePrice = 5
        return servicePrice
    }
    if(clothType==='Dhoti' && serviceType==='only_ironing'){
        const servicePrice = 3
        return servicePrice
    }
    if(clothType==='Bedsheets' && serviceType==='washing_ironing'){
        const servicePrice = 30
        return servicePrice
    }
    if(clothType==='Shorts' && serviceType==='only_washing'){
        const servicePrice = 20
        return servicePrice
    }
    if(clothType==='Shorts' && serviceType==='only_ironing'){
        const servicePrice = 15
        return servicePrice
    }
    if(clothType==='Pillow_Covers' && serviceType==='washing_ironing'){
        const servicePrice = 10
        return servicePrice
    }
    if(clothType==='Pillow_Covers' && serviceType==='only_washing'){
        const servicePrice = 8
        return servicePrice
    }
    if(clothType==='Pillow_Covers' && serviceType==='only_ironing'){
        const servicePrice = 4
        return servicePrice
    }
    if(clothType==='Socks' && serviceType==='washing_ironing'){
        const servicePrice = 8
        return servicePrice
    }
    if(clothType==='Socks' && serviceType==='only_washing'){
        const servicePrice = 5
        return servicePrice
    }
    if(clothType==='Socks' && serviceType==='only_ironing'){
        const servicePrice = 3
        return servicePrice
    }
}
module.exports = checkServicePrice