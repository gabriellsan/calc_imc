import { useState } from "react";
import CompForm from "@/components/CompForm";
import TableImc from "@/components/TableImc";
import Result from "@/components/Result";

export default function CalcImc() {
    const [weight,setWeight] = useState<number>(0);
    const [height,setHeight] = useState<number>(0);
    const [imc,setImc] = useState<number>(0);

    function calculate() {
        let res = weight / (height * height);
        setImc(res);
    }

    return (
        <div>
            <h1>Calculo IMC</h1>
            <CompForm label="weight" state={weight} funcState={setWeight}/>
            <CompForm label="height" state={height} funcState={setHeight}/>
            <button onClick={calculate}>Calculate</button>
            <Result result={imc}/>
            <TableImc/>
        </div>
    )
}