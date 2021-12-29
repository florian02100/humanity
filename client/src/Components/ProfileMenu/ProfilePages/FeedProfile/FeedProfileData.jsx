import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as GiIcons from 'react-icons/gi';
import * as BiIcons from 'react-icons/bi';

import InputEditable from '../../InputEditable/InputEditable';
import TagInput from '../../../TagInput/TagInput'
import Droparea from '../../../DropArea/droparea';

export const FeedProfileData = [
{
    question:'Biographie',
    inputType: <InputEditable />,
    name:'biographie'
},
{
    question:'Où habites-tu ?',
    inputType: <InputEditable />,
    name:'emploi'
},
{
    question:'Que voulais-tu faire en étant petit ?',
    inputType: <InputEditable />,
    name:'emploi'
},
{
    question:"Que veux-tu faire dans l'avenir ?",
    inputType: <InputEditable />,
    name:'emploi'
},
{
    question:'Genre',
    inputType: <TagInput />,
    name:'emploi'
},
{
    question:'Situation amoureuse',
    inputType: <TagInput/>,
    name:'emploi'
},{
    question:"Quelles sont tes passions / centres d'intérêts ?",
    inputType: <TagInput />,
    name:'emploi'
},{
    question:"Partage nous tes réalisations",
    inputType: <Droparea />,
    name:'emploi'
},{
    question:"Pourquoi as-tu choisi cet art ?",
    inputType: <InputEditable />,
    name:'emploi'
},{
    question:"Raconte-nous quelque chose de plus !?",
    inputType: <InputEditable />,
    name:'emploi'
},
]