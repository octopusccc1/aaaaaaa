export const context = function(){
  let a =require.context('../pages/Door/components/Technology/demo/components/', true, /^\.\/[\s\S]*\/index\.js$/);
  return a
}