import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploeesList from '../emploees-list/emploees-list';
import EmploeesAddForm from '../emploees-add-form/emploees-add-form';

import './app.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C.', salary: 800, increase: true, id: 1},
                {name: 'Alex M', salary: 3000 , increase: false, id: 2},
                {name: 'Carl J.', salary: 5000 , increase: false, id: 3},
            ]
        };
    }

    addId = () => {
        return '_' + Math.random().toString(36).substring(2, 9);
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        });
    };

    addEmploee = (name, salary) => {
        if (name && salary) {
            const newEmploee = {name, salary, increase: false, id: this.addId()}
            this.setState(({data}) => {
                return {
                    data: [...data, newEmploee]
                }
            });
        }
    }

    render() {
        return (
            <div className="app">
                <AppInfo />
    
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
    
                <EmploeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                />
                <EmploeesAddForm 
                    onAdd={this.addEmploee}
                />
            </div>
        );
    }
};

export default App;