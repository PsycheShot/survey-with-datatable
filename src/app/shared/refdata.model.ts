import { McqData } from './mcqdata.model';

import {RespData} from './respdata.model'
export interface RefData{
    ref:string;
    descr:string;
    response:RespData;
}