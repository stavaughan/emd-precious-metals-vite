import React from 'react'
import { ModalWrapper } from 'src/components/Modals'
import { SiteData } from 'src/data';
import { ImageCrop } from '.'

const ImageCropModal = () => {

    return (
        <ModalWrapper
            modalID={SiteData.modalIDs.imageUploadCrop}
            modalName="Image Transform"
            modalTitle="Image Transform"
        >
            <ImageCrop />
        </ModalWrapper>
    )
}

export default ImageCropModal
