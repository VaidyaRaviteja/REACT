import { Userdata } from "./Userdata"
import { Usercard } from "./Usercard"
import './Users.css'
export const Users = () => {
  return (
    <div id="users">
        <h2>Users Information</h2>
        <div id="usercardinfo">
            {Userdata.users.map((user) => {
                return (
                    <Usercard emp={user} key={user.id}/>
                )
            })}
        </div>
    </div> 
  )
}
