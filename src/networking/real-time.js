import {request} from "./request";

export function getRealtime() {
  return request({
    url: '/dev/realtime'
  })
}

export function getGameInfo() {
  return request({
    url: '/dev/game_info'
  })
}


// 函数调用 -> 压入函数栈(保存函数调用过程中所有变量)
// 函数调用结束 -> 弹出函数栈(释放函数所有的变量)
// function test() {
//   const names = ['why', 'aaa']
// }
//
// test()
//
// test()
