import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($input: users_set_input!, $id: uuid!) {
    updateUser(_set: $input, pk_columns: { id: $id }) {
      id
      name
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: uuid!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($input: users_insert_input!) {
    insertUser(object: $input) {
      id
      name
    }
  }
`;

export const SUBSCRIPTION_GET_USERS = gql`
  subscription GetUserSubscription {
    users {
      id
      name
    }
  }
`;
