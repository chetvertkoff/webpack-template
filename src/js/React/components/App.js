var React = require('react');

    var request = new XMLHttpRequest();
    var requestURL = 'https://jsonplaceholder.typicode.com/posts';
    request.open('GET', requestURL, false);
    request.send();
    var response = request.responseText;
    window.data = JSON.parse(response).slice(0,10);


import Form from '../components/Form'
import AppReady from '../components/AppReady'
import Messages from "../components/Messages";



class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      arrData : data,
      setValue:""

    }
   this.updateIndex= this.updateIndex.bind(this);
   this.getValue= this.getValue.bind(this);
   
  }


  updateIndex(index){   
    this.state.arrData.splice(index,1);
    this.setState({
      arrData:this.state.arrData
    })
  }

  getValue(e){
   const loadData = data.slice(0,10);
   var value = e.target.value.toLowerCase();
   if(value.length > 0){
    find = loadData.filter(
        function(item){
          if(item.title.includes(value)) return true
        }
      )
   }
   else{
     find = [];
   }

    this.setState({
      setValue: value
    })


  }

  render() {

    return (
      <div className="container">
        <AppReady />
        <Form getValue={this.getValue}  value={this.state.searchValue}/>
        <Messages arrData={this.state.arrData} changeData={find} updateIndex={this.updateIndex}/>
      </div>
    );
  }
}

export default App





