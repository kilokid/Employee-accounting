import './emploees-add-form.css';

const EmploeesAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form className="add-form d-flex">
        	    	<input 
                        className="form-control new-post-label"
                        type="text" 
                        placeholder="Как его зовут?"
                    />
                    <input 
                        className="form-control new-post-label"
                        type="number" 
                        placeholder="З/П в $?"
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

export default EmploeesAddForm;