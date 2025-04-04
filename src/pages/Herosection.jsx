
import style from "./herosection.module.css";
const isAdmin = true; // This should be replaced with actual logic to determine if the user is an admin
const canEdit = true; // This should be replaced with actual logic to determine if the user has edit permissions
export default function Herosection() {
  return(
    <div>
      <p className={style.heroSecHeading}>
        {isAdmin ? "Welcome Admin" : "Welcome User"}
        <div>
          {isAdmin && canEdit ? "edit" : "view" }
        </div>{""}
      </p>
      <span className={style.heroSecSubHeading}> This is our Super react app</span>
    </div>
  );
}



