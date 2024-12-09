import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { DefaultLayout } from "./Layouts/DefaultLayout";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path="/history" element={<History />} />
            </Route>
        </Routes>
    )
}