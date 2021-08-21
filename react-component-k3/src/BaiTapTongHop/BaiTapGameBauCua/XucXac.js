import React, { Fragment } from 'react'


export default function XucXac(props) {

    let { xucXacItem } = props;

    return (
        <Fragment>
            <div>
                <div>
                    <img className="ml-3" style={{ width: 50 }} src={xucXacItem.hinhAnh} alt={xucXacItem.hinhAnh} />
                </div>
            </div>
        </Fragment>
    )
}
