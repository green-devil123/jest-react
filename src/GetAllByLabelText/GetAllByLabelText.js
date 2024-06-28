
export default function GetAllByLabelText (){
    return (
        <div>
            <h1>RTL - Get all by Label Text</h1>

            <label htmlFor="input1">userName</label>
            <input type="text" id="input1" defaultValue="anils"/>

            <label htmlFor="input2">userName</label>
            <input type="text" id="input2" defaultValue="anils"/>

            <label htmlFor="input3">userName</label>
            <input type="text" id="input3" defaultValue="anils"/>


            <label htmlFor="skill1">skill</label>
            <input type="checkbox" id="skill1" defaultChecked="true"/>

            <label htmlFor="skill2">skill</label>
            <input type="checkbox" id="skill2" defaultChecked="true"/>

            <label htmlFor="skill3">skill</label>
            <input type="checkbox" id="skill3" defaultChecked="true"/>
        </div>
    )
}