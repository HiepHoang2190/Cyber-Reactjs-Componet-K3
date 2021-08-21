import React from 'react'

export default function DiemCuoc(props) {
    return (
        <div>
            <h3 style={{ color: '#58FA58', marginTop: 0 }} className="text-center display-4">GAME BẦU CUA CYBERLEARN</h3>
            <div className="text-center mt-5">
                <span style={{ fontSize: '20px', borderRadius: '5%' }} className="p-3 text-white bg-danger ">Tiền thưởng:
                <span className="text-warning">100$</span>
                </span>
            </div>
            <div className="text-center mt-5">
                <button style={{ fontSize: '15px', borderRadius: '5%', border: 'none' }} className="p-2 text-white bg-success"> Chơi lại </button>

            </div>
        </div>
    )
}