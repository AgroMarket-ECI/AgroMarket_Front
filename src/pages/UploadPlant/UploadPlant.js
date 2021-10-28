import { useState } from "react";
import { Box, Center, Heading, Image } from "@chakra-ui/react"
import './UploadPlant.css'

const UploadPlant = () => {

    const [plantImg, setPlantImg] = useState('https://www.incubaweb.com/wp-content/uploads/2016/09/upload.png');
    var imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setPlantImg(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };
    return (
        <div className="page">
            <Box maxW="80%" w="100%" padding="10" borderWidth="1px" maxH="80%" h="100%" backgroundColor="whiteAlpha.700" borderRadius="30" shadow="lg" overflow="hidden">
                <Heading size="lg" align="center" fontSize="50px">
                    FOTO DE TU PLANTA
                </Heading>

                <Center>
                    <Image src={plantImg} alt="" maxW="90%" maxH="360"  />
                </Center>

                <input type="file" name="image-upload" text="Select" id="input" accept="image/*" onChange={imageHandler} />
                <div className='label' align="center">
                    <label htmlFor="input" className="image-upload">
                        <i className="material-icons">add_photo_alternate</i>
                        Sube tu foto
                    </label>
                </div>
            </Box>
        </div>
    )
};

export default UploadPlant;