import axios from 'axios';

axios.get('http://localhost:8081/api/register')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
