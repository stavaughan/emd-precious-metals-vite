import React from 'react';
import { ModalCloseButton } from 'src/components/Buttons/Type';

const ModalHeader = ({
	handleModalClose,
	modalClose,
	entering,
	modalTitle,
	onClose,
	labelID
}) => {

    return (
        <div className="modal-header">
            <div className="text-normal font-medium text-muted" id={labelID}>
                {modalTitle}
            </div>
            <ModalCloseButton
                handleModalClose={handleModalClose}
                entering={entering}
				modalClose={modalClose}
                onClose={onClose}
            />
        </div>
    );
};

export default ModalHeader;
