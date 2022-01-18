fetch('https://cat-fact.herokuapp.com/facts/')
  .then((response) => {
    console.log("In response");
   response.json();
  })
  .then(data => console.log(data));
