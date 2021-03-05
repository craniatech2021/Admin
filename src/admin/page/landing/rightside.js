import React from 'react';
import {Switch, Route} from 'react-router-dom';
import '../../style/admin.scss';
import Articles from '../articles';
import Audios from '../audios';
import Books from '../books';
import Testimonials from '../testimonials';
import Welcome from './welcome';
import Users from './users';
import Edit from './usersCrud/update'

export default function Right () {
    return (
        <div className='right'>
            <Switch>
            <Route exact path='/' render={() => <Welcome />} />
            <Route exact path='/users' render={() => <Users />} />
            <Route path='/users/:id' render={() => <Edit />} />
            <Route exact path='/articles' component={Articles} />
            <Route exact path='/audios' component={Audios} />
            <Route exact path='/books' component={Books} />
            <Route exact path='/ref' component={Testimonials} />
            </Switch>
        </div>
    )
}