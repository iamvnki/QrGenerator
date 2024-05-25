function User (props) {
    return <div className="card-container">
        <span className={props.online?"pro online":"pro offline"}>{props.online?"Online":"Offline"}</span>
        <img src={props.profile} alt="imgage" className="img" width={100} />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.desctiption}</p>
        <div className="button">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h6>skills</h6>
            <ul>
                {props.skills.map((call,index) => (
                    <li key={index}>{call}</li>
                ))}
            </ul>
        </div>
    </div>
}

export const UserCard = () => {
  return (
    <div>
        <User name="venkatesh" city="pondy" desctiption="front-end developer" skills={["fornt end deveopler","ui/ux","css","javascipt","react","node" ]} online={false} profile="images/img2.jpg" />
        <User name="jayakumar" city="pondy" desctiption="digital marketing" skills={["unkown" ]} online={true} profile="images/img1.jpg" />
        <User name="jayakumar" city="pondy" desctiption="digital marketing" skills={["unkown" ]} online={false} profile="images/img1.jpg" />
    </div>
  )
}
