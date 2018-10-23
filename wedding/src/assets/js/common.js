/**
 * 윈도우 height 관리 클래스
 */
class WindowHeight {

    constructor() {
        this._windowHeight = 0;
    }

    setWindowHeight(height){

        if(typeof height === 'undefined'){
            return;
        }

        this._windowHeight = height;
        return;
    }

    getWindowHeight(){
        return this._windowHeight;
    }
}