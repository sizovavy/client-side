import React from 'react';
import actions from '../../actions';
import SearchForm from '../../components/SearchForm';

class SearchItem extends React.Component {
    state = {
        project: null,
        error: false
    };

    componentDidMount() {      
      
        const project = actions.find(action => action.id === "search");

            this.setState({
                project: project,
                error: !project
            });
       
    }

    render() {
        const { project, error } = this.state;

        if (error){
            console.log(error)
            return <div className='container'>Что-то пошло не так...</div>;
        }
            

        if (!project) return <div className='container'>Loading...</div>;

        return (
             <SearchForm></SearchForm> 
        );
    }
}

export default SearchItem;