import './emploees-list-item.css';

const EmploeesListItem = ({name, salary, increase}) => {
    let className = "list-group-item d-flex justify-content-between";
    if (increase) {
        className += ' increase'
    }

    return (
        <li className={className}>
            <span className="list-group-item-label">{name}</span>
            <input className="list-group-item-input" type="text" defaultValue={salary + '$'}/>
            <div className="d-flex justify-content-center align-items-center">
                <button
                    className="btn-cookie btn-sm"
                    type="button"
                >
                    <i className="fas fa-cookie"></i>
                </button>

                <button
                    className="btn-trash btn-sm"
                >
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
};

export default EmploeesListItem;