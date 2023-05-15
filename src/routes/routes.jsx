import { HomeIcon, CalendarDaysIcon, UserGroupIcon } from '@heroicons/react/24/outline';
export const appRoutes = [
  // {
  //   isParent: false,
  //   parent: 'Dashboard',
  //   pathname: '/admin/dashboard',
  //   iconComponent: <HomeIcon className="w-3.5 h-3.5" />,
  // },
  {
    parent: 'Planning',
    isParent: true,
    iconComponent: <CalendarDaysIcon className="w-3.5 h-3.5" />,
    children: [
      {
        pathname: '/admin/planning/calendar',
        name: 'Calendar',
      },
      {
        pathname: '/admin/planning/services',
        name: 'Servicios',
      },
    ],
  },
  {
    isParent: true,
    parent: 'CRM',
    iconComponent: <UserGroupIcon className="w-3.5 h-3.5"></UserGroupIcon>,
    children: [
      {
        pathname: '/admin/crm/customers',
        name: 'Clientes',
      },
      {
        pathname: '/admin/crm/customer',
        name: 'Crear Cliente',
      },
    ],
  },
];
