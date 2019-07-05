var React = require('react');


class MessageDetail extends React.Component {
    constructor(props) {
        super(props);
    
    }

    render() {
        return (
            <div>
                <h4>{this.props.messageList.title}</h4>
                <p>{this.props.messageList.body}</p>
            </div>
        );
    }
}

export default MessageDetail