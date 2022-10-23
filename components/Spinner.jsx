import React from "react";
import spinner from '../public/loading.gif'
import Image from "next/image";

function Spinner() {
  return <>
    <Image className="w-[200px] m-auto block" alt='loading' src={spinner}/>
    </>;
}
export default Spinner;
