import styled from "styled-components";
import { useState } from "react";
interface ContainerProp {
    bgColor:string;
    borderColor :string;
}
const Container = styled.div<ContainerProp>`
    width:200px;
    height: 200px;
    background-color: ${(props)=> props.bgColor};
    border-radius: 100px;
    border :1px solid ${(props) => props.borderColor};

`;

interface CircleProp {
    bgColor:string;
    borderColor? :string;
    text?:string;
}

function Circle({bgColor,borderColor,text = "default text"}: CircleProp){
    const [value,setValue] = useState<number|string>(0);
    setValue(1)

    return(
        <Container bgColor={bgColor} borderColor={borderColor ?? "white"} >
            {text}
        </Container>
    )
}

export default Circle;
