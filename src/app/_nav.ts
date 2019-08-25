interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    title: true,
    name: 'Project'
  },
  {
    name: 'Project Details',
    url: '/project/tables',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Add Project',
    url: '/project/forms',
    icon: 'icon-pencil'
  },
  {
    name: 'Update Project',
    url: '/project/formsupdate',
    icon: 'icon-pencil'
  },
  {
    title: true,
    name: 'Resource'
  },
  {
    name: 'Resource Details',
    url: '/resource/tables',
    icon: 'icon-pie-chart',
  },
  {
    name: 'Add Resource',
    url: '/resource/forms',
    icon: 'icon-pencil',
  },
  {
    name: 'Update Resource',
    url: '/resource/formsupdate',
    icon: 'icon-pencil'
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Template',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Upload',
        url: '/template/upload',
        icon: 'icon-pencil'
      },
      {
        name: 'Search',
        url: '/template/tables',
        icon: 'icon-pie-chart'
      }
    ]
  },
  
  {
    name: 'Burn Sheet',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Create',
        url: '/login',
        icon: 'icon-pencil'
      },
      {
        name: 'Search',
        url: '/register',
        icon: 'icon-cursor'
      },
      {
        name: 'Display',
        url: '/register',
        icon: 'icon-pie-chart'
      }
    ]
  },
  {
    name: 'Task Order',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Create',
        url: '/login',
        icon: 'icon-pencil'
      },
      {
        name: 'Search',
        url: '/register',
        icon: 'icon-cursor'
      },
      {
        name: 'Display',
        url: '/register',
        icon: 'icon-pie-chart'
      }
    ]
  },
 
];
