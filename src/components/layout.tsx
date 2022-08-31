import * as React from "react";
import { Link } from "gatsby";
import { FC, ReactNode } from "react";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";

type LayoutProps = {
  pageTitle: string;
  children?: ReactNode;
};

const Layout: FC<LayoutProps> = ({ pageTitle, children }) => (
  <div className={container}>
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link className={navLinkText} to="/">
            Home
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link className={navLinkText} to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
    <main>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  </div>
);

export default Layout;
