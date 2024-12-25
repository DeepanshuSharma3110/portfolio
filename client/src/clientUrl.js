const backend = import.meta.env.VITE_API_BACKEND_URL;
export const getAllItem = `${backend}/api/item/allItems`;
export const signup = `${backend}/api/user/register`;
export const login = `${backend}/api/user/login`;