import { addManyCustomersAction } from "../store/customer-reducer"

export const fetchCustomers = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => dispatch(addManyCustomersAction(json)))
}
