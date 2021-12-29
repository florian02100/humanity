import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as GiIcons from 'react-icons/gi';
import * as BiIcons from 'react-icons/bi';

import General from './ProfilePages/General/General'

export const SidebarData = [
{

    title: 'Général',
    path:'/profil/General',
    icon:<AiIcons.AiOutlineUser />,
    cName: 'nav-text-profile'
},
{
    title:'Paramètres',
    path:'/profil/Parametres',
    icon:<MdIcons.MdSettings />,
    cName: 'nav-text-profile'
}
]