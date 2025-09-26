import Header from "@components/header/Header.tsx";
import { Outlet } from "react-router";
import type { ReactNode } from "react";

interface ILayout {
    children?: ReactNode;
}

const Layout = ({ children }: ILayout) => {
    return (
        <>
            <Header />
            {children ?? <Outlet />}
        </>
    );
};

export default Layout;