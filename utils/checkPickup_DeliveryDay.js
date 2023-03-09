const checkPickup_deliveryDay = (hostelBlockDay, hostelBuilding) => {
  const d = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let serviceableDays = [];
  for (const item of hostelBlockDay) {
    if (hostelBuilding === item.blockName) {
      for (const days of item.serviceDays) {
        let index = weekday.indexOf(days);
        serviceableDays.push(index);
      }
    }
  }

  let today = d.getDay();
  if (d.getHours() > 20) {
    if (today === 6) {
      today = 0;
    } else {
      today = today + 1;
    }
  }
  let findDiff = [];
  let positiveWeekdays = [];
  let negativeWeekdays = [];
  let negativeFindDiff = [];
  for (const day of serviceableDays) {
    let diff = day - today;
    if (diff >= 0) {
      findDiff.push(diff);
      positiveWeekdays.push(day);
    } else {
      negativeWeekdays.push(day);
      negativeFindDiff.push(diff);
    }
  }
  if (serviceableDays.length === negativeWeekdays.length) {
    positiveWeekdays = serviceableDays;
    findDiff = serviceableDays;
  }
  const confirmIndex = findDiff.indexOf(Math.min(...findDiff));
  const confirmPickDay = positiveWeekdays[confirmIndex];
  const pickUpDay = weekday[confirmPickDay];

  // Delivery
  let deliveryDayIndex = 0;
  serviceableDays = serviceableDays.sort();
  if (serviceableDays.indexOf(confirmPickDay) + 1 === serviceableDays.length) {
    deliveryDayIndex = 0;
  } else {
    deliveryDayIndex = serviceableDays.indexOf(confirmPickDay) + 1;
  }

  const confirmDeliveryDay = serviceableDays[deliveryDayIndex];
  const deliveryDay = weekday[confirmDeliveryDay];

  // Date
  let finialDay = 0
  if (serviceableDays.length === negativeWeekdays.length) {
    finialDay = -1*Math.max(...negativeFindDiff)
  }
  let delPickDiff = confirmDeliveryDay - confirmPickDay;

  if (delPickDiff < 0) {
    delPickDiff = delPickDiff * -1;
  }
  if (confirmPickDay > confirmDeliveryDay) {
    delPickDiff = delPickDiff - 1;
  }
  const NewDatePickUp = new Date();
  const NewDateDelivery = new Date();
  if (serviceableDays.length === negativeWeekdays.length){
    if (d.getHours() > 20) {
      NewDatePickUp.setDate(NewDatePickUp.getDate() + finialDay + 1);
      NewDateDelivery.setDate(
        NewDateDelivery.getDate() + finialDay + 1 + delPickDiff
      );
    } else {
      NewDatePickUp.setDate(NewDatePickUp.getDate() + finialDay);
      NewDateDelivery.setDate(
        NewDateDelivery.getDate() + finialDay + delPickDiff
      );
    }
  }else{
    if (d.getHours() > 20) {
      NewDatePickUp.setDate(NewDatePickUp.getDate() + Math.min(...findDiff) + 1);
      NewDateDelivery.setDate(
        NewDateDelivery.getDate() + Math.min(...findDiff) + 1 + delPickDiff
      );
    } else {
      NewDatePickUp.setDate(NewDatePickUp.getDate() + Math.min(...findDiff));
      NewDateDelivery.setDate(
        NewDateDelivery.getDate() + Math.min(...findDiff) + delPickDiff
      );
    }
  }
  

  const timings = [NewDatePickUp, NewDateDelivery];

  return timings;
};

module.exports = checkPickup_deliveryDay;
