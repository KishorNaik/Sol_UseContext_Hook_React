import React,{MouseEvent, useContext} from "react";
import { DataStoreContext, IUserData, IUserDataChildTrigger } from "./DataStoreContext";

export const Child:React.FunctionComponent=():JSX.Element=>{

    const user=useContext<(IUserData & IUserDataChildTrigger) | null>(DataStoreContext);

    const OnButtonClickHandler=(event:MouseEvent):void=>{
        user!.FirstName="Yogesh";
        user!.LastName="Naik";

        user?.OnChildTrigger!(user);
    }

    return (
        <React.Fragment>
            <div className="container border border-2 border-secondary mt-3">
                <div className="row">
                    <div className="col-12">
                        Child
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
                        <button className="btn btn-secondary" onClick={OnButtonClickHandler}>On Child Trigger</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}