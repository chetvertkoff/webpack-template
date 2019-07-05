var React = require('react');

class Form extends React.Component{
  constructor(props){
    super(props);
  
  
    this.searchTitle = this.searchTitle.bind(this);
  }

  searchTitle(e){
    this.props.getValue(e);
  }

    render(){
      return(
       <div>
         <form>
            <input placeholder="отфильтровать по названию" value={this.props.value} onChange={this.searchTitle}/>
         </form>
       </div>
      );
    }
  
  }


  export default Form