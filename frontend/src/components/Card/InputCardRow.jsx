import React from 'react'
import { Row } from 'src/components/HTML';
import { ContentCard } from '.';

const InputCardRow = ({ gap, cardClass, children }) => {

    return (
        <ContentCard cardClass={cardClass}>
            <Row className={gap || "g-3"}>
                {children}
            </Row>
        </ContentCard>
    )
}

export default InputCardRow
