export interface User {
  role: string,
  email: string | null,
  name: {
    firstname: string | null,
    lastname:string | null
  },

}
