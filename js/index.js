window.onload=function () {
  // setHtmlFont();
  // 设置根标签的字体大小
  function setHtmlFont() {
    // 设计稿的宽度 / 基础值 = 要适配的屏幕的宽度  /  字体大小
    // 字体大小 =要适配的屏幕的宽度 * 基础值/ 设计稿的宽度

    // 基础值
    var baseVal=100;
    // 设计稿的宽度 640
    var pageWidth=640;
    // 要适配的屏幕的宽度 当前的屏幕宽度
    var screenWidth=document.querySelector("html").offsetWidth;

    // 要设置的字体的大小
    var fs= screenWidth*  baseVal /pageWidth;

    // 把字体设置到根标签上
    document.querySelector("html").style.fontSize=fs+"px";

    
  }

  // 屏幕的宽度改变 也要调用 方便pc端调试
  window.onresize=function () {
    // setHtmlFont();
    
  }
  
}