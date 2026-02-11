import React from 'react'

const Login = () => {
  return (
    <div 
           className=" text-black h-[100vh] flex items-center bg-cover justify-center min-h-screen "
                 style={{ backgroundImage: `url('/background.jpg')` }}


         >
        <div>
            <h1>Login</h1>
            <form action="">
              <div>
                <input type="email" />
                <label htmlFor="">Your Email</label>
            </div>
            <div>
                 <input type="Password" />
                 <label htmlFor="">Your Password</label>
            </div>
            <div>
              <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="Remember"></label>
              </div>
              <span>Forget Password?</span>
            </div>
             <button type="submit">Login</button>
             <div>
              <span>New Here? <Link to='Register'>Create an Account</Link></span>
             </div>
              </form>
         </div>
     </div>
  );
};

export default Day1;