export class hinhChuNhat {
    chieuDai;
    chieuRong;
    constructor(_chieuDai, _chieuRong){
        this.chieuDai = _chieuDai;
        this.chieuRong = _chieuRong;
    }
    dientichHCN(){
        let dientich = this.chieuDai * this.chieuRong;
        return dientich;
    }
    chuViHCN(){
        let chuVi = this.chieuDai + this.chieuRong * 2;
        return chuVi;
    }
}