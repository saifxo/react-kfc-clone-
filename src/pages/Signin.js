import {React,useState} from "react";




function Signin() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [emailerror, setemailerror] = useState('')
    const [passworderror, setpassworderror] = useState('')
    const formsubmit= (event)=>{
        event.preventDefault()
        
        
        if(!email){
                setemailerror("please enter email")
                
        }
        else{setemailerror('')}
        if(!password){
                setpassworderror("please enter password")
                return
        }
        setpassworderror('')
        
        
        if(email && password){
            console.log(email,password)
            return
        }
        
}
  return (
    <form onSubmit={formsubmit}>
      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input type="email" onChange={(event)=>{setemail(event.target.value)}} className="form-control" id="inputEmail3" />
          <p style={{color:"red"}}>{emailerror}</p>
        </div>
        
      </div>
      <div className="row mb-3">
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input type="password" onChange={(event=>{setpassword(event.target.value)})} className="form-control" id="inputPassword3" />
          <p style={{color:"red"}}>{passworderror}</p>
        </div>
        
      </div>
      <button type="submit"className="btn btn-primary">
        Sign in
      </button>
    </form>
  );
}

export default Signin;
