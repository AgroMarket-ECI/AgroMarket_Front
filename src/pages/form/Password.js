import React from 'react';
import { InputGroup, Input, InputRightElement,Button} from "@chakra-ui/react";

export const Password = (pholder) =>{
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    console.log(pholder);
    return (
      <InputGroup size="md">
        <Input placeholder={pholder.pholder} className="field-text"
          pr="4.5rem"
          type={show ? "text" : "password"}
     
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    )
  }
  export default Password;