import type { VFC } from "react";
import { NavLink } from "src/component/Button";

const items = [
  { href: "/", label: "Root" },
  { href: "/lazy", label: "Lazy" },
  { href: "/createUser", label: "ユーザー作成" },
  { href: "/subscriptionUser", label: "ユーザーサブスクリプション" },
];

/**
 * @package
 */
export const Header: VFC = () => (
  <div>
    <h1>Title</h1>
    <nav>
      {items.map(({ href, label }) => (
        <NavLink key={href} href={href} activeClassName="text-red-500">
          <a className="inline-block p-4">{label}</a>
        </NavLink>
      ))}
    </nav>
  </div>
);
