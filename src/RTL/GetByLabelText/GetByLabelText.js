export default function GetByLabelText() {
    return (
        <div>
            <h1>RTL - getByLabelText</h1>

            <label htmlFor="userName">User name</label>
            <input type="text" id="userName" defaultValue="hello" />

            <label htmlFor="skill">Skills</label>
            <input type="checkbox" id="skill" defaultChecked="true"/>
        </div>
    )
}