import { Home } from "../components/pages/Home"
import { Setting } from "../components/pages/Setting"
import { UserManagement } from "../components/pages/UserManagement"
import { Page404 } from "../components/pages/Page404"

export const HomeRouters = [
    {
        path: "/",
        exact: true,
        children: <Home />
    },
    {
        path: "/User_management",
        exact: false,
        children: <UserManagement />
    },
    {
        path: "/setting",
        exact: false,
        children: <Setting />
    },
    {
        path: "*",
        exact: false,
        children: <Page404 />
    },
]