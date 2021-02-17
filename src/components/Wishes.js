import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import EditWish from './EditWish';
// import NewWish from './NewWish'
// import ShowWish from './ShowWish'
import WishContainer from './WishContainer'



const Wishes = (props) => {
    return (
        <div >
            <Switch>
                {/* <Route path='/whishes/edit/:id' component={EditWish} />
                <Route path='/whishes/new' component={NewWish} />
                <Route path='/whishes/:id' component={ShowWish} /> */}
                <Route path='/wishes' component ={WishContainer} />
            </Switch>
        </div>

    );


}


export default Wishes;