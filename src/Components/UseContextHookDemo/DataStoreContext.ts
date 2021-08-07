import {createContext} from "react";

export interface IUserData{
    FirstName?:string | undefined;
    LastName?:string | undefined;
}

export interface IUserDataChildTrigger{
    OnChildTrigger?:(data:IUserData)=>void
}

export const DataStoreContext=createContext<IUserData & IUserDataChildTrigger | null>(null); // Create Context Hook