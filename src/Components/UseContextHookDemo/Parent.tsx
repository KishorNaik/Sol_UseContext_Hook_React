import React, { MouseEvent, useState } from "react";
import { Child } from "./Child";
import { DataStoreContext, IUserData, IUserDataChildTrigger } from "./DataStoreContext";

export const Parent:React.FunctionComponent=():JSX.Element=>{

    //const [user,SetUser]=useState<IUserData|null>(null); // use State Hook
    const [user,SetUser]=useState<IUserData|null>({
        FirstName:"Kishor",
        LastName:"Naik"
    }); // use State Hook


    const OnButtonClickHandler=(event:MouseEvent):void=>{
        SetUser({
            FirstName:"Eshaan",
            LastName:"Naik"
        }); // State Change
    }



    // State Change of Data Store Context
    const UserState:IUserData & IUserDataChildTrigger = {
        FirstName: user?.FirstName,
        LastName: user?.LastName,
        OnChildTrigger: (data: IUserData): void => {
            SetUser({
                FirstName: data?.FirstName,
                LastName: data?.LastName
            });
        }
    };



    return (
        <React.Fragment>
            <DataStoreContext.Provider value={UserState}>
                <div className="container border border-2 border-primary">
                    <div className="row">
                        <div className="col-12">
                            Parent
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            First Name : {user?.FirstName}
                        </div>
                        <div className="col-6">
                            Last Name : {user?.LastName}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button className="btn btn-primary" onClick={OnButtonClickHandler}>On Parent Trigger</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Child></Child>
                        </div>
                    </div>
                </div>
               
                
            </DataStoreContext.Provider>
        </React.Fragment>
    )
}