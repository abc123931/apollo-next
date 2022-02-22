import { gql } from "@apollo/client";
import * as ApolloReactCommon from "@apollo/client";
import * as ApolloReactHooks from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: string;
  uuid: string;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars["String"]>;
  _gt?: InputMaybe<Scalars["String"]>;
  _gte?: InputMaybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]>;
  _in?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]>;
  _lt?: InputMaybe<Scalars["String"]>;
  _lte?: InputMaybe<Scalars["String"]>;
  _neq?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]>;
  _nin?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]>;
};

/** mutation root */
export type MutationRoot = {
  __typename?: "mutation_root";
  /** delete single row from the table: "users" */
  deleteUser?: Maybe<Users>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "users" */
  insertUser?: Maybe<Users>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  updateUser?: Maybe<Users>;
  /** update data of the table: "users" */
  update_users?: Maybe<UsersMutationResponse>;
};

/** mutation root */
export type MutationRootDeleteUserArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type MutationRootDeleteUsersArgs = {
  where: UsersBoolExp;
};

/** mutation root */
export type MutationRootInsertUserArgs = {
  object: UsersInsertInput;
  on_conflict?: InputMaybe<UsersOnConflict>;
};

/** mutation root */
export type MutationRootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  on_conflict?: InputMaybe<UsersOnConflict>;
};

/** mutation root */
export type MutationRootUpdateUserArgs = {
  _set?: InputMaybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateUsersArgs = {
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  ASC = "asc",
  /** in ascending order, nulls first */
  ASC_NULLS_FIRST = "asc_nulls_first",
  /** in ascending order, nulls last */
  ASC_NULLS_LAST = "asc_nulls_last",
  /** in descending order, nulls first */
  DESC = "desc",
  /** in descending order, nulls first */
  DESC_NULLS_FIRST = "desc_nulls_first",
  /** in descending order, nulls last */
  DESC_NULLS_LAST = "desc_nulls_last",
}

export type QueryRoot = {
  __typename?: "query_root";
  /** fetch data from the table: "users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
};

export type QueryRootUserArgs = {
  id: Scalars["uuid"];
};

export type QueryRootUsersArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

export type QueryRootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

export type SubscriptionRoot = {
  __typename?: "subscription_root";
  /** fetch data from the table: "users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
};

export type SubscriptionRootUserArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionRootUsersArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

export type SubscriptionRootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars["timestamptz"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]>>;
};

/**
 * ユーザーテーブル
 *
 *
 * columns and relationships of "users"
 *
 */
export type Users = {
  __typename?: "users";
  created_at: Scalars["timestamptz"];
  id: Scalars["uuid"];
  name: Scalars["String"];
  updated_at: Scalars["timestamptz"];
};

/** aggregated selection of "users" */
export type UsersAggregate = {
  __typename?: "users_aggregate";
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type UsersAggregateFields = {
  __typename?: "users_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
};

/** aggregate fields of "users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UsersSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "users" */
export enum UsersConstraint {
  /** unique or primary key constraint */
  USERS_PKEY = "users_pkey",
}

/** input type for inserting data into table "users" */
export type UsersInsertInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  name?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: "users_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: "users_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** response of any mutation on the table "users" */
export type UsersMutationResponse = {
  __typename?: "users_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  update_columns?: Array<UsersUpdateColumn>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Ordering options when selecting data from "users". */
export type UsersOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: users */
export type UsersPkColumnsInput = {
  id: Scalars["uuid"];
};

/** select columns of table "users" */
export enum UsersSelectColumn {
  /** column name */
  CREATED_AT = "created_at",
  /** column name */
  ID = "id",
  /** column name */
  NAME = "name",
  /** column name */
  UPDATED_AT = "updated_at",
}

/** input type for updating data in table "users" */
export type UsersSetInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  name?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]>;
};

/** update columns of table "users" */
export enum UsersUpdateColumn {
  /** column name */
  CREATED_AT = "created_at",
  /** column name */
  ID = "id",
  /** column name */
  NAME = "name",
  /** column name */
  UPDATED_AT = "updated_at",
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars["uuid"]>;
  _gt?: InputMaybe<Scalars["uuid"]>;
  _gte?: InputMaybe<Scalars["uuid"]>;
  _in?: InputMaybe<Array<Scalars["uuid"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["uuid"]>;
  _lte?: InputMaybe<Scalars["uuid"]>;
  _neq?: InputMaybe<Scalars["uuid"]>;
  _nin?: InputMaybe<Array<Scalars["uuid"]>>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = { __typename?: "query_root" } & {
  users: Array<{ __typename?: "users" } & Pick<Users, "id" | "name">>;
};

export type UpdateUserMutationVariables = Exact<{
  input: UsersSetInput;
  id: Scalars["uuid"];
}>;

export type UpdateUserMutation = { __typename?: "mutation_root" } & {
  updateUser?: Maybe<{ __typename?: "users" } & Pick<Users, "id" | "name">>;
};

export type DeleteUserMutationVariables = Exact<{
  id: Scalars["uuid"];
}>;

export type DeleteUserMutation = { __typename?: "mutation_root" } & {
  deleteUser?: Maybe<{ __typename?: "users" } & Pick<Users, "id">>;
};

export type CreateUserMutationVariables = Exact<{
  input: UsersInsertInput;
}>;

export type CreateUserMutation = { __typename?: "mutation_root" } & {
  insertUser?: Maybe<{ __typename?: "users" } & Pick<Users, "id" | "name">>;
};

export type GetUserSubscriptionSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type GetUserSubscriptionSubscription = {
  __typename?: "subscription_root";
} & { users: Array<{ __typename?: "users" } & Pick<Users, "id" | "name">> };

export const GetUsersDocument = gql`
  query GetUsers {
    users {
      id
      name
    }
  }
`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options
  );
}
export function useGetUsersLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options
  );
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<
  typeof useGetUsersLazyQuery
>;
export type GetUsersQueryResult = ApolloReactCommon.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>;
export const UpdateUserDocument = gql`
  mutation UpdateUser($input: users_set_input!, $id: uuid!) {
    updateUser(_set: $input, pk_columns: { id: $id }) {
      id
      name
    }
  }
`;
export type UpdateUserMutationFn = ApolloReactCommon.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >(UpdateUserDocument, options);
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;
export type UpdateUserMutationResult =
  ApolloReactCommon.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export const DeleteUserDocument = gql`
  mutation DeleteUser($id: uuid!) {
    deleteUser(id: $id) {
      id
    }
  }
`;
export type DeleteUserMutationFn = ApolloReactCommon.MutationFunction<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >(DeleteUserDocument, options);
}
export type DeleteUserMutationHookResult = ReturnType<
  typeof useDeleteUserMutation
>;
export type DeleteUserMutationResult =
  ApolloReactCommon.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;
export const CreateUserDocument = gql`
  mutation CreateUser($input: users_insert_input!) {
    insertUser(object: $input) {
      id
      name
    }
  }
`;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<
    CreateUserMutation,
    CreateUserMutationVariables
  >(CreateUserDocument, options);
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;
export type CreateUserMutationResult =
  ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export const GetUserSubscriptionDocument = gql`
  subscription GetUserSubscription {
    users {
      id
      name
    }
  }
`;

/**
 * __useGetUserSubscriptionSubscription__
 *
 * To run a query within a React component, call `useGetUserSubscriptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetUserSubscriptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserSubscriptionSubscription({
 *   variables: {
 *   },
 * });
 */
export function useGetUserSubscriptionSubscription(
  baseOptions?: ApolloReactHooks.SubscriptionHookOptions<
    GetUserSubscriptionSubscription,
    GetUserSubscriptionSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useSubscription<
    GetUserSubscriptionSubscription,
    GetUserSubscriptionSubscriptionVariables
  >(GetUserSubscriptionDocument, options);
}
export type GetUserSubscriptionSubscriptionHookResult = ReturnType<
  typeof useGetUserSubscriptionSubscription
>;
export type GetUserSubscriptionSubscriptionResult =
  ApolloReactCommon.SubscriptionResult<GetUserSubscriptionSubscription>;
