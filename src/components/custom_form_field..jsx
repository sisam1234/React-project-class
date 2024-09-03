const CustomFormField=({label,cName,type,value,placeholder,onChange})=>{
    return(
        <div className="login-field-with-label">
                    <p className="login-label">
                        <label for={cName}>{label}</label>
                    </p>
                    <input className="login-field" type={type} name={cName} placeholder={placeholder} value={value} onChange={onChange}></input>
                </div>
    );
}
export default CustomFormField;