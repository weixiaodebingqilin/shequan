/**
 * 函数节流 为了让用户的方法在某个时间段内只执行一次，我们需要保存上次执行的时间点与定时器。
 * @param {callabck} fn  我们需要包装的事件回调 
 * @param {Number} delay 时间间隔的阈值
 */
export const throttle = (fn, delay = 200) => {
    // last为上一次触发回调的时间, timer是定时器
    let last = 0, timer = null
    // 将throttle处理结果当作函数返回
    return function () {
        // 保留调用时的this上下文
        let context = this
        // 保留调用时传入的参数
        let args = arguments
        // 记录本次触发回调的时间
        let now = +new Date()

        // 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值
        if (now - last < delay) {
            // 如果时间间隔小于我们设定的时间间隔阈值，则为本次触发操作设立一个新的定时器
            clearTimeout(timer)
            timer = setTimeout(function () {
                last = now
                fn.apply(context, args)
            }, delay)
        } else {
            // 如果时间间隔超出了我们设定的时间间隔阈值，那就不等了，无论如何要反馈给用户一次响应
            last = now
            fn.apply(context, args)
        }
    }
}
/**
 * 函数防抖
 * @param {callabck} fn 我们需要包装的事件回调
 * @param {number} delay 时间间隔的阈值
 */
export const debounce = (fn, delay = 200) => {
    var timeout;
    return function () {
        // console.log("清除",timeout,e.target.value)
        clearTimeout(timeout);
        var context = this, args = arguments
        // console.log("新的",timeout, e.target.value)
        timeout = setTimeout(function () {
            fn.apply(context, args);
        }, delay)
    };
};
