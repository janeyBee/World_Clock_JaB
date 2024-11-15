function updateTime() {
  let visbyElement = document.querySelector('#visby');
  let visbyDateElement = visbyElement.querySelector(' .date');
  let visbyTimeElement = visbyElement.querySelector(' .time');
  let visbyTime = moment().tz('Europe/Stockholm');
  visbyDateElement.innerHTML = `${visbyTime.format('dddd MMMM Do YYYY')}`;
  visbyTimeElement.innerHTML = `${visbyTime.format('h:mm:ss')}
<small>${visbyTime.format('A')}</small>`;

  let santiagoElement = document.querySelector('#santiago');
  let santiagoDateElement = santiagoElement.querySelector(' .date');
  let santiagoTimeElement = santiagoElement.querySelector(' .time');
  let santiagoTime = moment().tz('America/Santiago');
  santiagoDateElement.innerHTML = `${santiagoTime.format('dddd MMMM Do YYYY')}`;
  santiagoTimeElement.innerHTML = `${santiagoTime.format('h:mm:ss')}
<small>${santiagoTime.format('A')}</small>`;

  let serpinsElement = document.querySelector('#serpins');
  let serpinsDateElement = serpinsElement.querySelector(' .date');
  let serpinsTimeElement = serpinsElement.querySelector(' .time');
  let serpinsTime = moment().tz('Europe/Lisbon');
  serpinsDateElement.innerHTML = `${serpinsTime.format('dddd MMMM Do YYYY')}`;
  serpinsTimeElement.innerHTML = `${serpinsTime.format('h:mm:ss')}
<small>${serpinsTime.format('A')}</small>`;
}

updateTime();
setInterval(updateTime, 1000);
