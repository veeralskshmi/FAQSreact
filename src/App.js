import {useState} from 'react';
import './App.css';

const FaqItem = ({question, answer}) =>{
  const [show , setShow] = useState(false);


  const toggleShow = () => {
    setShow(!show)   //!show true na false panu false na true panu
  };

  return(
    <div className={`faq-item ${show ? "active" : ""}`}>
      <div className='faq-item-header' onClick={toggleShow}>{question}</div>
      <div className='faq-item-body'>
        <div className='faq-item-body-content'>
        {answer}
        </div>
      </div>
    </div>
  )

}

const FaqAccordion =({data})=> {
  return(
    <div className='faq-accordion'>
      <h2>FAQS</h2>
      {data.map((item)=> (
        <FaqItem key={item.id} question={item.question} answer={item.answer} /> ))}
    </div>
  );

};

const data = [{
  id:1, question:"what is React?" , answer:"React is a popular JavaScript library developed by Facebook for building user interfaces, particularly for single-page applications where you want a seamless, interactive user experience without having to reload the page"},
  {id:2, question:"Benefits of React", answer:"React benefits make it a powerful tool for building modern, efficient, and scalable web applications. Its component-based architecture, performance optimizations with the Virtual DOM, strong community support, and flexibility allow developers to create robust and maintainable applications."},
  {id:3, question:"what are the main concept of react", answer:"Definition: Components are the building blocks of a React application. Each component is a JavaScript function or class that optionally accepts inputs (called props) and returns a React element that describes how a section of the UI should appear."},
   {id:4, question:"what is js", answer:"JS stands for JavaScript, which is a high-level, interpreted programming language commonly used in web development. It is one of the core technologies of the World Wide Web, alongside HTML and CSS, and it enables interactive web pages"},

];





function App() {
  return (
    <>
    <div className='App'>
      <FaqAccordion data={data} />

    </div>
    </>
  );
}

export default App;
