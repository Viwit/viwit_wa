export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavTitle',
        _children: ['Viwit']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/admin/dashboard',
        icon: 'cil-star'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Conductores',
        to: '/admin/drivers',
        icon: 'cil-puzzle'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Rutas',
        to: '/admin/routes',
        icon: 'cil-puzzle'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Buses',
        to: '/admin/buses',
        icon: 'cil-puzzle'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Usuarios',
        to: '/admin/users',
        icon: 'cil-puzzle'
      }    
    ]
  }
]