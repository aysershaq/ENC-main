import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import TetraPage from '@/components/pages/TetraPage';
import AboutPage from '@/components/pages/AboutPage';
import DevicesPage from '@/components/pages/DevicesPage';
import JobsPage from '@/components/pages/JobsPage';
import ContactPage from '@/components/pages/ContactPage';
import { useLanguageStore } from '@/stores/languageStore';
import { useEffect } from 'react';

// Layout component that includes ScrollToTop
function Layout() {
  const { language } = useLanguageStore();

  useEffect(() => {
    // Set document direction and language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "tetra",
        element: <TetraPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "devices",
        element: <DevicesPage />,
      },
      {
        path: "jobs",
        element: <JobsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
