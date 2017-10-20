


  function imprime(data) {

    document.querySelector('#app-container button').addEventListener('click', function() {
      console.log('hiciste click');
    const results = data.body.results
    console.log(results);
    let resultsTable = document.querySelector('.users-list')
    resultsTable.innerHTML = ''
    results.forEach(function(obj) {

      resultsTable.innerHTML += `

      <article>
      <span>${obj.nat}</span>
      <h6>${obj.email}</h6>
    </article>
    `
  })
})
}
export  default imprime;
