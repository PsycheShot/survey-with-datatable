import {PageData} from './pagedata.model'
export interface SurveyData{
    name:string;
    organisation:string;
    responsibility:string;
    mobile:string;
    email:string;
    survey:PageData[];
}