const Gender = (props) => {
    return (
        <div style = {{height: "30px", padding: "10px", fontSize: "14px"}}>
            <label style = {{marginRight: "20px"}}>Select Gender :</label>
            <input type = "radio" id = "male" ref = {props.maleRef} value = "Male" name = "gender" />
            <label htmlFor = "male">Male</label>
            <input type = "radio" id = "female" ref = {props.femaleRef} value = "Female" name = "gender" />
            <label htmlFor = "female">Female</label>
            <p style = {{ color: 'red' }} id = "genderError" />
        </div>
    )
}

export default Gender;
