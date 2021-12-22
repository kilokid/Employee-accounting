import EmploeesListItem from '../emploees-list-item/emploees-list-item';

import './emploees-list.css';

const EmploeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmploeesListItem />
            <EmploeesListItem />
            <EmploeesListItem />
        </ul>
    );
};

export default EmploeesList;