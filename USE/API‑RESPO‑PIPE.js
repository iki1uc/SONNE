// API-RESPO-PIPE.js

import { API_RESPO } from "./API-RESPO-CORE.js";

export function API_PIPE(state){

  const out = API_RESPO.transform(state.respo);

  if(window.API_UPDATE){
    window.API_UPDATE(out);
  }

  return out;
}
