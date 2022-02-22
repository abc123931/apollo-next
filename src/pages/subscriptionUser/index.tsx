import { gql, useSubscription } from "@apollo/client";
import type { VFC } from "react";
import type { User } from "src/type/apolloTypes";

export const SubscriptionUser: VFC = () => {
  const { data, error, loading } =
    useSubscription<{ users: User[] }>(GET_USERS);

  if (error) {
    return <div>エラー</div>;
  }

  if (loading) {
    return <div>...loading</div>;
  }

  return (
    <div>
      <h2>ユーザー一覧</h2>
      {data?.users.length ? (
        <ul>
          {data.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>ユーザーがいません</p>
      )}
    </div>
  );
};

const GET_USERS = gql`
  subscription GetUsers {
    users {
      id
      name
    }
  }
`;
