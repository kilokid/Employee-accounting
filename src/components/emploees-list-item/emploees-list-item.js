import './emploees-list-item.css';

const EmploeesListItem = (props) => {

    const {name, salary, onDelete, onToggleProp, increase, rise} = props;
    let className = "list-group-item d-flex justify-content-between";
    if (increase) {
        className += ' increase'
    }

    if (rise) {
        className += ' like'
    }

    return (
        <li className={className}>
            <span 
                className="list-group-item-label"
                onClick={onToggleProp}
                data-toggle="rise"
            >
                {name}
            </span>
            <input className="list-group-item-input" type="text" defaultValue={salary + '$'}/>
            <div className="d-flex justify-content-center align-items-center">
                <button
                    className="btn-cookie btn-sm"
                    onClick={onToggleProp}
                    data-toggle="increase"
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
};

export default EmploeesListItem;