
export const getToken = ():String | null =>{
  const token = localStorage.getItem("token");
  if(!token) return null;
  return token;
}

export const getSession = ():String | null=>{
  const session = localStorage.getItem("session");
  if(!session) return null;
  return session;
}

