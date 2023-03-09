const checkOriginalPrice=(clothType, serviceType)=>{
    if(clothType==='T_shirts' && serviceType==='washing_ironing'){
        const originalPrice = 20
        return originalPrice
    }
    if(clothType==='T_shirts' && serviceType==='only_washing'){
        const originalPrice = 15
        return originalPrice
    }
    if(clothType==='T_shirts' && serviceType==='only_ironing'){
        const originalPrice = 8
        return originalPrice
    }
    if(clothType==='Jeans_Pants' && serviceType==='washing_ironing'){
        const originalPrice = 20
        return originalPrice
    }
    if(clothType==='Jeans_Pants' && serviceType==='only_washing'){
        const originalPrice = 20
        return originalPrice
    }
    if(clothType==='Jeans_Pants' && serviceType==='only_ironing'){
        const originalPrice = 10
        return originalPrice
    }
    if(clothType==='Shirts' && serviceType==='washing_ironing'){
        const originalPrice = 20
        return originalPrice
    }
    if(clothType==='Shirts' && serviceType==='only_washing'){
        const originalPrice = 14
        return originalPrice
    }
    if(clothType==='Shirts' && serviceType==='only_ironing'){
        const originalPrice = 9
        return originalPrice
    }
    if(clothType==='Dhoti' && serviceType==='washing_ironing'){
        const originalPrice = 14
        return originalPrice
    }
    if(clothType==='Dhoti' && serviceType==='only_washing'){
        const originalPrice = 8
        return originalPrice
    }
    if(clothType==='Dhoti' && serviceType==='only_ironing'){
        const originalPrice = 5
        return originalPrice
    }
    if(clothType==='Bedsheets' && serviceType==='washing_ironing'){
        const originalPrice = 35
        return originalPrice
    }
    if(clothType==='Shorts' && serviceType==='only_washing'){
        const originalPrice = 23
        return originalPrice
    }
    if(clothType==='Shorts' && serviceType==='only_ironing'){
        const originalPrice = 17
        return originalPrice
    }
    if(clothType==='Pillow_Covers' && serviceType==='washing_ironing'){
        const originalPrice = 15
        return originalPrice
    }
    if(clothType==='Pillow_Covers' && serviceType==='only_washing'){
        const originalPrice = 10
        return originalPrice
    }
    if(clothType==='Pillow_Covers' && serviceType==='only_ironing'){
        const originalPrice = 6
        return originalPrice
    }
    if(clothType==='Socks' && serviceType==='washing_ironing'){
        const originalPrice = 9
        return originalPrice
    }
    if(clothType==='Socks' && serviceType==='only_washing'){
        const originalPrice = 7
        return originalPrice
    }
    if(clothType==='Socks' && serviceType==='only_ironing'){
        const originalPrice = 4
        return originalPrice
    }
}

module.exports = checkOriginalPrice