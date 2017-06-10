import {createHistory} from "history";
import {useRouterHistory} from "react-router";

const browserHistory = useRouterHistory(createHistory)({
    basename: "/app"
});

export default browserHistory;
