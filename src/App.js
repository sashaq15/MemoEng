import './index.scss';
import { useState, useEffect } from 'react';
import MainPage from './components/MainPage';
import WordPage from './components/WordPage';
import Result from './components/Result';


function App() {

  const [data,setData] = useState({});   
  const [id,setId] = useState(0);
  const [categoryId,setCategoryId] = useState(0);
  const [categorySelected, setCategorySelected] = useState(true);
  const [inputValue, setInputValue] = useState('0');
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [incorrectAnswer, setIncorrectAnswer] = useState([]);
  const [showWordPage, setShowWordPage] = useState(true);




  const handleClick = () => {
    setId(id=> id+1);
    if(inputValue.toLowerCase() === data.rusWords[id].toLowerCase()) {
      setCorrectAnswer(prevId => [...prevId, id]);

    } else {
      setIncorrectAnswer(prevId=>[...prevId, id])
    }

    setInputValue('');
  }

  const handleClickPrev = () => {
    if(id > 0) {setId(id=> id-1)}
    setInputValue('');
  }

  
  const category = categoryId? `category=${categoryId}` : '';

  useEffect (() => {
    fetch(`https://65cefb42bdb50d5e5f5a3788.mockapi.io/photo_data?${category}`)
      .then(res => res.json())
      .then(json => {
        setData(json[0])
      })
      .catch (console.error('url not fetched'))

  },[categoryId])


  return (
    <div className="App">
       {categoryId === 0 ? (
        <MainPage categoryId={categoryId} 
                  setCategoryId ={setCategoryId} 
                  categorySelected ={categorySelected} 
                  setCategorySelected={setCategorySelected} />
       ): (showWordPage ? (<WordPage data={data} 
                  id={id} 
                  handleClickPrev = {handleClickPrev}
                  inputValue={inputValue} 
                  setInputValue={setInputValue}
                  handleClick= {handleClick}
                  correctAnswer ={correctAnswer} />) : null) }

        {
        data.engWords ? 
          (id === data.engWords.length? (
            <Result   data ={data}
                      correctAnswer = {correctAnswer}
                      incorrectAnswer = {incorrectAnswer}
                      setShowWordPage = {setShowWordPage}
            />
    
          ) :  null) : null
 
        }

    </div>
  );
}

export default App;

 
