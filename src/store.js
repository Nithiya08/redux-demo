import { configureStore } from "@reduxjs/toolkit";
import Counterreducer from "./Counterreducer";
import bankreducer from "./bankreducer";
import ToDoreducer from "./ToDoreducer";
import formreducer from "./formreducer";

export const store=configureStore({
    reducer:{
        counter:Counterreducer,
        bankaccount:bankreducer,
        todos:ToDoreducer,
        books:formreducer
    }
})
