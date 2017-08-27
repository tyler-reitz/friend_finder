const sbmt = document.getElementById("submit-btn");

sbmt.addEventListener("click", e => {
  e.preventDefault();
  console.log("Hit API");

  const user_response = {
    name: document.getElementById("user_name").value,
    photo: document.getElementById("user_img").value,
    scores: [...document.querySelectorAll("select")].map(slct => slct.value)
  };

  fetch("/api/friends", {
    headers: {
      Accept: "application/json",
      "Content-type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(user_response)
  })
    .then(res => res.json())
    .then(match => {
      console.log(match)

      document.getElementById('modal-match')
        .innerHTML = match.name
      
      document.getElementById('modal-img')
        .setAttribute('src', match.photo)
      
      const modal = document.getElementById('modal')
      modal.classList.toggle('active')
    })
    .catch(e => console.log(e));
});
