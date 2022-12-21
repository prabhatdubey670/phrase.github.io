import React, { useEffect, useState } from "react";
import TextBox from "./langsubcomp/TextBox";
import Button from "./langsubcomp/Button";
import Modal from "./langsubcomp/Modal";
import { VscArrowSwap } from "react-icons/vsc";
import axios from 'axios'





export default function TextLang() {
  
  
  const [showModal, setShowModal] = useState(false);
  const [inputLanguage, setInputLanguage] = useState("English");
  const [outputLanguage, setOutputLanguage] = useState("Hindi");
  const [languages , setLanguages] = useState(null);

  const getLanguages = async()=>{
    

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
          console.log(response.data)
          const arrayOfdata = Object.keys(response.data.data).map(key=>response.data.data[key])
          setLanguages(arrayOfdata)
        }).catch(function (error) {
          console.error(error);
        });
    }

    function handleChange() {
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);
  }
console.log(languages)

useEffect(()=>{
  getLanguages()
},[])

  return (
    <div className="lang flex mt-10 relative px-5">
      {!showModal && (
        <>
          <TextBox
            style="input"
            SelectedLanguage={inputLanguage}
            setShowModal={setShowModal}
          />
          <VscArrowSwap
            onClick={handleChange}
            className="absolute top-16 align-middle justify-center text-3xl ml-96 left-32 bg-violet-600 text-white rounded-md p-1 cursor-pointer"
          />
          <TextBox
            style="output"
            SelectedLanguage={outputLanguage}
            setShowModal={setShowModal}
          />
        </>
      )}
      {showModal && <Modal setShowModal={setShowModal} 
      languages={languages} />}
    </div>
  );
}
