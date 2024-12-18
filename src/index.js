function updateTime() {
  let visbyElement = document.querySelector('#visby');
  if (visbyElement) {
    let visbyDateElement = visbyElement.querySelector(' .date');
    let visbyTimeElement = visbyElement.querySelector(' .time');
    let visbyTime = moment().tz('Europe/Stockholm');
    visbyDateElement.innerHTML = `${visbyTime.format('dddd MMMM Do YYYY')}`;
    visbyTimeElement.innerHTML = `${visbyTime.format('h:mm:ss')}
<small>${visbyTime.format('A')}</small>`;
  }

  let santiagoElement = document.querySelector('#santiago');
  if (santiagoElement) {
    let santiagoDateElement = santiagoElement.querySelector(' .date');
    let santiagoTimeElement = santiagoElement.querySelector(' .time');
    let santiagoTime = moment().tz('America/Santiago');
    santiagoDateElement.innerHTML = `${santiagoTime.format(
      'dddd MMMM Do YYYY'
    )}`;
    santiagoTimeElement.innerHTML = `${santiagoTime.format('h:mm:ss')}
<small>${santiagoTime.format('A')}</small>`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === 'current') {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace('_', ' ').split('/')[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector('#cities');
  citiesElement.innerHTML = `
  <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format('dddd MMMM Do YYYY')}</div>
        </div>
        <div class="time">${cityTime.format(
          'h:mm:ss'
        )} <small>${cityTime.format('A')}</small></div>
      </div>
      <a href="/">Search another city</a>
      `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector('#city');
citiesSelectElement.addEventListener('change', updateCity);
