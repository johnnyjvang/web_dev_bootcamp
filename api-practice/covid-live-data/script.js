const submit_button = document.getElementById('country');
const myForm = document.getElementById('myform');

// submit_button.onclick  = () =>{
//   alert('hellos')
// }

myForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  let input_data = submit_button.value;
  // alert(input_data);

  //fetch request to the covid19API
  const url = "https://api.covid19api.com/dayone/country/" + input_data +  "/status/confirmed"
  console.log(url);
  fetch('url')
  .then((res)=> res.json())
  .then((res)=> console.log(res));


})
