import { API_RESPO } from "./API-RESPO-CORE.js";

export function API_HANDLE(state){
  const out = API_RESPO.transform(state.respo);
  console.log("API:", out);
  return out;
}
