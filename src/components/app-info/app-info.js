import './app-info.css';

const AppInfo = (props) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {props.length}</h2>
            <h2>Премию получат: {props.increase.length}</h2>
        </div>
    );
};

export default AppInfo;