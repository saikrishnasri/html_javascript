document.addEventListener('DOMContentLoaded', () => {

  const selectDrop = document.querySelector('#countries');
  //const selectDrop = document.getElementById('countries');


  fetch('https://restcountries.com/v3.1/all').then(res => {
    return res.json();
  }).then(data => {
    let output = "";
    data.sort(function(a, b) {
      const nameA = a.name.common.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.common.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    data.forEach(country => {
      //a=country.name.common
      output +=`<option value="${country.name.common}">${country.name.common}</option>`;
    })

    selectDrop.innerHTML = output;
  }).catch(err => {
    console.log(err);
  })


});