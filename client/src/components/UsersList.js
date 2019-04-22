import React from 'react'
import { Image, List, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { getUsers } from '../actions/userActions';

class UsersList extends React.Component {

  render() {
    return (
      this.props.users.map(user => {
        return (
          <List selection verticalAlign='middle'>
            <List.Item active>
              <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
              <List.Content>
                <List.Header>{user.name}</List.Header>
              </List.Content>
            </List.Item>
          </List>
        )
      })
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users
  }
}


export default connect(mapStateToProps, { getUsers })(UsersList);