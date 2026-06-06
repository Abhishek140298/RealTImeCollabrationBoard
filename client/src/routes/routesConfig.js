import Board from "../page/Board/Board"
import DashBoard from "../page/Dashboard/Dashboard"
export const routes=[

    {   path:'/',
        isPrivate:false,
        component:DashBoard
    },
    {
        path:'/board/:id',
        isPrivate:false,
        component:Board
    }

]