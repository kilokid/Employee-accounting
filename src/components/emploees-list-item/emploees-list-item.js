import { Component } from 'react';

import './emploees-list-item.css';

class EmploeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false,
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase : !increase,
        }));
    };

    onLike = () => {
        this.setState(({like}) => ({
            like: !like,
        }));
    };

    render() {
        const {name, salary, onDelete} = this.props;
        const { increase } = this.state;
        const { like } = this.state;
        let className = "list-group-item d-flex justify-content-between";
        if (increase) {
            className += ' increase'
        }

        if (like) {
            className += ' like'
        }

        return (
            <li className={className}>
                <span 
                    className="list-group-item-label"
                    onClick={this.onLike}
                >
                    {name}
                </span>
                <input className="list-group-item-input" type="text" defaultValue={salary + '$'}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button
                        className="btn-cookie btn-sm"
                        onClick={this.onIncrease}
                        type="button"
                    >
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button
                        className="btn-trash btn-sm"
                        onClick={onDelete}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
};

export default EmploeesListItem;