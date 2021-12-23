import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploeesList from '../emploees-list/emploees-list';
import EmploeesAddForm from '../emploees-add-form/emploees-add-form';

import './app.css';


const App = () => {

    const data = [
        {name: 'John C.', salary: 800, increase: true, id: 1},
        {name: 'Alex M', salary: 3000 , increase: false, id: 2},
        {name: 'Carl J.', salary: 5000 , increase: false, id: 3},
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmploeesList data={data} />
            <EmploeesAddForm />
        </div>
    );
};

export default App;