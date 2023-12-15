import { useState } from "react";
import CompForm from "@/components/CompForm";

export default function CalcImc() {
    const [peso,setPeso] = useState<string>('');
    const [altura,setAltura] = useState<string>('');

    return (
        <div>
            <h1>Calculo IMC</h1>
            <CompForm label="peso" state={peso} funcState={setPeso}/>
            <CompForm label="altura" state={altura} funcState={setAltura}/>
        </div>
    )
}