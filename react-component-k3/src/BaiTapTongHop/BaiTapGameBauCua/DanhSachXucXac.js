import React from 'react'
import XucXac from './XucXac'
import { useSelector } from "react-redux"
export default function DanhSachXucXac(props) {

    const mangXucXac = useSelector(state => state.BaiTapGameBauCuaReducer.mangXucXac);

    return (
        <div className="mt-5 ml-5" >
            <div className="bg-white" style={{ width: 300, height: 300, borderRadius: 150 }}>
                <div className="row">
                    <div className="col-12 text-center" style={{ marginTop: '75px' }}>
                        <XucXac xucXacItem={mangXucXac[0]} />
                    </div>
                    <div className="col-6 text-right mt-5">
                        <XucXac xucXacItem={mangXucXac[1]} />
                    </div>
                    <div className="col-6 mt-5">
                        <XucXac xucXacItem={mangXucXac[2]} />
                    </div>
                </div>
            </div>
            <div style={{ marginLeft: '25%', marginTop: '5%' }}>
                <button className="btn btn-success p2" style={{ fontSize: '25px' }}>Xốc</button>
            </div>
        </div>
    )
}
