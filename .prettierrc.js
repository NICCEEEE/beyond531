module.exports = {
    printWidth: 120, //一行的字符数，如果超过会进行换行，默认为80
    tabWidth: 4, //一个tab代表几个空格数,  默认为2
    semi: true, //行位是否使用分号，默认为true
    singleQuote: true, //字符串是否使用单引号，默认为false，使用双引号
    jsxSingleQuote: false, // jsx 比如className是否用单引号
    trailingComma: 'none', //是否使用尾逗号，有三个可选值"<none|es5|all>"
    bracketSpacing: true, //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
    jsxBracketSameLine: false, // jsx结尾的tag结束符  号 > 是否需要换行
    arrowParens: 'avoid', // arrow function 只有一个参数时候是否加括号
    useTabs: false, // 是否使用tab进行缩进，默认为false，表示用空格进行缩减
    requirePragma: false // 是否需要加特定注释才会进行prettier这个文件
};
