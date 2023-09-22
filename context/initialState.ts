import { fetchUser } from "@/hooks";

const initialState = {
  user: null,

};

fetchUser((user: any) => {
  initialState.user = user
});


export default initialState;
