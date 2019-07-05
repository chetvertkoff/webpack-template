var React = require('react');

import MessageDetail from './MessageDetail';
import IsEmpty from './IsEmpty';

class Messages extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            messages:this.props.arrData
        }    
    }

    removeMessage(index){
     this.props.updateIndex(index)
    }

    render() {  
        const e =  Array.from(this.props.changeData).length >=1  ?  Array.from(this.props.changeData) : Array.from(this.state.messages)
        const empty = this.state.messages.length == 0 && <IsEmpty/>;
        const single =  e.map((singleMessage,index) =>
        <li className="bg-light"  key={singleMessage.id}>
            <MessageDetail messageList={singleMessage} />
            <input type="submit" value="Прочитал" onClick={this.removeMessage.bind(this,index)}/>
        </li>
        )
        
        return (
            <div>
                <ul>
                    {single}
                </ul>
                {empty}
            </div>
        );
    }
}

export default Messages