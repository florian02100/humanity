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

export const ExperiencesData = [
{
    question:'Quels message aimerais-tu partager avec la communauté ?',
    inputType: <InputEditable />,
    name:'biographie'
},
{
    question:'Quels moments de ta vie aimerais-tu nous partager ?',
    inputType: <InputEditable />,
    name:'biographie'
},{
    question:'Quels voyages as-tu fait ?',
    inputType: <InputEditable />,
    name:'biographie'
},{
    question:'Quelles ont été tes plus belles rencontres ?',
    inputType: <InputEditable />,
    name:'biographie'
},{
    question:'Quel est ta plus grande fierté ?',
    inputType: <InputEditable />,
    name:'biographie'
},{
    question:'Quel est ton prochain défi ?',
    inputType: <InputEditable />,
    name:'biographie'
},
]

    //Quels message aimerais-tu partager avec la communauté ?
    //Quels moments de ta vie aimerais-tu nous partager ?
    //Quels voyages as-tu fait ?
    //Quelles ont été tes plus belles rencontres ?
    //Quel est ta plus grande fierté ?
    //Quel est ton prochain défi ?