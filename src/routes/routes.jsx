import {
  HomeIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  NewspaperIcon,
} from '@heroicons/react/24/outline';
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
        name: 'Calendario',
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
        pathname: '/admin/crm/create',
        name: 'Crear Cliente',
      },
      {
        pathname: '/admin/crm/headquarters',
        name: 'Sedes',
      },
    ],
  },
  {
    isParent: true,
    parent: 'Documentos',
    iconComponent: <NewspaperIcon className="w-3.5 h-3.5"></NewspaperIcon>,
    children: [
      {
        pathname: '/admin/documentos',
        name: 'Documentos',
      },
    ],
  },
];
