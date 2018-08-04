import React, {Component} from 'react';
import './Badge.css';

class Badge extends Component {
    constructor(props) {
        super(props);
        console.log("Badge ctor");
        // this.state = {
        //     icon: this.props.icon || 'fa fa-times',
        //     title: this.props.title || 'Badge',
        //     style: this.props.style
        // };
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return <div className="badge" style={this.props.style}>
            <div className="circle">
                <i className={this.props.icon}></i>
            </div>
            <div className="ribbon">{this.props.title}</div>
        </div>;
    }
}

export default Badge;