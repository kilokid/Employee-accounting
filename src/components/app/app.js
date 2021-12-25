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
                {name: 'John C.', salary: 800, increase: true, rise: false, id: this.addId()},
                {name: 'Alex M', salary: 3000 , increase: false, rise: true, id: this.addId()},
                {name: 'Carl J.', salary: 5000 , increase: false, rise: false, id: this.addId()},
            ],
            term: '',
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
        if (name && name.length >= 3 && salary) {
            const newEmploee = {name, salary, increase: false, rise: false, id: this.addId()}
            this.setState(({data}) => {
                return {
                    data: [...data, newEmploee]
                }
            });
        }
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]};
                }
                return item;
            })
        }));
    }

    searchEmp = (items, term) => {
        if (term.length <= 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        });
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    render() {
        const {data, term} = this.state;
        const visibleData = this.searchEmp(data, term);

        return (
            <div className="app">
                <AppInfo 
                    length={data.length}
                    increase={data.filter(item => item.increase === true)}
                />
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter />
                </div>
    
                <EmploeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmploeesAddForm 
                    onAdd={this.addEmploee}
                />
            </div>
        );
    }
};

export default App;