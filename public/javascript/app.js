// const appHeight = () => {
//     const doc = document.documentElement;
//     doc.style.setProperty('--app-height',`${window.innerHeight}px`)
   
// };
// window.addEventListener('resize', appHeight)
// appHeight()

const colorChange = () =>{
    document.body.style.backgroundColor="black";
}
colorChange();

const convertStyle = () => {
    const height = window.innerHeight;
    Array.from(document.getElementsByTagName("section")).forEach((element) => {
      element.style.height = `${height}px`;
    });
  };
  window.addEventListener("resize", convertStyle);
  window.addEventListener("DOMContentLoaded", convertStyle);