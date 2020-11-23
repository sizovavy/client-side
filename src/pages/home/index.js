import React from 'react';
import actions from '../../actions'
import ActionItem from '../../components/actionItem'
import 'react-skeleton-css/styles/skeleton.2.0.4.css'

class HomePage extends React.Component {


    render() {
        return (
            <div className='container'>    

                    <div className = "row">
                        {actions.map((action) => (                            
                               <ActionItem  key={action.id} action={action} />
                            ))}
                    </div>  
            </div>
        );
    }
}

export default HomePage;
