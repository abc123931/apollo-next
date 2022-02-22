import { useLazyQuery } from "@apollo/client";
import type { VFC } from "react";
import { Button } from "src/component/Button";
import { GET_USERS } from "src/queries";

export const Lazy: VFC = () => {
  const [getUsers, { data, error, loading }] = useLazyQuery<{
    users: { id: string; name: string }[];
  }>(GET_USERS);
  const handleClick = () => {
    getUsers();
  };

  if (error) {
    return <div>エラー</div>;
  }

  if (loading) {
    return <div>...loading</div>;
  }

  return (
    <div>
      <h2>Lazyユーザー一覧</h2>
      {data?.users.length ? (
        <ul>
          {data.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>ユーザーがいません</p>
      )}
      <Button tag="button" className="p-2" onClick={handleClick}>
        Click me!
      </Button>
    </div>
  );
};
