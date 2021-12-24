import EmploeesListItem from '../emploees-list-item/emploees-list-item';

import './emploees-list.css';

const EmploeesList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmploeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(event) => onToggleProp(id, event.currentTarget.getAttribute('data-toggle'))}
            />
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default EmploeesList;