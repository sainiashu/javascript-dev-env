import './index.css';

import {getUsers} from './api/userApi';
//import { get } from 'http';

//Populate table of users via api call
getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody+= `<tr>
    <td><a href="#" data-t-id="${user.id}" class="deleteUser">Delete</a></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>`

  });

  global.document.getElmentById('users').innerHTML = usersBody;
});
// import numeral from 'numeral';

// const cousreValue = numeral(1000).format('$0,0.00'); //eslint-disable-line no-console
// console.log(`I would pay ${courseValue},for this course!`);