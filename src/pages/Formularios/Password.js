import React from 'react';
import { InputGroup, Input, InputRightElement,Button} from "@chakra-ui/react";

export const Password = () =>{
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  
    return (
      <InputGroup size="md">
        <Input className="field-text"
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