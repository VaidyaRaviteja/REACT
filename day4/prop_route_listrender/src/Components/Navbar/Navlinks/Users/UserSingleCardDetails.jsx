import React from "react";
import { Userdata } from "./Userdata";
import { useParams } from "react-router-dom";
import './UserSingleCardDetails.css'

export const UserSingleCardDetails = () => {
    const params = useParams()
    const matchedUser = Userdata.users.find((x)=>x.id === Number(params.id))
  return (
    <>
    { matchedUser !== undefined ? ( <div id="singlecard"><div id="singlecardcontent" >
        <img src={matchedUser.image} />
        <div id="singlecardinfo">
            <h1>{matchedUser.username}</h1>
            <p>Blood Group : {matchedUser.bloodGroup}</p>
            <p>Title : {matchedUser.company.title}</p>
            <p>{matchedUser.email}</p>
            <p>{matchedUser.phone}</p>
            <p>{matchedUser.address.country}</p>
        </div>
    </div>
    </div>) : "User data not found"

    }
    </>
  )
}
