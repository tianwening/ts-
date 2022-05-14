// 遍历数组的项使用T[number]语法
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [K in T[number]]: K
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type r = TupleToObject<typeof tuple>