import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as GiIcons from 'react-icons/gi';
import * as BiIcons from 'react-icons/bi';

import InputEditable from '../../InputEditable/InputEditable';
import TagInput from './../../../TagInput/TagInput'
import Droparea from '../../../DropArea/droparea';

export const StyleData = [
{
    question:'As-tu des piercings ?',
    inputType: <InputEditable />,
    name:'biographie'
},
{
    question:'As-tu des tatouages ?',
    inputType: <InputEditable />,
    name:'biographie'
},{
    question:'Quels vêtements aimes-tu proter ?',
    inputType: <InputEditable />,
    name:'biographie'
},{
    question:"Aimerais-tu changer de style dans l'avenir ?",
    inputType: <InputEditable />,
    name:'biographie'
},
]

    //Quels vêtements aimes-tu porter ?
    //As-tu des tatouages ?
    //Aimerais-tu changer de style dans l'avenir ?