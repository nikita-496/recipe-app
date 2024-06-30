// Реализовать перевод в CamelCase

type AsCamelCase<S extends string> = S extends `${infer A}_${infer B}` ? `${A}${Capitalize<AsCamelCase<B>>}` : S;
type CamelCaseKeysRecord<T> = T extends Record<PropertyKey, unknown> ? {
    [K in string & keyof T as AsCamelCase<K>]: CamelCaseKeysRecord<T[K]>;
} & {
    [K in Exclude<keyof T, string>]: CamelCaseKeysRecord<T[K]>;
} : T;

export function toCamelCaseKeys<T>(val: T): CamelCaseKeysRecord<T> {
    if (Array.isArray(val)) {
        console.log(val.map(toCamelCaseKeys) as unknown as CamelCaseKeysRecord<T>)
        return val.map(toCamelCaseKeys) as unknown as CamelCaseKeysRecord<T>;
    }
    if (typeof val === 'object') {
        return Object.fromEntries(Object
            .entries(val)
            .map(([k, v]) => [
                k.replace(/_+(.)/g, (_, g) => g.toUpperCase()),
                toCamelCaseKeys(v as Record<string, unknown>),
            ])) as CamelCaseKeysRecord<T>;
    }
    return val as unknown as CamelCaseKeysRecord<T>;
}