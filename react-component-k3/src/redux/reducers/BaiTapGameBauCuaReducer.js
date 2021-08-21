

const initialState = {
    danhSachCuoc: [
        { ma: 'ga', hinhAnh: './img/BaiTapGameBauCua/ga.png', diemCuoc: 0 },
        { ma: 'bau', hinhAnh: './img/BaiTapGameBauCua/bau.png', diemCuoc: 0 },
        { ma: 'ca', hinhAnh: './img/BaiTapGameBauCua/ca.png', diemCuoc: 0 },
        { ma: 'nai', hinhAnh: './img/BaiTapGameBauCua/nai.png', diemCuoc: 0 },
        { ma: 'cua', hinhAnh: './img/BaiTapGameBauCua/cua.png', diemCuoc: 0 },
        { ma: 'tom', hinhAnh: './img/BaiTapGameBauCua/tom.png', diemCuoc: 0 },
    ],
    tongDiem: 1000,
    mangXucXac: [
        { ma: 'ga', hinhAnh: './img/BaiTapGameBauCua/ga.png' },
        { ma: 'bau', hinhAnh: './img/BaiTapGameBauCua/bau.png' },
        { ma: 'ca', hinhAnh: './img/BaiTapGameBauCua/ca.png' }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {



        default:
            return state
    }
}
