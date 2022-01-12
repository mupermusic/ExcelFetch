import React from 'react'
import { Marker } from "pigeon-maps"

export const IndividualData = ({individualExcelData}) => {
    return (
        <>
            <Marker width={50} anchor={[individualExcelData.lat, individualExcelData.lng]} />
        </>
    )
}
