import React,{useState} from 'react';
import moment from 'moment';

import './App.css';
function App() {
  // const numbers = [1,2,3,4,5,6,7,8,9,10];
  var x =new Date().toLocaleTimeString()

  const [items, setItems] = React.useState([
   


    {name: 1, code: '#3260a8', startTime: '19', endTime: '20'},
    {name: 2, code: '#3260a8', startTime: '18', endTime: '19'},
    {name: 3, code: '#3260a8', startTime: '17', endTime: '18'},
    {name: 4, code: '#3260a8', startTime: '16', endTime: '17'},
    {name: 5, code: '#3260a8', startTime: '15', endTime: '16'},
    {name: 6, code: '#3260a8', startTime: '14', endTime: '15'},
    {name: 7, code: '#3260a8', startTime: '13', endTime: '14'},
    {name: 8, code: '#3260a8', startTime: '12', endTime: '13'},
    {name: 9, code: '#3260a8', startTime: '11', endTime: '12'},
    {name: 10, code: '#3260a8', startTime: '10', endTime: '11'},




  ]);


  const checkTimer = (item,)=>{

    var time = moment().format('HH'),
      beforeTime = item.startTime,
      afterTime = item.endTime;
    if (time >= afterTime) {
     
      
        return 'pink';
      
    } else {
      var beginningTime = moment(beforeTime);
      var endTime = moment(afterTime);
      console.log(beginningTime.isBefore(endTime));
      return '#3260a8';
    }

  }

  return (
    
    <div className="App">
   <div class="container mt-5 mb-5" >
     <div className='fs-1'>{x}</div>
   
  <div class="row">
    {items.map((number ,ind) =>
    <div class="col-sm-2 border border-3 border-dark m-3 " >
    <div style={{background: checkTimer(number)}} class="content fs-2 py-5 ">{number.name}</div>
  </div>)}

  </div>
</div>
    </div>
  );
}
export default App;





