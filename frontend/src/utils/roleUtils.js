export const getUserRole = () => {
    const token = localStorage.getItem('token');
    if (!token) return null;
  
    const user = JSON.parse(atob(token.split('.')[1]));
    return user?.role || null;
  };
  
  export const isStudent = () => {
    return getUserRole() === 'student';
  };
  
  export const isAdmin = () => {
    return getUserRole() === 'admin';
  };
  
  export const isCompany = () => {
    return getUserRole() === 'company';
  };
  