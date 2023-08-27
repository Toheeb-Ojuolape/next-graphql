import { Channels } from "./Channel";
export interface ApiProps {
    data?: Channels;
    errorData?: any;
    isLoading: boolean;
    direction?:string,
    limit?:number
  }


export interface Error{
  message:string | Map<string,string>
}