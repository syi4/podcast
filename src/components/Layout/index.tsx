import { FC, ReactNode } from "react";

interface LayoutProps {
  className: string;
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default Layout;
