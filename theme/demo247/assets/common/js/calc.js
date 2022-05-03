$(function () {
  jQuery.fn.exists = function () {
    return this.length > 0;
  };
  jQuery.fn.isOverflowed = function () {
    return this[0].scrollWidth > this[0].offsetWidth || this[0].scrollHeight > this[0].offsetHeight;
  };




  const plans = [
    {
        "id": "1",
        "description": "5 days",
        "percent": "0.500",
        "floating_percent": "0",
        "percent_min": "0.000",
        "percent_max": "0.000",
        "count": "0",
        "seconds": "86400",
        "img": "",
        "min": "50.00000000",
        "max": "450.00000000",
        "return": "0",
        "fake_invest": "0.00000000",
        "start_data": "0",
        "end_data": "5",
        "status": "1",
        "delete": "1",
        "period": "5"
    },
    {
        "id": "2",
        "description": "10 days",
        "percent": "0.600",
        "floating_percent": "0",
        "percent_min": "0.000",
        "percent_max": "0.000",
        "count": "0",
        "seconds": "86400",
        "img": "",
        "min": "500.00000000",
        "max": "3950.00000000",
        "return": "0",
        "fake_invest": "0.00000000",
        "start_data": "0",
        "end_data": "0",
        "status": "1",
        "delete": "1",
        "period": "10"
    },
    {
        "id": "3",
        "description": "30 days",
        "percent": "0.700",
        "floating_percent": "0",
        "percent_min": "0.000",
        "percent_max": "0.000",
        "count": "0",
        "seconds": "86400",
        "img": "",
        "min": "4000.00000000",
        "max": "9950.00000000",
        "return": "0",
        "fake_invest": "0.00000000",
        "start_data": "0",
        "end_data": "0",
        "status": "1",
        "delete": "1",
        "period": "30"
    },
    {
        "id": "4",
        "description": "100 days",
        "percent": "0.800",
        "floating_percent": "0",
        "percent_min": "0.000",
        "percent_max": "0.000",
        "count": "0",
        "seconds": "86400",
        "img": "",
        "min": "10000.00000000",
        "max": "29950.00000000",
        "return": "0",
        "fake_invest": "0.00000000",
        "start_data": "0",
        "end_data": "0",
        "status": "1",
        "delete": "1",
        "period": "100"
    },
    {
        "id": "5",
        "description": "165 days",
        "percent": "0.900",
        "floating_percent": "0",
        "percent_min": "0.000",
        "percent_max": "0.000",
        "count": "0",
        "seconds": "86400",
        "img": "",
        "min": "30000.00000000",
        "max": "49950.00000000",
        "return": "0",
        "fake_invest": "0.00000000",
        "start_data": "0",
        "end_data": "0",
        "status": "1",
        "delete": "1",
        "period": "165"
    },
    {
        "id": "6",
        "description": "200 days",
        "percent": "1.000",
        "floating_percent": "0",
        "percent_min": "0.000",
        "percent_max": "0.000",
        "count": "0",
        "seconds": "86400",
        "img": "",
        "min": "50000.00000000",
        "max": "5000000000.00000000",
        "return": "0",
        "fake_invest": "0.00000000",
        "start_data": "0",
        "end_data": "0",
        "status": "1",
        "delete": "1",
        "period": "200"
    },
    {
        "id": "7",
        "description": "285 days",
        "percent": "1.000",
        "floating_percent": "0",
        "percent_min": "0.000",
        "percent_max": "0.000",
        "count": "0",
        "seconds": "86400",
        "img": "",
        "min": "50.00000000",
        "max": "5000000000.00000000",
        "return": "0",
        "fake_invest": "0.00000000",
        "start_data": "0",
        "end_data": "0",
        "status": "1",
        "delete": "1",
        "period": "285"
    },
  ];

  const arrDays = [
  'Day',
  'of the day',
  'Days',
  'Indefinitely',
  'Profit:',
  'Daily profit:',
  'Total:',
  'Total profit:',
  ];
  const arrReturn = [
  'Not',
  'There is',
  ];



  
  const planElem = $('#js-plan');
  const amountElem = $('#js-amount');
  const slider = $('#slider');
  const calcBtn = $('#js-calc');
  if (slider.length) {
    slider.slider({
      animate: true,
      range: 'min',
      slide: function (event, ui) {
        amountElem.val(ui.value);
        calc(ui.value);
      },
    });
  }



  
  change_amount(planElem.val());


  calc(amountElem.val());
  calcBtn.on('click', function () {
    calc(amountElem.val());
  });
  planElem.on('change', function () {
    change_amount($(this).val());
    if (!calcBtn.exists()) {
      calc(amountElem.val());
    }
  });
  amountElem.on('change keyup', function () {
    if (slider.length) {
      slider.slider('option', {
        value: $(this).val(),
      });
    }
    if (!calcBtn.exists()) {
      calc($(this).val());
    }
  });
  
  function calc(amount) {
    amount = Number(amount);
    let plan_id = Number(planElem.val());
    let plan = plans.filter((item) => Number(item.id) === Number(plan_id) && amount >= Number(item.min) && amount <= Number(item.max))[0];
    if (plan) {
      let count = Number(plan['count']);
      let seconds = Number(plan['seconds']);
      let percent = Number(plan['percent']);
      let plan_return = Number(plan['return']);
      let floating_percent = Number(plan['floating_percent']);
      let percent_min = Number(plan['percent_min']);
      let percent_max = Number(plan['percent_max']);
      let period = Number(plan['period']);
      let new_percent = '';
      let new_profit = '';
      let new_total = '';
      if (floating_percent){
        percent = percent_max;
      }
      let profit = amount / 100 * percent;
      let total = profit * (count === 0 ? 1 : count) + Number((plan_return === 1 && count > 0) ? amount : 0);
      let days = '';
      if (count === 0) {
        days = arrDays[3]; 
      } else {
        let day = count * seconds / 86400;
        days = day + ' ' + getWord(day, arrDays);
      }
      let d = 86400 / seconds;
      // setValue('#js-for-profit', count ? arrDays[4] : arrDays[5]);
      // setValue('#js-for-total', count ? arrDays[6] : arrDays[7]);
      setValue('#js-days', days);
      setValue('#js-percent', count ? percent * count : percent);
      setValue('#js-return', arrReturn[plan_return]);
      setValue('#js-profit', (count ? (total - amount) : profit * d * 1).toFixed(2));
      setValue('#js-total', (count ? total : profit * d * period).toFixed(2));

      if (period == 285 && amount >= 500 && amount <= 3999) {
        new_percent = percent + 0.2;
        new_profit = amount / 100 * new_percent;
        new_total = new_profit * (count === 0 ? 1 : count) + Number((plan_return === 1 && count > 0) ? amount : 0);
        setValue('#js-profit', (count ? (new_total - amount) : new_profit * d * 1).toFixed(2));
        setValue('#js-total', (count ? new_total : new_profit * d * period).toFixed(2));
      }

      if (period == 285 && amount >= 4000 && amount <= 9999) {
        new_percent = percent + 0.4;
        new_profit = amount / 100 * new_percent;
        new_total = new_profit * (count === 0 ? 1 : count) + Number((plan_return === 1 && count > 0) ? amount : 0);
        setValue('#js-profit', (count ? (new_total - amount) : new_profit * d * 1).toFixed(2));
        setValue('#js-total', (count ? new_total : new_profit * d * period).toFixed(2));
      }

      if (period == 285 && amount >= 10000 && amount <= 29999) {
        new_percent = percent + 0.6;
        new_profit = amount / 100 * new_percent;
        new_total = new_profit * (count === 0 ? 1 : count) + Number((plan_return === 1 && count > 0) ? amount : 0);
        setValue('#js-profit', (count ? (new_total - amount) : new_profit * d * 1).toFixed(2));
        setValue('#js-total', (count ? new_total : new_profit * d * period).toFixed(2));
      }

      if (period == 285 && amount >= 30000 && amount <= 49999) {
        new_percent = percent + 0.8;
        new_profit = amount / 100 * new_percent;
        new_total = new_profit * (count === 0 ? 1 : count) + Number((plan_return === 1 && count > 0) ? amount : 0);
        setValue('#js-profit', (count ? (new_total - amount) : new_profit * d * 1).toFixed(2));
        setValue('#js-total', (count ? new_total : new_profit * d * period).toFixed(2));
      }

      if (period == 285 && amount >= 50000) {
        new_percent = percent + 1;
        new_profit = amount / 100 * new_percent;
        new_total = new_profit * (count === 0 ? 1 : count) + Number((plan_return === 1 && count > 0) ? amount : 0);
        setValue('#js-profit', (count ? (new_total - amount) : new_profit * d * 1).toFixed(2));
        setValue('#js-total', (count ? new_total : new_profit * d * period).toFixed(2));
      }

    } else {
      setValue('#js-days', '—');
      setValue('#js-percent', '—');
      setValue('#js-return', '—');
      setValue('#js-profit', '—');
      setValue('#js-total', '—');
    }
  }
  
  function change_amount(plan_id) {
    let row = plans.filter((item) => Number(item.id) === Number(plan_id))[0];
    let min = Number(row.min);
    let max = Number(row.max);
    amountElem.val(min);
    if (slider.length) {
      slider.slider('option', {
        min: min,
        max: max,
        value: min
      });
    }
  }
  
  function getWord(number, suffix) {
    let keys = [2, 0, 1, 1, 1, 2];
    let mod = number % 100;
    let suffix_key = (mod > 7 && mod < 20) ? 2 : keys[Math.min(mod % 10, 5)];
    return suffix[suffix_key];
  }
  
  function setValue(elem, value) {
    if ($(elem).exists()) {
      const typesValue = ['INPUT', 'BUTTON', 'TEXTAREA'];
      if (typesValue.indexOf($(elem)[0].tagName) !== -1) {
        if (value === '—') value = '-----';
        $(elem).val(value);
      } else {
        $(elem).html(value);
      }
    }
  }
  
});
