import {McqData} from './mcqdata.model'
export interface RespData{
    mcq:McqData[];
    suggestion:string;
}