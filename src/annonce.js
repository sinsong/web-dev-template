function annonce() {
  window.addEventListener('load', () => {
    console.log(
      '%c web-dev-template %c by literal kernel ',

      [
        'font-size: 18px',
        'color: black',
        'background:white',
        'padding:0.25rem 0',
      ].join(';'),
      [
        'font-size:18px',
        'color:white',
        'background:rgb(100, 149, 237)',
        'padding:0.25rem 0',
      ].join(';')
    )
  })
}

export default annonce
