import React from 'react'
import {useState , useEffect} from 'react'
import axios from 'axios';


function Background() {

  const options = {
    method: 'GET',
    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
    headers: {
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': '7c5beedd08msh7f9ce5b1c38325fp16aa7cjsn1bd7aba7b45e',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

  const [to, setTo] = useState('en');
  const [from, setFrom] = useState('en');
 




  return (
    <>
      <div>
        <div>
          From:
          <select name="from" id="select_from">
          <option value="">1</option>
          <option value="">2</option>
        </select>
        To:
        <select name="to" id="select_to">
          <option value="">1</option>
          <option value="">2</option>
        </select>
        </div>
       <textarea name="trans" id="trans" cols="50" rows="10"></textarea>
      </div>
     
    </>
  )
}

export default Background
