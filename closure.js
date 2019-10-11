// var person = (function() {
//     // 私有变量
//     var name = '';
//     var birthday = new Date().getTime();    // 默认是时间戳方式
//     // 函数式 - 不访问外界变量，没有闭包的呈现
//     // 有了输入，便有了预想中的输出，不保存状态
//     // 私有函数 - 已工具方法存在
//     function getFormattedDay(timestamp) {
//         var datetime = new Date(timestamp);
//         var year = datetime.getFullYear();
//         var month = datetime.getMonth() + 1;
//         var date = datetime.getDate();
//         return year + '-' + (String(month).length < 2 ? "0" + month : month) + "-"
//                 + (String(date).length < 2 ? "0" + date : date);
//     }
//     // 函数式 - 不访问外界变量，没有闭包的呈现
//     // 有了输入，便有了预想中的输出，不保存状态
//     // 私有函数 - 已工具方法存在
//     function getTimestampOfInput(dateString) {
//         return new Date(dateString).getTime();
//     }
//     // 共有方法
//     return {
//         setName: function(newName) {
//             name = newName;
//         },
//         getName: function() {
//             return name;
//         },
//         setBirthday: function(dateString) {
//             birthday = getTimestampOfInput(dateString);
//         },
//         getBirthday: function() {
//             return getFormattedDay(birthday);
//         }
//     };
// })();
// console.log(person.setName ('jack'));

// console.log(person.getName ());


// method 2 
// var person = {
//     // 单例的私有属性 - 或者可理解为静态变量
//     _name: '',
//     // 单例的私有属性 - 或者可理解为静态变量
//     _birthday: new Date().getTime(),    // 默认是时间戳方式
//     // 工具函数
//     _getTimestampOfInput: function(dateString) {
//         return new Date(dateString).getTime();
//     },
//     // 工具函数
//     _getFormattedDay: function(timestamp) {
//         var datetime = new Date(timestamp);
//         var year = datetime.getFullYear();
//         var month = datetime.getMonth() + 1;
//         var date = datetime.getDate();
//         return year + '-' + (String(month).length < 2 ? "0" + month : month) + "-"
//                 + (String(date).length < 2 ? "0" + date : date);
//     },
//     // 共有方法
//     setName: function(newName) {
//         this._name = newName;
//     },
//     getName: function() {
//         return this._name;
//     },
//     setBirthday: function(dateString) {
//         this._birthday = this._getTimestampOfInput(dateString);
//     },
//     getBirthday: function() {
//         return this._getFormattedDay(this._birthday);
//     }
// };


// public and private method 
// 生成一个人
// var person = (function() {
//     // 该对象保存静态属性
//     // 保存单例的状态
//     var _private = {
//         // 单例的私有属性 - 或者可理解为静态变量
//         _name: '',
//         // 单例的私有属性 - 或者可理解为静态变量
//         _birthday: new Date().getTime(),    // 默认是时间戳方式
//         // 工具函数
//         getTimestampOfInput: function(dateString) {
//             return new Date(dateString).getTime();
//         },
//         // 工具函数
//         _getFormattedDay: function(timestamp) {
//             var datetime = new Date(timestamp);
//             var year = datetime.getFullYear();
//             var month = datetime.getMonth() + 1;
//             var date = datetime.getDate();
//             return year + '-' + (String(month).length < 2 ? "0" + month : month) + "-"
//                     + (String(date).length < 2 ? "0" + date : date);
//         },
//         getFormattedDayOfBirthday: function() {
//             return this._getFormattedDay(this._birthday);
//         }
//     };

//     // 共有对象
//     var _public = {
//         setName: function(newName) {
//             _private._name = newName;
//         },
//         // 直接从_private对象中获取
//         getName: function() {
//             return _private._name;
//         },
//         /**
//          * 可直接操作_private中的静态属性
//          * @param dateString
//          */
//         setBirthday: function(dateString) {
//             _private._birthday = _private.getTimestampOfInput(dateString);
//         },
//         getBirthday: function() {
//             return _private.getFormattedDayOfBirthday();
//         }
//     };

//     return _public;
// })();


