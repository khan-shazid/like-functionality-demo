import { FallbackComponent } from 'app/components/fallback-component/fallback-component';
import { ReactNode, Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const LikeDemo = lazy(() => import('app/pages/like-demo/like-demo'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <LikeDemo />,
    },
]);

export default function Routes(): ReactNode {
    return (
        <Suspense fallback={<FallbackComponent />}>
            <RouterProvider router={router} />
        </Suspense>
    );
}
