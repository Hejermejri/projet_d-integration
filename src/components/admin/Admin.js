import React, { Component } from 'react'
import {Admin,Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import Userlist from '../list/Userlist'

export class Manager extends Component {
    render() {
        return (
            <Admin dataProvider={restProvider('http://localhost:9091')}>
                <Resource name='users' list={Userlist}/>
            </Admin>
        )
    }
}

export default Manager