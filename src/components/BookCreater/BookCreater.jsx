import React from 'react';
import './BookCreater.css';


class CreateBook extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            author: ''
        }
    }

    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewBook(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Book Title:</label>
                    <input name="title" type="text" value={this.state.title} onChange={this.handleChange} />
                <label>Author:</label>
                    <input name="author" type="text" value={this.state.author} onChange={this.handleChange} />
                <button type="submit" value="Submit">Create Book</button>
            </form>
        );
    }
}

export default CreateBook;