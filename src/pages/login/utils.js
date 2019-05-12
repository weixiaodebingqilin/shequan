/**
 * 倒计时
 * @param {Number} nums 倒计时秒数
 * @param {Object} param 执行前 执行中 执行后
 *  
 */
export const cutDwon = (nums, param) => {
    let {star,end, doing} = param
    star && star(nums)
    nums--
    if(nums < 0){
        end && end(nums)
        return
    }
    setTimeout(()=>{
        doing && doing(nums)
        cutDwon(nums,param)
    } ,1000)
}

