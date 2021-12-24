import { Component } from 'react';

import './emploees-add-form.css';

class EmploeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        }
    }

    onValueChange = (event) => {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: '',
        })
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex" onSubmit={this.onSubmit}>
                        <input 
                            className="form-control new-post-label"
                            type="text" 
                            placeholder="Как его зовут?"
                            name="name"
                            value={name}
                            onChange={this.onValueChange}
                        />
                        <input 
                            className="form-control new-post-label"
                            type="number" 
                            placeholder="З/П в $?"
                            name="salary"
                            value={salary}
                            onChange={this.onValueChange}
                        />
    
                        <button
                            className="btn btn-outline-light"
                            type="submit"
                        >
                            Добавить
                        </button>
                </form>
            </div>
        );
    };
};

export default EmploeesAddForm;