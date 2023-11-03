/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model application
 *
 */
export type application = $Result.DefaultSelection<Prisma.$applicationPayload>;
/**
 * Model bug
 *
 */
export type bug = $Result.DefaultSelection<Prisma.$bugPayload>;
/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model deployment
 *
 */
export type deployment = $Result.DefaultSelection<Prisma.$deploymentPayload>;
/**
 * Model test
 *
 */
export type test = $Result.DefaultSelection<Prisma.$testPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Applications
 * const applications = await prisma.application.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Applications
   * const applications = await prisma.application.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **application** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Applications
   * const applications = await prisma.application.findMany()
   * ```
   */
  get application(): Prisma.applicationDelegate<ExtArgs>;

  /**
   * `prisma.bug`: Exposes CRUD operations for the **bug** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Bugs
   * const bugs = await prisma.bug.findMany()
   * ```
   */
  get bug(): Prisma.bugDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.deployment`: Exposes CRUD operations for the **deployment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Deployments
   * const deployments = await prisma.deployment.findMany()
   * ```
   */
  get deployment(): Prisma.deploymentDelegate<ExtArgs>;

  /**
   * `prisma.test`: Exposes CRUD operations for the **test** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tests
   * const tests = await prisma.test.findMany()
   * ```
   */
  get test(): Prisma.testDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    application: 'application';
    bug: 'bug';
    company: 'company';
    deployment: 'deployment';
    test: 'test';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'application' | 'bug' | 'company' | 'deployment' | 'test' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      application: {
        payload: Prisma.$applicationPayload<ExtArgs>;
        fields: Prisma.applicationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.applicationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.applicationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>;
          };
          findFirst: {
            args: Prisma.applicationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.applicationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>;
          };
          findMany: {
            args: Prisma.applicationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>[];
          };
          create: {
            args: Prisma.applicationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>;
          };
          createMany: {
            args: Prisma.applicationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.applicationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>;
          };
          update: {
            args: Prisma.applicationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>;
          };
          deleteMany: {
            args: Prisma.applicationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.applicationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.applicationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicationPayload>;
          };
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateApplication>;
          };
          groupBy: {
            args: Prisma.applicationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ApplicationGroupByOutputType>[];
          };
          count: {
            args: Prisma.applicationCountArgs<ExtArgs>;
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number;
          };
        };
      };
      bug: {
        payload: Prisma.$bugPayload<ExtArgs>;
        fields: Prisma.bugFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.bugFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bugPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.bugFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bugPayload>;
          };
          findFirst: {
            args: Prisma.bugFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bugPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.bugFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bugPayload>;
          };
          findMany: {
            args: Prisma.bugFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bugPayload>[];
          };
          create: {
            args: Prisma.bugCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bugPayload>;
          };
          createMany: {
            args: Prisma.bugCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.bugDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bugPayload>;
          };
          update: {
            args: Prisma.bugUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bugPayload>;
          };
          deleteMany: {
            args: Prisma.bugDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.bugUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.bugUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bugPayload>;
          };
          aggregate: {
            args: Prisma.BugAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBug>;
          };
          groupBy: {
            args: Prisma.bugGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BugGroupByOutputType>[];
          };
          count: {
            args: Prisma.bugCountArgs<ExtArgs>;
            result: $Utils.Optional<BugCountAggregateOutputType> | number;
          };
        };
      };
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      deployment: {
        payload: Prisma.$deploymentPayload<ExtArgs>;
        fields: Prisma.deploymentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.deploymentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$deploymentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.deploymentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$deploymentPayload>;
          };
          findFirst: {
            args: Prisma.deploymentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$deploymentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.deploymentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$deploymentPayload>;
          };
          findMany: {
            args: Prisma.deploymentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$deploymentPayload>[];
          };
          create: {
            args: Prisma.deploymentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$deploymentPayload>;
          };
          createMany: {
            args: Prisma.deploymentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.deploymentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$deploymentPayload>;
          };
          update: {
            args: Prisma.deploymentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$deploymentPayload>;
          };
          deleteMany: {
            args: Prisma.deploymentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.deploymentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.deploymentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$deploymentPayload>;
          };
          aggregate: {
            args: Prisma.DeploymentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateDeployment>;
          };
          groupBy: {
            args: Prisma.deploymentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<DeploymentGroupByOutputType>[];
          };
          count: {
            args: Prisma.deploymentCountArgs<ExtArgs>;
            result: $Utils.Optional<DeploymentCountAggregateOutputType> | number;
          };
        };
      };
      test: {
        payload: Prisma.$testPayload<ExtArgs>;
        fields: Prisma.testFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.testFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$testPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.testFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$testPayload>;
          };
          findFirst: {
            args: Prisma.testFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$testPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.testFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$testPayload>;
          };
          findMany: {
            args: Prisma.testFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$testPayload>[];
          };
          create: {
            args: Prisma.testCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$testPayload>;
          };
          createMany: {
            args: Prisma.testCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.testDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$testPayload>;
          };
          update: {
            args: Prisma.testUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$testPayload>;
          };
          deleteMany: {
            args: Prisma.testDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.testUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.testUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$testPayload>;
          };
          aggregate: {
            args: Prisma.TestAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTest>;
          };
          groupBy: {
            args: Prisma.testGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TestGroupByOutputType>[];
          };
          count: {
            args: Prisma.testCountArgs<ExtArgs>;
            result: $Utils.Optional<TestCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    application: number;
    deployment: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | CompanyCountOutputTypeCountApplicationArgs;
    deployment?: boolean | CompanyCountOutputTypeCountDeploymentArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountApplicationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: applicationWhereInput;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountDeploymentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: deploymentWhereInput;
  };

  /**
   * Count Type DeploymentCountOutputType
   */

  export type DeploymentCountOutputType = {
    test: number;
  };

  export type DeploymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | DeploymentCountOutputTypeCountTestArgs;
  };

  // Custom InputTypes

  /**
   * DeploymentCountOutputType without action
   */
  export type DeploymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the DeploymentCountOutputType
       */
      select?: DeploymentCountOutputTypeSelect<ExtArgs> | null;
    };

  /**
   * DeploymentCountOutputType without action
   */
  export type DeploymentCountOutputTypeCountTestArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: testWhereInput;
  };

  /**
   * Count Type TestCountOutputType
   */

  export type TestCountOutputType = {
    bug: number;
  };

  export type TestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bug?: boolean | TestCountOutputTypeCountBugArgs;
  };

  // Custom InputTypes

  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCountOutputType
     */
    select?: TestCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeCountBugArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bugWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    application: number;
    bug: number;
    deployment: number;
    test: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | UserCountOutputTypeCountApplicationArgs;
    bug?: boolean | UserCountOutputTypeCountBugArgs;
    deployment?: boolean | UserCountOutputTypeCountDeploymentArgs;
    test?: boolean | UserCountOutputTypeCountTestArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplicationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: applicationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBugArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bugWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeploymentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: deploymentWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: testWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null;
    _min: ApplicationMinAggregateOutputType | null;
    _max: ApplicationMaxAggregateOutputType | null;
  };

  export type ApplicationMinAggregateOutputType = {
    id: string | null;
    app_name: string | null;
    app_version: string | null;
    user_id: string | null;
    company_id: string | null;
    app_status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ApplicationMaxAggregateOutputType = {
    id: string | null;
    app_name: string | null;
    app_version: string | null;
    user_id: string | null;
    company_id: string | null;
    app_status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ApplicationCountAggregateOutputType = {
    id: number;
    app_name: number;
    app_version: number;
    user_id: number;
    company_id: number;
    app_status: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ApplicationMinAggregateInputType = {
    id?: true;
    app_name?: true;
    app_version?: true;
    user_id?: true;
    company_id?: true;
    app_status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ApplicationMaxAggregateInputType = {
    id?: true;
    app_name?: true;
    app_version?: true;
    user_id?: true;
    company_id?: true;
    app_status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ApplicationCountAggregateInputType = {
    id?: true;
    app_name?: true;
    app_version?: true;
    user_id?: true;
    company_id?: true;
    app_status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which application to aggregate.
     */
    where?: applicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of applications to fetch.
     */
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: applicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned applications
     **/
    _count?: true | ApplicationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ApplicationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ApplicationMaxAggregateInputType;
  };

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
    [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>;
  };

  export type applicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applicationWhereInput;
    orderBy?: applicationOrderByWithAggregationInput | applicationOrderByWithAggregationInput[];
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum;
    having?: applicationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApplicationCountAggregateInputType | true;
    _min?: ApplicationMinAggregateInputType;
    _max?: ApplicationMaxAggregateInputType;
  };

  export type ApplicationGroupByOutputType = {
    id: string;
    app_name: string;
    app_version: string;
    user_id: string;
    company_id: string;
    app_status: string;
    created_at: Date;
    updated_at: Date;
    _count: ApplicationCountAggregateOutputType | null;
    _min: ApplicationMinAggregateOutputType | null;
    _max: ApplicationMaxAggregateOutputType | null;
  };

  type GetApplicationGroupByPayload<T extends applicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ApplicationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
          : GetScalarType<T[P], ApplicationGroupByOutputType[P]>;
      }
    >
  >;

  export type applicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        app_name?: boolean;
        app_version?: boolean;
        user_id?: boolean;
        company_id?: boolean;
        app_status?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        company?: boolean | companyDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['application']
    >;

  export type applicationSelectScalar = {
    id?: boolean;
    app_name?: boolean;
    app_version?: boolean;
    user_id?: boolean;
    company_id?: boolean;
    app_status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type applicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $applicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'application';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        app_name: string;
        app_version: string;
        user_id: string;
        company_id: string;
        app_status: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['application']
    >;
    composites: {};
  };

  type applicationGetPayload<S extends boolean | null | undefined | applicationDefaultArgs> = $Result.GetResult<
    Prisma.$applicationPayload,
    S
  >;

  type applicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    applicationFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ApplicationCountAggregateInputType | true;
  };

  export interface applicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['application']; meta: { name: 'application' } };
    /**
     * Find zero or one Application that matches the filter.
     * @param {applicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends applicationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, applicationFindUniqueArgs<ExtArgs>>,
    ): Prisma__applicationClient<
      $Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Application that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {applicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends applicationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, applicationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__applicationClient<
      $Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends applicationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, applicationFindFirstArgs<ExtArgs>>,
    ): Prisma__applicationClient<
      $Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends applicationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, applicationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__applicationClient<
      $Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     *
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends applicationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, applicationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Application.
     * @param {applicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     *
     **/
    create<T extends applicationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, applicationCreateArgs<ExtArgs>>,
    ): Prisma__applicationClient<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Applications.
     *     @param {applicationCreateManyArgs} args - Arguments to create many Applications.
     *     @example
     *     // Create many Applications
     *     const application = await prisma.application.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends applicationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, applicationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Application.
     * @param {applicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     *
     **/
    delete<T extends applicationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, applicationDeleteArgs<ExtArgs>>,
    ): Prisma__applicationClient<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Application.
     * @param {applicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends applicationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, applicationUpdateArgs<ExtArgs>>,
    ): Prisma__applicationClient<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Applications.
     * @param {applicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends applicationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, applicationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends applicationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, applicationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Application.
     * @param {applicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     **/
    upsert<T extends applicationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, applicationUpsertArgs<ExtArgs>>,
    ): Prisma__applicationClient<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
     **/
    count<T extends applicationCountArgs>(
      args?: Subset<T, applicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ApplicationAggregateArgs>(
      args: Subset<T, ApplicationAggregateArgs>,
    ): Prisma.PrismaPromise<GetApplicationAggregateType<T>>;

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends applicationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: applicationGroupByArgs['orderBy'] }
        : { orderBy?: applicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, applicationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the application model
     */
    readonly fields: applicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__applicationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the application model
   */
  interface applicationFieldRefs {
    readonly id: FieldRef<'application', 'String'>;
    readonly app_name: FieldRef<'application', 'String'>;
    readonly app_version: FieldRef<'application', 'String'>;
    readonly user_id: FieldRef<'application', 'String'>;
    readonly company_id: FieldRef<'application', 'String'>;
    readonly app_status: FieldRef<'application', 'String'>;
    readonly created_at: FieldRef<'application', 'DateTime'>;
    readonly updated_at: FieldRef<'application', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * application findUnique
   */
  export type applicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    /**
     * Filter, which application to fetch.
     */
    where: applicationWhereUniqueInput;
  };

  /**
   * application findUniqueOrThrow
   */
  export type applicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    /**
     * Filter, which application to fetch.
     */
    where: applicationWhereUniqueInput;
  };

  /**
   * application findFirst
   */
  export type applicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    /**
     * Filter, which application to fetch.
     */
    where?: applicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of applications to fetch.
     */
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for applications.
     */
    cursor?: applicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * application findFirstOrThrow
   */
  export type applicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    /**
     * Filter, which application to fetch.
     */
    where?: applicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of applications to fetch.
     */
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for applications.
     */
    cursor?: applicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * application findMany
   */
  export type applicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    /**
     * Filter, which applications to fetch.
     */
    where?: applicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of applications to fetch.
     */
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing applications.
     */
    cursor?: applicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` applications.
     */
    skip?: number;
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * application create
   */
  export type applicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    /**
     * The data needed to create a application.
     */
    data: XOR<applicationCreateInput, applicationUncheckedCreateInput>;
  };

  /**
   * application createMany
   */
  export type applicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many applications.
     */
    data: applicationCreateManyInput | applicationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * application update
   */
  export type applicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    /**
     * The data needed to update a application.
     */
    data: XOR<applicationUpdateInput, applicationUncheckedUpdateInput>;
    /**
     * Choose, which application to update.
     */
    where: applicationWhereUniqueInput;
  };

  /**
   * application updateMany
   */
  export type applicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update applications.
     */
    data: XOR<applicationUpdateManyMutationInput, applicationUncheckedUpdateManyInput>;
    /**
     * Filter which applications to update
     */
    where?: applicationWhereInput;
  };

  /**
   * application upsert
   */
  export type applicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    /**
     * The filter to search for the application to update in case it exists.
     */
    where: applicationWhereUniqueInput;
    /**
     * In case the application found by the `where` argument doesn't exist, create a new application with this data.
     */
    create: XOR<applicationCreateInput, applicationUncheckedCreateInput>;
    /**
     * In case the application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<applicationUpdateInput, applicationUncheckedUpdateInput>;
  };

  /**
   * application delete
   */
  export type applicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    /**
     * Filter which application to delete.
     */
    where: applicationWhereUniqueInput;
  };

  /**
   * application deleteMany
   */
  export type applicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which applications to delete
     */
    where?: applicationWhereInput;
  };

  /**
   * application without action
   */
  export type applicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
  };

  /**
   * Model bug
   */

  export type AggregateBug = {
    _count: BugCountAggregateOutputType | null;
    _min: BugMinAggregateOutputType | null;
    _max: BugMaxAggregateOutputType | null;
  };

  export type BugMinAggregateOutputType = {
    id: string | null;
    bug_name: string | null;
    bug_status: string | null;
    user_id: string | null;
    test_id: string | null;
    bug_description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BugMaxAggregateOutputType = {
    id: string | null;
    bug_name: string | null;
    bug_status: string | null;
    user_id: string | null;
    test_id: string | null;
    bug_description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BugCountAggregateOutputType = {
    id: number;
    bug_name: number;
    bug_status: number;
    user_id: number;
    test_id: number;
    bug_description: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type BugMinAggregateInputType = {
    id?: true;
    bug_name?: true;
    bug_status?: true;
    user_id?: true;
    test_id?: true;
    bug_description?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BugMaxAggregateInputType = {
    id?: true;
    bug_name?: true;
    bug_status?: true;
    user_id?: true;
    test_id?: true;
    bug_description?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BugCountAggregateInputType = {
    id?: true;
    bug_name?: true;
    bug_status?: true;
    user_id?: true;
    test_id?: true;
    bug_description?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type BugAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bug to aggregate.
     */
    where?: bugWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bugs to fetch.
     */
    orderBy?: bugOrderByWithRelationInput | bugOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: bugWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bugs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bugs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned bugs
     **/
    _count?: true | BugCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BugMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BugMaxAggregateInputType;
  };

  export type GetBugAggregateType<T extends BugAggregateArgs> = {
    [P in keyof T & keyof AggregateBug]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBug[P]>
      : GetScalarType<T[P], AggregateBug[P]>;
  };

  export type bugGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bugWhereInput;
    orderBy?: bugOrderByWithAggregationInput | bugOrderByWithAggregationInput[];
    by: BugScalarFieldEnum[] | BugScalarFieldEnum;
    having?: bugScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BugCountAggregateInputType | true;
    _min?: BugMinAggregateInputType;
    _max?: BugMaxAggregateInputType;
  };

  export type BugGroupByOutputType = {
    id: string;
    bug_name: string;
    bug_status: string;
    user_id: string;
    test_id: string;
    bug_description: string | null;
    created_at: Date;
    updated_at: Date;
    _count: BugCountAggregateOutputType | null;
    _min: BugMinAggregateOutputType | null;
    _max: BugMaxAggregateOutputType | null;
  };

  type GetBugGroupByPayload<T extends bugGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BugGroupByOutputType, T['by']> & {
        [P in keyof T & keyof BugGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], BugGroupByOutputType[P]>
          : GetScalarType<T[P], BugGroupByOutputType[P]>;
      }
    >
  >;

  export type bugSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      bug_name?: boolean;
      bug_status?: boolean;
      user_id?: boolean;
      test_id?: boolean;
      bug_description?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      test?: boolean | testDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['bug']
  >;

  export type bugSelectScalar = {
    id?: boolean;
    bug_name?: boolean;
    bug_status?: boolean;
    user_id?: boolean;
    test_id?: boolean;
    bug_description?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type bugInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | testDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $bugPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'bug';
    objects: {
      test: Prisma.$testPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        bug_name: string;
        bug_status: string;
        user_id: string;
        test_id: string;
        bug_description: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['bug']
    >;
    composites: {};
  };

  type bugGetPayload<S extends boolean | null | undefined | bugDefaultArgs> = $Result.GetResult<Prisma.$bugPayload, S>;

  type bugCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    bugFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: BugCountAggregateInputType | true;
  };

  export interface bugDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bug']; meta: { name: 'bug' } };
    /**
     * Find zero or one Bug that matches the filter.
     * @param {bugFindUniqueArgs} args - Arguments to find a Bug
     * @example
     * // Get one Bug
     * const bug = await prisma.bug.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends bugFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, bugFindUniqueArgs<ExtArgs>>,
    ): Prisma__bugClient<$Result.GetResult<Prisma.$bugPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Bug that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {bugFindUniqueOrThrowArgs} args - Arguments to find a Bug
     * @example
     * // Get one Bug
     * const bug = await prisma.bug.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends bugFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bugFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__bugClient<$Result.GetResult<Prisma.$bugPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Bug that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bugFindFirstArgs} args - Arguments to find a Bug
     * @example
     * // Get one Bug
     * const bug = await prisma.bug.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends bugFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, bugFindFirstArgs<ExtArgs>>,
    ): Prisma__bugClient<$Result.GetResult<Prisma.$bugPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Bug that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bugFindFirstOrThrowArgs} args - Arguments to find a Bug
     * @example
     * // Get one Bug
     * const bug = await prisma.bug.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends bugFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bugFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__bugClient<$Result.GetResult<Prisma.$bugPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Bugs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bugFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bugs
     * const bugs = await prisma.bug.findMany()
     *
     * // Get first 10 Bugs
     * const bugs = await prisma.bug.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bugWithIdOnly = await prisma.bug.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends bugFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bugFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bugPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Bug.
     * @param {bugCreateArgs} args - Arguments to create a Bug.
     * @example
     * // Create one Bug
     * const Bug = await prisma.bug.create({
     *   data: {
     *     // ... data to create a Bug
     *   }
     * })
     *
     **/
    create<T extends bugCreateArgs<ExtArgs>>(
      args: SelectSubset<T, bugCreateArgs<ExtArgs>>,
    ): Prisma__bugClient<$Result.GetResult<Prisma.$bugPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Bugs.
     *     @param {bugCreateManyArgs} args - Arguments to create many Bugs.
     *     @example
     *     // Create many Bugs
     *     const bug = await prisma.bug.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends bugCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bugCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Bug.
     * @param {bugDeleteArgs} args - Arguments to delete one Bug.
     * @example
     * // Delete one Bug
     * const Bug = await prisma.bug.delete({
     *   where: {
     *     // ... filter to delete one Bug
     *   }
     * })
     *
     **/
    delete<T extends bugDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, bugDeleteArgs<ExtArgs>>,
    ): Prisma__bugClient<$Result.GetResult<Prisma.$bugPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Bug.
     * @param {bugUpdateArgs} args - Arguments to update one Bug.
     * @example
     * // Update one Bug
     * const bug = await prisma.bug.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends bugUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, bugUpdateArgs<ExtArgs>>,
    ): Prisma__bugClient<$Result.GetResult<Prisma.$bugPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Bugs.
     * @param {bugDeleteManyArgs} args - Arguments to filter Bugs to delete.
     * @example
     * // Delete a few Bugs
     * const { count } = await prisma.bug.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends bugDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bugDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Bugs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bugUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bugs
     * const bug = await prisma.bug.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends bugUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, bugUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Bug.
     * @param {bugUpsertArgs} args - Arguments to update or create a Bug.
     * @example
     * // Update or create a Bug
     * const bug = await prisma.bug.upsert({
     *   create: {
     *     // ... data to create a Bug
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bug we want to update
     *   }
     * })
     **/
    upsert<T extends bugUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, bugUpsertArgs<ExtArgs>>,
    ): Prisma__bugClient<$Result.GetResult<Prisma.$bugPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Bugs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bugCountArgs} args - Arguments to filter Bugs to count.
     * @example
     * // Count the number of Bugs
     * const count = await prisma.bug.count({
     *   where: {
     *     // ... the filter for the Bugs we want to count
     *   }
     * })
     **/
    count<T extends bugCountArgs>(
      args?: Subset<T, bugCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BugCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Bug.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BugAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BugAggregateArgs>(
      args: Subset<T, BugAggregateArgs>,
    ): Prisma.PrismaPromise<GetBugAggregateType<T>>;

    /**
     * Group by Bug.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bugGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends bugGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bugGroupByArgs['orderBy'] }
        : { orderBy?: bugGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, bugGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetBugGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the bug model
     */
    readonly fields: bugFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bug.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bugClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    test<T extends testDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, testDefaultArgs<ExtArgs>>,
    ): Prisma__testClient<
      $Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the bug model
   */
  interface bugFieldRefs {
    readonly id: FieldRef<'bug', 'String'>;
    readonly bug_name: FieldRef<'bug', 'String'>;
    readonly bug_status: FieldRef<'bug', 'String'>;
    readonly user_id: FieldRef<'bug', 'String'>;
    readonly test_id: FieldRef<'bug', 'String'>;
    readonly bug_description: FieldRef<'bug', 'String'>;
    readonly created_at: FieldRef<'bug', 'DateTime'>;
    readonly updated_at: FieldRef<'bug', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * bug findUnique
   */
  export type bugFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bug
     */
    select?: bugSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bugInclude<ExtArgs> | null;
    /**
     * Filter, which bug to fetch.
     */
    where: bugWhereUniqueInput;
  };

  /**
   * bug findUniqueOrThrow
   */
  export type bugFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bug
     */
    select?: bugSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bugInclude<ExtArgs> | null;
    /**
     * Filter, which bug to fetch.
     */
    where: bugWhereUniqueInput;
  };

  /**
   * bug findFirst
   */
  export type bugFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bug
     */
    select?: bugSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bugInclude<ExtArgs> | null;
    /**
     * Filter, which bug to fetch.
     */
    where?: bugWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bugs to fetch.
     */
    orderBy?: bugOrderByWithRelationInput | bugOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for bugs.
     */
    cursor?: bugWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bugs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bugs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of bugs.
     */
    distinct?: BugScalarFieldEnum | BugScalarFieldEnum[];
  };

  /**
   * bug findFirstOrThrow
   */
  export type bugFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bug
     */
    select?: bugSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bugInclude<ExtArgs> | null;
    /**
     * Filter, which bug to fetch.
     */
    where?: bugWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bugs to fetch.
     */
    orderBy?: bugOrderByWithRelationInput | bugOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for bugs.
     */
    cursor?: bugWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bugs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bugs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of bugs.
     */
    distinct?: BugScalarFieldEnum | BugScalarFieldEnum[];
  };

  /**
   * bug findMany
   */
  export type bugFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bug
     */
    select?: bugSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bugInclude<ExtArgs> | null;
    /**
     * Filter, which bugs to fetch.
     */
    where?: bugWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bugs to fetch.
     */
    orderBy?: bugOrderByWithRelationInput | bugOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing bugs.
     */
    cursor?: bugWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bugs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bugs.
     */
    skip?: number;
    distinct?: BugScalarFieldEnum | BugScalarFieldEnum[];
  };

  /**
   * bug create
   */
  export type bugCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bug
     */
    select?: bugSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bugInclude<ExtArgs> | null;
    /**
     * The data needed to create a bug.
     */
    data: XOR<bugCreateInput, bugUncheckedCreateInput>;
  };

  /**
   * bug createMany
   */
  export type bugCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bugs.
     */
    data: bugCreateManyInput | bugCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * bug update
   */
  export type bugUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bug
     */
    select?: bugSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bugInclude<ExtArgs> | null;
    /**
     * The data needed to update a bug.
     */
    data: XOR<bugUpdateInput, bugUncheckedUpdateInput>;
    /**
     * Choose, which bug to update.
     */
    where: bugWhereUniqueInput;
  };

  /**
   * bug updateMany
   */
  export type bugUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bugs.
     */
    data: XOR<bugUpdateManyMutationInput, bugUncheckedUpdateManyInput>;
    /**
     * Filter which bugs to update
     */
    where?: bugWhereInput;
  };

  /**
   * bug upsert
   */
  export type bugUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bug
     */
    select?: bugSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bugInclude<ExtArgs> | null;
    /**
     * The filter to search for the bug to update in case it exists.
     */
    where: bugWhereUniqueInput;
    /**
     * In case the bug found by the `where` argument doesn't exist, create a new bug with this data.
     */
    create: XOR<bugCreateInput, bugUncheckedCreateInput>;
    /**
     * In case the bug was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bugUpdateInput, bugUncheckedUpdateInput>;
  };

  /**
   * bug delete
   */
  export type bugDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bug
     */
    select?: bugSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bugInclude<ExtArgs> | null;
    /**
     * Filter which bug to delete.
     */
    where: bugWhereUniqueInput;
  };

  /**
   * bug deleteMany
   */
  export type bugDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bugs to delete
     */
    where?: bugWhereInput;
  };

  /**
   * bug without action
   */
  export type bugDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bug
     */
    select?: bugSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bugInclude<ExtArgs> | null;
  };

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    phone_number: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    phone_number: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    phone_number: number;
    name: number;
    created_at: number;
    updated_at: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone_number?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone_number?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone_number?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    phone_number: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      address?: boolean;
      phone_number?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      tenant_id?: boolean;
      application?: boolean | company$applicationArgs<ExtArgs>;
      deployment?: boolean | company$deploymentArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    phone_number?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | company$applicationArgs<ExtArgs>;
    deployment?: boolean | company$deploymentArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      application: Prisma.$applicationPayload<ExtArgs>[];
      deployment: Prisma.$deploymentPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        phone_number: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    application<T extends company$applicationArgs<ExtArgs> = {}>(
      args?: Subset<T, company$applicationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    deployment<T extends company$deploymentArgs<ExtArgs> = {}>(
      args?: Subset<T, company$deploymentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$deploymentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly address: FieldRef<'company', 'String'>;
    readonly phone_number: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.application
   */
  export type company$applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    where?: applicationWhereInput;
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[];
    cursor?: applicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * company.deployment
   */
  export type company$deploymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deployment
     */
    select?: deploymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: deploymentInclude<ExtArgs> | null;
    where?: deploymentWhereInput;
    orderBy?: deploymentOrderByWithRelationInput | deploymentOrderByWithRelationInput[];
    cursor?: deploymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model deployment
   */

  export type AggregateDeployment = {
    _count: DeploymentCountAggregateOutputType | null;
    _min: DeploymentMinAggregateOutputType | null;
    _max: DeploymentMaxAggregateOutputType | null;
  };

  export type DeploymentMinAggregateOutputType = {
    id: string | null;
    deployment_name: string | null;
    deployment_version: string | null;
    deployment_status: string | null;
    user_id: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type DeploymentMaxAggregateOutputType = {
    id: string | null;
    deployment_name: string | null;
    deployment_version: string | null;
    deployment_status: string | null;
    user_id: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type DeploymentCountAggregateOutputType = {
    id: number;
    deployment_name: number;
    deployment_version: number;
    deployment_status: number;
    user_id: number;
    company_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type DeploymentMinAggregateInputType = {
    id?: true;
    deployment_name?: true;
    deployment_version?: true;
    deployment_status?: true;
    user_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type DeploymentMaxAggregateInputType = {
    id?: true;
    deployment_name?: true;
    deployment_version?: true;
    deployment_status?: true;
    user_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type DeploymentCountAggregateInputType = {
    id?: true;
    deployment_name?: true;
    deployment_version?: true;
    deployment_status?: true;
    user_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type DeploymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which deployment to aggregate.
     */
    where?: deploymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of deployments to fetch.
     */
    orderBy?: deploymentOrderByWithRelationInput | deploymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: deploymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` deployments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` deployments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned deployments
     **/
    _count?: true | DeploymentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: DeploymentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: DeploymentMaxAggregateInputType;
  };

  export type GetDeploymentAggregateType<T extends DeploymentAggregateArgs> = {
    [P in keyof T & keyof AggregateDeployment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeployment[P]>
      : GetScalarType<T[P], AggregateDeployment[P]>;
  };

  export type deploymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: deploymentWhereInput;
    orderBy?: deploymentOrderByWithAggregationInput | deploymentOrderByWithAggregationInput[];
    by: DeploymentScalarFieldEnum[] | DeploymentScalarFieldEnum;
    having?: deploymentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DeploymentCountAggregateInputType | true;
    _min?: DeploymentMinAggregateInputType;
    _max?: DeploymentMaxAggregateInputType;
  };

  export type DeploymentGroupByOutputType = {
    id: string;
    deployment_name: string;
    deployment_version: string;
    deployment_status: string;
    user_id: string;
    company_id: string;
    created_at: Date;
    updated_at: Date;
    _count: DeploymentCountAggregateOutputType | null;
    _min: DeploymentMinAggregateOutputType | null;
    _max: DeploymentMaxAggregateOutputType | null;
  };

  type GetDeploymentGroupByPayload<T extends deploymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeploymentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof DeploymentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], DeploymentGroupByOutputType[P]>
          : GetScalarType<T[P], DeploymentGroupByOutputType[P]>;
      }
    >
  >;

  export type deploymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        deployment_name?: boolean;
        deployment_version?: boolean;
        deployment_status?: boolean;
        user_id?: boolean;
        company_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        company?: boolean | companyDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        test?: boolean | deployment$testArgs<ExtArgs>;
        _count?: boolean | DeploymentCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['deployment']
    >;

  export type deploymentSelectScalar = {
    id?: boolean;
    deployment_name?: boolean;
    deployment_version?: boolean;
    deployment_status?: boolean;
    user_id?: boolean;
    company_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type deploymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    test?: boolean | deployment$testArgs<ExtArgs>;
    _count?: boolean | DeploymentCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $deploymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'deployment';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
      test: Prisma.$testPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        deployment_name: string;
        deployment_version: string;
        deployment_status: string;
        user_id: string;
        company_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['deployment']
    >;
    composites: {};
  };

  type deploymentGetPayload<S extends boolean | null | undefined | deploymentDefaultArgs> = $Result.GetResult<
    Prisma.$deploymentPayload,
    S
  >;

  type deploymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    deploymentFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: DeploymentCountAggregateInputType | true;
  };

  export interface deploymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['deployment']; meta: { name: 'deployment' } };
    /**
     * Find zero or one Deployment that matches the filter.
     * @param {deploymentFindUniqueArgs} args - Arguments to find a Deployment
     * @example
     * // Get one Deployment
     * const deployment = await prisma.deployment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends deploymentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, deploymentFindUniqueArgs<ExtArgs>>,
    ): Prisma__deploymentClient<
      $Result.GetResult<Prisma.$deploymentPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Deployment that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {deploymentFindUniqueOrThrowArgs} args - Arguments to find a Deployment
     * @example
     * // Get one Deployment
     * const deployment = await prisma.deployment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends deploymentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, deploymentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__deploymentClient<
      $Result.GetResult<Prisma.$deploymentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Deployment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deploymentFindFirstArgs} args - Arguments to find a Deployment
     * @example
     * // Get one Deployment
     * const deployment = await prisma.deployment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends deploymentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, deploymentFindFirstArgs<ExtArgs>>,
    ): Prisma__deploymentClient<
      $Result.GetResult<Prisma.$deploymentPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Deployment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deploymentFindFirstOrThrowArgs} args - Arguments to find a Deployment
     * @example
     * // Get one Deployment
     * const deployment = await prisma.deployment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends deploymentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, deploymentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__deploymentClient<
      $Result.GetResult<Prisma.$deploymentPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Deployments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deploymentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deployments
     * const deployments = await prisma.deployment.findMany()
     *
     * // Get first 10 Deployments
     * const deployments = await prisma.deployment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const deploymentWithIdOnly = await prisma.deployment.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends deploymentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, deploymentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$deploymentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Deployment.
     * @param {deploymentCreateArgs} args - Arguments to create a Deployment.
     * @example
     * // Create one Deployment
     * const Deployment = await prisma.deployment.create({
     *   data: {
     *     // ... data to create a Deployment
     *   }
     * })
     *
     **/
    create<T extends deploymentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, deploymentCreateArgs<ExtArgs>>,
    ): Prisma__deploymentClient<$Result.GetResult<Prisma.$deploymentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Deployments.
     *     @param {deploymentCreateManyArgs} args - Arguments to create many Deployments.
     *     @example
     *     // Create many Deployments
     *     const deployment = await prisma.deployment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends deploymentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, deploymentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Deployment.
     * @param {deploymentDeleteArgs} args - Arguments to delete one Deployment.
     * @example
     * // Delete one Deployment
     * const Deployment = await prisma.deployment.delete({
     *   where: {
     *     // ... filter to delete one Deployment
     *   }
     * })
     *
     **/
    delete<T extends deploymentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, deploymentDeleteArgs<ExtArgs>>,
    ): Prisma__deploymentClient<$Result.GetResult<Prisma.$deploymentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Deployment.
     * @param {deploymentUpdateArgs} args - Arguments to update one Deployment.
     * @example
     * // Update one Deployment
     * const deployment = await prisma.deployment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends deploymentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, deploymentUpdateArgs<ExtArgs>>,
    ): Prisma__deploymentClient<$Result.GetResult<Prisma.$deploymentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Deployments.
     * @param {deploymentDeleteManyArgs} args - Arguments to filter Deployments to delete.
     * @example
     * // Delete a few Deployments
     * const { count } = await prisma.deployment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends deploymentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, deploymentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Deployments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deploymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deployments
     * const deployment = await prisma.deployment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends deploymentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, deploymentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Deployment.
     * @param {deploymentUpsertArgs} args - Arguments to update or create a Deployment.
     * @example
     * // Update or create a Deployment
     * const deployment = await prisma.deployment.upsert({
     *   create: {
     *     // ... data to create a Deployment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deployment we want to update
     *   }
     * })
     **/
    upsert<T extends deploymentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, deploymentUpsertArgs<ExtArgs>>,
    ): Prisma__deploymentClient<$Result.GetResult<Prisma.$deploymentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Deployments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deploymentCountArgs} args - Arguments to filter Deployments to count.
     * @example
     * // Count the number of Deployments
     * const count = await prisma.deployment.count({
     *   where: {
     *     // ... the filter for the Deployments we want to count
     *   }
     * })
     **/
    count<T extends deploymentCountArgs>(
      args?: Subset<T, deploymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeploymentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Deployment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends DeploymentAggregateArgs>(
      args: Subset<T, DeploymentAggregateArgs>,
    ): Prisma.PrismaPromise<GetDeploymentAggregateType<T>>;

    /**
     * Group by Deployment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deploymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends deploymentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: deploymentGroupByArgs['orderBy'] }
        : { orderBy?: deploymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, deploymentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetDeploymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the deployment model
     */
    readonly fields: deploymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for deployment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__deploymentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    test<T extends deployment$testArgs<ExtArgs> = {}>(
      args?: Subset<T, deployment$testArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the deployment model
   */
  interface deploymentFieldRefs {
    readonly id: FieldRef<'deployment', 'String'>;
    readonly deployment_name: FieldRef<'deployment', 'String'>;
    readonly deployment_version: FieldRef<'deployment', 'String'>;
    readonly deployment_status: FieldRef<'deployment', 'String'>;
    readonly user_id: FieldRef<'deployment', 'String'>;
    readonly company_id: FieldRef<'deployment', 'String'>;
    readonly created_at: FieldRef<'deployment', 'DateTime'>;
    readonly updated_at: FieldRef<'deployment', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * deployment findUnique
   */
  export type deploymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deployment
     */
    select?: deploymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: deploymentInclude<ExtArgs> | null;
    /**
     * Filter, which deployment to fetch.
     */
    where: deploymentWhereUniqueInput;
  };

  /**
   * deployment findUniqueOrThrow
   */
  export type deploymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deployment
     */
    select?: deploymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: deploymentInclude<ExtArgs> | null;
    /**
     * Filter, which deployment to fetch.
     */
    where: deploymentWhereUniqueInput;
  };

  /**
   * deployment findFirst
   */
  export type deploymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deployment
     */
    select?: deploymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: deploymentInclude<ExtArgs> | null;
    /**
     * Filter, which deployment to fetch.
     */
    where?: deploymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of deployments to fetch.
     */
    orderBy?: deploymentOrderByWithRelationInput | deploymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for deployments.
     */
    cursor?: deploymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` deployments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` deployments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of deployments.
     */
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[];
  };

  /**
   * deployment findFirstOrThrow
   */
  export type deploymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deployment
     */
    select?: deploymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: deploymentInclude<ExtArgs> | null;
    /**
     * Filter, which deployment to fetch.
     */
    where?: deploymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of deployments to fetch.
     */
    orderBy?: deploymentOrderByWithRelationInput | deploymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for deployments.
     */
    cursor?: deploymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` deployments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` deployments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of deployments.
     */
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[];
  };

  /**
   * deployment findMany
   */
  export type deploymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deployment
     */
    select?: deploymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: deploymentInclude<ExtArgs> | null;
    /**
     * Filter, which deployments to fetch.
     */
    where?: deploymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of deployments to fetch.
     */
    orderBy?: deploymentOrderByWithRelationInput | deploymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing deployments.
     */
    cursor?: deploymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` deployments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` deployments.
     */
    skip?: number;
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[];
  };

  /**
   * deployment create
   */
  export type deploymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deployment
     */
    select?: deploymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: deploymentInclude<ExtArgs> | null;
    /**
     * The data needed to create a deployment.
     */
    data: XOR<deploymentCreateInput, deploymentUncheckedCreateInput>;
  };

  /**
   * deployment createMany
   */
  export type deploymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many deployments.
     */
    data: deploymentCreateManyInput | deploymentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * deployment update
   */
  export type deploymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deployment
     */
    select?: deploymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: deploymentInclude<ExtArgs> | null;
    /**
     * The data needed to update a deployment.
     */
    data: XOR<deploymentUpdateInput, deploymentUncheckedUpdateInput>;
    /**
     * Choose, which deployment to update.
     */
    where: deploymentWhereUniqueInput;
  };

  /**
   * deployment updateMany
   */
  export type deploymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update deployments.
     */
    data: XOR<deploymentUpdateManyMutationInput, deploymentUncheckedUpdateManyInput>;
    /**
     * Filter which deployments to update
     */
    where?: deploymentWhereInput;
  };

  /**
   * deployment upsert
   */
  export type deploymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deployment
     */
    select?: deploymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: deploymentInclude<ExtArgs> | null;
    /**
     * The filter to search for the deployment to update in case it exists.
     */
    where: deploymentWhereUniqueInput;
    /**
     * In case the deployment found by the `where` argument doesn't exist, create a new deployment with this data.
     */
    create: XOR<deploymentCreateInput, deploymentUncheckedCreateInput>;
    /**
     * In case the deployment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<deploymentUpdateInput, deploymentUncheckedUpdateInput>;
  };

  /**
   * deployment delete
   */
  export type deploymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deployment
     */
    select?: deploymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: deploymentInclude<ExtArgs> | null;
    /**
     * Filter which deployment to delete.
     */
    where: deploymentWhereUniqueInput;
  };

  /**
   * deployment deleteMany
   */
  export type deploymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which deployments to delete
     */
    where?: deploymentWhereInput;
  };

  /**
   * deployment.test
   */
  export type deployment$testArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: testInclude<ExtArgs> | null;
    where?: testWhereInput;
    orderBy?: testOrderByWithRelationInput | testOrderByWithRelationInput[];
    cursor?: testWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[];
  };

  /**
   * deployment without action
   */
  export type deploymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deployment
     */
    select?: deploymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: deploymentInclude<ExtArgs> | null;
  };

  /**
   * Model test
   */

  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null;
    _min: TestMinAggregateOutputType | null;
    _max: TestMaxAggregateOutputType | null;
  };

  export type TestMinAggregateOutputType = {
    id: string | null;
    test_name: string | null;
    test_result: string | null;
    user_id: string | null;
    deployment_id: string | null;
    test_status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TestMaxAggregateOutputType = {
    id: string | null;
    test_name: string | null;
    test_result: string | null;
    user_id: string | null;
    deployment_id: string | null;
    test_status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TestCountAggregateOutputType = {
    id: number;
    test_name: number;
    test_result: number;
    user_id: number;
    deployment_id: number;
    test_status: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TestMinAggregateInputType = {
    id?: true;
    test_name?: true;
    test_result?: true;
    user_id?: true;
    deployment_id?: true;
    test_status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TestMaxAggregateInputType = {
    id?: true;
    test_name?: true;
    test_result?: true;
    user_id?: true;
    deployment_id?: true;
    test_status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TestCountAggregateInputType = {
    id?: true;
    test_name?: true;
    test_result?: true;
    user_id?: true;
    deployment_id?: true;
    test_status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which test to aggregate.
     */
    where?: testWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tests to fetch.
     */
    orderBy?: testOrderByWithRelationInput | testOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: testWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tests
     **/
    _count?: true | TestCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TestMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TestMaxAggregateInputType;
  };

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
    [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>;
  };

  export type testGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: testWhereInput;
    orderBy?: testOrderByWithAggregationInput | testOrderByWithAggregationInput[];
    by: TestScalarFieldEnum[] | TestScalarFieldEnum;
    having?: testScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TestCountAggregateInputType | true;
    _min?: TestMinAggregateInputType;
    _max?: TestMaxAggregateInputType;
  };

  export type TestGroupByOutputType = {
    id: string;
    test_name: string;
    test_result: string;
    user_id: string;
    deployment_id: string;
    test_status: string;
    created_at: Date;
    updated_at: Date;
    _count: TestCountAggregateOutputType | null;
    _min: TestMinAggregateOutputType | null;
    _max: TestMaxAggregateOutputType | null;
  };

  type GetTestGroupByPayload<T extends testGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TestGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TestGroupByOutputType[P]>
          : GetScalarType<T[P], TestGroupByOutputType[P]>;
      }
    >
  >;

  export type testSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      test_name?: boolean;
      test_result?: boolean;
      user_id?: boolean;
      deployment_id?: boolean;
      test_status?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      bug?: boolean | test$bugArgs<ExtArgs>;
      deployment?: boolean | deploymentDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      _count?: boolean | TestCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['test']
  >;

  export type testSelectScalar = {
    id?: boolean;
    test_name?: boolean;
    test_result?: boolean;
    user_id?: boolean;
    deployment_id?: boolean;
    test_status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type testInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bug?: boolean | test$bugArgs<ExtArgs>;
    deployment?: boolean | deploymentDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | TestCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $testPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'test';
    objects: {
      bug: Prisma.$bugPayload<ExtArgs>[];
      deployment: Prisma.$deploymentPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        test_name: string;
        test_result: string;
        user_id: string;
        deployment_id: string;
        test_status: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['test']
    >;
    composites: {};
  };

  type testGetPayload<S extends boolean | null | undefined | testDefaultArgs> = $Result.GetResult<
    Prisma.$testPayload,
    S
  >;

  type testCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    testFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: TestCountAggregateInputType | true;
  };

  export interface testDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['test']; meta: { name: 'test' } };
    /**
     * Find zero or one Test that matches the filter.
     * @param {testFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends testFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, testFindUniqueArgs<ExtArgs>>,
    ): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Test that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {testFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends testFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, testFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends testFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, testFindFirstArgs<ExtArgs>>,
    ): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Test that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends testFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, testFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     *
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const testWithIdOnly = await prisma.test.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends testFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, testFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Test.
     * @param {testCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     *
     **/
    create<T extends testCreateArgs<ExtArgs>>(
      args: SelectSubset<T, testCreateArgs<ExtArgs>>,
    ): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Tests.
     *     @param {testCreateManyArgs} args - Arguments to create many Tests.
     *     @example
     *     // Create many Tests
     *     const test = await prisma.test.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends testCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, testCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Test.
     * @param {testDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     *
     **/
    delete<T extends testDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, testDeleteArgs<ExtArgs>>,
    ): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Test.
     * @param {testUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends testUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, testUpdateArgs<ExtArgs>>,
    ): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Tests.
     * @param {testDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends testDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, testDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends testUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, testUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Test.
     * @param {testUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
     **/
    upsert<T extends testUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, testUpsertArgs<ExtArgs>>,
    ): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
     **/
    count<T extends testCountArgs>(
      args?: Subset<T, testCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TestAggregateArgs>(
      args: Subset<T, TestAggregateArgs>,
    ): Prisma.PrismaPromise<GetTestAggregateType<T>>;

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends testGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: testGroupByArgs['orderBy'] }
        : { orderBy?: testGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, testGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the test model
     */
    readonly fields: testFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__testClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    bug<T extends test$bugArgs<ExtArgs> = {}>(
      args?: Subset<T, test$bugArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bugPayload<ExtArgs>, T, 'findMany'> | Null>;

    deployment<T extends deploymentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, deploymentDefaultArgs<ExtArgs>>,
    ): Prisma__deploymentClient<
      $Result.GetResult<Prisma.$deploymentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the test model
   */
  interface testFieldRefs {
    readonly id: FieldRef<'test', 'String'>;
    readonly test_name: FieldRef<'test', 'String'>;
    readonly test_result: FieldRef<'test', 'String'>;
    readonly user_id: FieldRef<'test', 'String'>;
    readonly deployment_id: FieldRef<'test', 'String'>;
    readonly test_status: FieldRef<'test', 'String'>;
    readonly created_at: FieldRef<'test', 'DateTime'>;
    readonly updated_at: FieldRef<'test', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * test findUnique
   */
  export type testFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: testInclude<ExtArgs> | null;
    /**
     * Filter, which test to fetch.
     */
    where: testWhereUniqueInput;
  };

  /**
   * test findUniqueOrThrow
   */
  export type testFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: testInclude<ExtArgs> | null;
    /**
     * Filter, which test to fetch.
     */
    where: testWhereUniqueInput;
  };

  /**
   * test findFirst
   */
  export type testFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: testInclude<ExtArgs> | null;
    /**
     * Filter, which test to fetch.
     */
    where?: testWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tests to fetch.
     */
    orderBy?: testOrderByWithRelationInput | testOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tests.
     */
    cursor?: testWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[];
  };

  /**
   * test findFirstOrThrow
   */
  export type testFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: testInclude<ExtArgs> | null;
    /**
     * Filter, which test to fetch.
     */
    where?: testWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tests to fetch.
     */
    orderBy?: testOrderByWithRelationInput | testOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tests.
     */
    cursor?: testWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[];
  };

  /**
   * test findMany
   */
  export type testFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: testInclude<ExtArgs> | null;
    /**
     * Filter, which tests to fetch.
     */
    where?: testWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tests to fetch.
     */
    orderBy?: testOrderByWithRelationInput | testOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tests.
     */
    cursor?: testWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tests.
     */
    skip?: number;
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[];
  };

  /**
   * test create
   */
  export type testCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: testInclude<ExtArgs> | null;
    /**
     * The data needed to create a test.
     */
    data: XOR<testCreateInput, testUncheckedCreateInput>;
  };

  /**
   * test createMany
   */
  export type testCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tests.
     */
    data: testCreateManyInput | testCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * test update
   */
  export type testUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: testInclude<ExtArgs> | null;
    /**
     * The data needed to update a test.
     */
    data: XOR<testUpdateInput, testUncheckedUpdateInput>;
    /**
     * Choose, which test to update.
     */
    where: testWhereUniqueInput;
  };

  /**
   * test updateMany
   */
  export type testUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tests.
     */
    data: XOR<testUpdateManyMutationInput, testUncheckedUpdateManyInput>;
    /**
     * Filter which tests to update
     */
    where?: testWhereInput;
  };

  /**
   * test upsert
   */
  export type testUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: testInclude<ExtArgs> | null;
    /**
     * The filter to search for the test to update in case it exists.
     */
    where: testWhereUniqueInput;
    /**
     * In case the test found by the `where` argument doesn't exist, create a new test with this data.
     */
    create: XOR<testCreateInput, testUncheckedCreateInput>;
    /**
     * In case the test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<testUpdateInput, testUncheckedUpdateInput>;
  };

  /**
   * test delete
   */
  export type testDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: testInclude<ExtArgs> | null;
    /**
     * Filter which test to delete.
     */
    where: testWhereUniqueInput;
  };

  /**
   * test deleteMany
   */
  export type testDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tests to delete
     */
    where?: testWhereInput;
  };

  /**
   * test.bug
   */
  export type test$bugArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bug
     */
    select?: bugSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bugInclude<ExtArgs> | null;
    where?: bugWhereInput;
    orderBy?: bugOrderByWithRelationInput | bugOrderByWithRelationInput[];
    cursor?: bugWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BugScalarFieldEnum | BugScalarFieldEnum[];
  };

  /**
   * test without action
   */
  export type testDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: testInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      application?: boolean | user$applicationArgs<ExtArgs>;
      bug?: boolean | user$bugArgs<ExtArgs>;
      deployment?: boolean | user$deploymentArgs<ExtArgs>;
      test?: boolean | user$testArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | user$applicationArgs<ExtArgs>;
    bug?: boolean | user$bugArgs<ExtArgs>;
    deployment?: boolean | user$deploymentArgs<ExtArgs>;
    test?: boolean | user$testArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      application: Prisma.$applicationPayload<ExtArgs>[];
      bug: Prisma.$bugPayload<ExtArgs>[];
      deployment: Prisma.$deploymentPayload<ExtArgs>[];
      test: Prisma.$testPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    application<T extends user$applicationArgs<ExtArgs> = {}>(
      args?: Subset<T, user$applicationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    bug<T extends user$bugArgs<ExtArgs> = {}>(
      args?: Subset<T, user$bugArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bugPayload<ExtArgs>, T, 'findMany'> | Null>;

    deployment<T extends user$deploymentArgs<ExtArgs> = {}>(
      args?: Subset<T, user$deploymentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$deploymentPayload<ExtArgs>, T, 'findMany'> | Null>;

    test<T extends user$testArgs<ExtArgs> = {}>(
      args?: Subset<T, user$testArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.application
   */
  export type user$applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application
     */
    select?: applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicationInclude<ExtArgs> | null;
    where?: applicationWhereInput;
    orderBy?: applicationOrderByWithRelationInput | applicationOrderByWithRelationInput[];
    cursor?: applicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * user.bug
   */
  export type user$bugArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bug
     */
    select?: bugSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bugInclude<ExtArgs> | null;
    where?: bugWhereInput;
    orderBy?: bugOrderByWithRelationInput | bugOrderByWithRelationInput[];
    cursor?: bugWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BugScalarFieldEnum | BugScalarFieldEnum[];
  };

  /**
   * user.deployment
   */
  export type user$deploymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deployment
     */
    select?: deploymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: deploymentInclude<ExtArgs> | null;
    where?: deploymentWhereInput;
    orderBy?: deploymentOrderByWithRelationInput | deploymentOrderByWithRelationInput[];
    cursor?: deploymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[];
  };

  /**
   * user.test
   */
  export type user$testArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: testInclude<ExtArgs> | null;
    where?: testWhereInput;
    orderBy?: testOrderByWithRelationInput | testOrderByWithRelationInput[];
    cursor?: testWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const ApplicationScalarFieldEnum: {
    id: 'id';
    app_name: 'app_name';
    app_version: 'app_version';
    user_id: 'user_id';
    company_id: 'company_id';
    app_status: 'app_status';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum];

  export const BugScalarFieldEnum: {
    id: 'id';
    bug_name: 'bug_name';
    bug_status: 'bug_status';
    user_id: 'user_id';
    test_id: 'test_id';
    bug_description: 'bug_description';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type BugScalarFieldEnum = (typeof BugScalarFieldEnum)[keyof typeof BugScalarFieldEnum];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    phone_number: 'phone_number';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const DeploymentScalarFieldEnum: {
    id: 'id';
    deployment_name: 'deployment_name';
    deployment_version: 'deployment_version';
    deployment_status: 'deployment_status';
    user_id: 'user_id';
    company_id: 'company_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type DeploymentScalarFieldEnum = (typeof DeploymentScalarFieldEnum)[keyof typeof DeploymentScalarFieldEnum];

  export const TestScalarFieldEnum: {
    id: 'id';
    test_name: 'test_name';
    test_result: 'test_result';
    user_id: 'user_id';
    deployment_id: 'deployment_id';
    test_status: 'test_status';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Deep Input Types
   */

  export type applicationWhereInput = {
    AND?: applicationWhereInput | applicationWhereInput[];
    OR?: applicationWhereInput[];
    NOT?: applicationWhereInput | applicationWhereInput[];
    id?: UuidFilter<'application'> | string;
    app_name?: StringFilter<'application'> | string;
    app_version?: StringFilter<'application'> | string;
    user_id?: UuidFilter<'application'> | string;
    company_id?: UuidFilter<'application'> | string;
    app_status?: StringFilter<'application'> | string;
    created_at?: DateTimeFilter<'application'> | Date | string;
    updated_at?: DateTimeFilter<'application'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type applicationOrderByWithRelationInput = {
    id?: SortOrder;
    app_name?: SortOrder;
    app_version?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    app_status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type applicationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: applicationWhereInput | applicationWhereInput[];
      OR?: applicationWhereInput[];
      NOT?: applicationWhereInput | applicationWhereInput[];
      app_name?: StringFilter<'application'> | string;
      app_version?: StringFilter<'application'> | string;
      user_id?: UuidFilter<'application'> | string;
      company_id?: UuidFilter<'application'> | string;
      app_status?: StringFilter<'application'> | string;
      created_at?: DateTimeFilter<'application'> | Date | string;
      updated_at?: DateTimeFilter<'application'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type applicationOrderByWithAggregationInput = {
    id?: SortOrder;
    app_name?: SortOrder;
    app_version?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    app_status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: applicationCountOrderByAggregateInput;
    _max?: applicationMaxOrderByAggregateInput;
    _min?: applicationMinOrderByAggregateInput;
  };

  export type applicationScalarWhereWithAggregatesInput = {
    AND?: applicationScalarWhereWithAggregatesInput | applicationScalarWhereWithAggregatesInput[];
    OR?: applicationScalarWhereWithAggregatesInput[];
    NOT?: applicationScalarWhereWithAggregatesInput | applicationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'application'> | string;
    app_name?: StringWithAggregatesFilter<'application'> | string;
    app_version?: StringWithAggregatesFilter<'application'> | string;
    user_id?: UuidWithAggregatesFilter<'application'> | string;
    company_id?: UuidWithAggregatesFilter<'application'> | string;
    app_status?: StringWithAggregatesFilter<'application'> | string;
    created_at?: DateTimeWithAggregatesFilter<'application'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'application'> | Date | string;
  };

  export type bugWhereInput = {
    AND?: bugWhereInput | bugWhereInput[];
    OR?: bugWhereInput[];
    NOT?: bugWhereInput | bugWhereInput[];
    id?: UuidFilter<'bug'> | string;
    bug_name?: StringFilter<'bug'> | string;
    bug_status?: StringFilter<'bug'> | string;
    user_id?: UuidFilter<'bug'> | string;
    test_id?: UuidFilter<'bug'> | string;
    bug_description?: StringNullableFilter<'bug'> | string | null;
    created_at?: DateTimeFilter<'bug'> | Date | string;
    updated_at?: DateTimeFilter<'bug'> | Date | string;
    test?: XOR<TestRelationFilter, testWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type bugOrderByWithRelationInput = {
    id?: SortOrder;
    bug_name?: SortOrder;
    bug_status?: SortOrder;
    user_id?: SortOrder;
    test_id?: SortOrder;
    bug_description?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    test?: testOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type bugWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: bugWhereInput | bugWhereInput[];
      OR?: bugWhereInput[];
      NOT?: bugWhereInput | bugWhereInput[];
      bug_name?: StringFilter<'bug'> | string;
      bug_status?: StringFilter<'bug'> | string;
      user_id?: UuidFilter<'bug'> | string;
      test_id?: UuidFilter<'bug'> | string;
      bug_description?: StringNullableFilter<'bug'> | string | null;
      created_at?: DateTimeFilter<'bug'> | Date | string;
      updated_at?: DateTimeFilter<'bug'> | Date | string;
      test?: XOR<TestRelationFilter, testWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type bugOrderByWithAggregationInput = {
    id?: SortOrder;
    bug_name?: SortOrder;
    bug_status?: SortOrder;
    user_id?: SortOrder;
    test_id?: SortOrder;
    bug_description?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: bugCountOrderByAggregateInput;
    _max?: bugMaxOrderByAggregateInput;
    _min?: bugMinOrderByAggregateInput;
  };

  export type bugScalarWhereWithAggregatesInput = {
    AND?: bugScalarWhereWithAggregatesInput | bugScalarWhereWithAggregatesInput[];
    OR?: bugScalarWhereWithAggregatesInput[];
    NOT?: bugScalarWhereWithAggregatesInput | bugScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'bug'> | string;
    bug_name?: StringWithAggregatesFilter<'bug'> | string;
    bug_status?: StringWithAggregatesFilter<'bug'> | string;
    user_id?: UuidWithAggregatesFilter<'bug'> | string;
    test_id?: UuidWithAggregatesFilter<'bug'> | string;
    bug_description?: StringNullableWithAggregatesFilter<'bug'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'bug'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'bug'> | Date | string;
  };

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    address?: StringNullableFilter<'company'> | string | null;
    phone_number?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    tenant_id?: StringFilter<'company'> | string;
    application?: ApplicationListRelationFilter;
    deployment?: DeploymentListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    phone_number?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    application?: applicationOrderByRelationAggregateInput;
    deployment?: deploymentOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      address?: StringNullableFilter<'company'> | string | null;
      phone_number?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      tenant_id?: StringFilter<'company'> | string;
      application?: ApplicationListRelationFilter;
      deployment?: DeploymentListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    phone_number?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    address?: StringNullableWithAggregatesFilter<'company'> | string | null;
    phone_number?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type deploymentWhereInput = {
    AND?: deploymentWhereInput | deploymentWhereInput[];
    OR?: deploymentWhereInput[];
    NOT?: deploymentWhereInput | deploymentWhereInput[];
    id?: UuidFilter<'deployment'> | string;
    deployment_name?: StringFilter<'deployment'> | string;
    deployment_version?: StringFilter<'deployment'> | string;
    deployment_status?: StringFilter<'deployment'> | string;
    user_id?: UuidFilter<'deployment'> | string;
    company_id?: UuidFilter<'deployment'> | string;
    created_at?: DateTimeFilter<'deployment'> | Date | string;
    updated_at?: DateTimeFilter<'deployment'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
    test?: TestListRelationFilter;
  };

  export type deploymentOrderByWithRelationInput = {
    id?: SortOrder;
    deployment_name?: SortOrder;
    deployment_version?: SortOrder;
    deployment_status?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
    test?: testOrderByRelationAggregateInput;
  };

  export type deploymentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: deploymentWhereInput | deploymentWhereInput[];
      OR?: deploymentWhereInput[];
      NOT?: deploymentWhereInput | deploymentWhereInput[];
      deployment_name?: StringFilter<'deployment'> | string;
      deployment_version?: StringFilter<'deployment'> | string;
      deployment_status?: StringFilter<'deployment'> | string;
      user_id?: UuidFilter<'deployment'> | string;
      company_id?: UuidFilter<'deployment'> | string;
      created_at?: DateTimeFilter<'deployment'> | Date | string;
      updated_at?: DateTimeFilter<'deployment'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
      test?: TestListRelationFilter;
    },
    'id'
  >;

  export type deploymentOrderByWithAggregationInput = {
    id?: SortOrder;
    deployment_name?: SortOrder;
    deployment_version?: SortOrder;
    deployment_status?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: deploymentCountOrderByAggregateInput;
    _max?: deploymentMaxOrderByAggregateInput;
    _min?: deploymentMinOrderByAggregateInput;
  };

  export type deploymentScalarWhereWithAggregatesInput = {
    AND?: deploymentScalarWhereWithAggregatesInput | deploymentScalarWhereWithAggregatesInput[];
    OR?: deploymentScalarWhereWithAggregatesInput[];
    NOT?: deploymentScalarWhereWithAggregatesInput | deploymentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'deployment'> | string;
    deployment_name?: StringWithAggregatesFilter<'deployment'> | string;
    deployment_version?: StringWithAggregatesFilter<'deployment'> | string;
    deployment_status?: StringWithAggregatesFilter<'deployment'> | string;
    user_id?: UuidWithAggregatesFilter<'deployment'> | string;
    company_id?: UuidWithAggregatesFilter<'deployment'> | string;
    created_at?: DateTimeWithAggregatesFilter<'deployment'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'deployment'> | Date | string;
  };

  export type testWhereInput = {
    AND?: testWhereInput | testWhereInput[];
    OR?: testWhereInput[];
    NOT?: testWhereInput | testWhereInput[];
    id?: UuidFilter<'test'> | string;
    test_name?: StringFilter<'test'> | string;
    test_result?: StringFilter<'test'> | string;
    user_id?: UuidFilter<'test'> | string;
    deployment_id?: UuidFilter<'test'> | string;
    test_status?: StringFilter<'test'> | string;
    created_at?: DateTimeFilter<'test'> | Date | string;
    updated_at?: DateTimeFilter<'test'> | Date | string;
    bug?: BugListRelationFilter;
    deployment?: XOR<DeploymentRelationFilter, deploymentWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type testOrderByWithRelationInput = {
    id?: SortOrder;
    test_name?: SortOrder;
    test_result?: SortOrder;
    user_id?: SortOrder;
    deployment_id?: SortOrder;
    test_status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    bug?: bugOrderByRelationAggregateInput;
    deployment?: deploymentOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type testWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: testWhereInput | testWhereInput[];
      OR?: testWhereInput[];
      NOT?: testWhereInput | testWhereInput[];
      test_name?: StringFilter<'test'> | string;
      test_result?: StringFilter<'test'> | string;
      user_id?: UuidFilter<'test'> | string;
      deployment_id?: UuidFilter<'test'> | string;
      test_status?: StringFilter<'test'> | string;
      created_at?: DateTimeFilter<'test'> | Date | string;
      updated_at?: DateTimeFilter<'test'> | Date | string;
      bug?: BugListRelationFilter;
      deployment?: XOR<DeploymentRelationFilter, deploymentWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type testOrderByWithAggregationInput = {
    id?: SortOrder;
    test_name?: SortOrder;
    test_result?: SortOrder;
    user_id?: SortOrder;
    deployment_id?: SortOrder;
    test_status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: testCountOrderByAggregateInput;
    _max?: testMaxOrderByAggregateInput;
    _min?: testMinOrderByAggregateInput;
  };

  export type testScalarWhereWithAggregatesInput = {
    AND?: testScalarWhereWithAggregatesInput | testScalarWhereWithAggregatesInput[];
    OR?: testScalarWhereWithAggregatesInput[];
    NOT?: testScalarWhereWithAggregatesInput | testScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'test'> | string;
    test_name?: StringWithAggregatesFilter<'test'> | string;
    test_result?: StringWithAggregatesFilter<'test'> | string;
    user_id?: UuidWithAggregatesFilter<'test'> | string;
    deployment_id?: UuidWithAggregatesFilter<'test'> | string;
    test_status?: StringWithAggregatesFilter<'test'> | string;
    created_at?: DateTimeWithAggregatesFilter<'test'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'test'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    application?: ApplicationListRelationFilter;
    bug?: BugListRelationFilter;
    deployment?: DeploymentListRelationFilter;
    test?: TestListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    application?: applicationOrderByRelationAggregateInput;
    bug?: bugOrderByRelationAggregateInput;
    deployment?: deploymentOrderByRelationAggregateInput;
    test?: testOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      application?: ApplicationListRelationFilter;
      bug?: BugListRelationFilter;
      deployment?: DeploymentListRelationFilter;
      test?: TestListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type applicationCreateInput = {
    id?: string;
    app_name: string;
    app_version: string;
    app_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutApplicationInput;
    user: userCreateNestedOneWithoutApplicationInput;
  };

  export type applicationUncheckedCreateInput = {
    id?: string;
    app_name: string;
    app_version: string;
    user_id: string;
    company_id: string;
    app_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    app_name?: StringFieldUpdateOperationsInput | string;
    app_version?: StringFieldUpdateOperationsInput | string;
    app_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutApplicationNestedInput;
    user?: userUpdateOneRequiredWithoutApplicationNestedInput;
  };

  export type applicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    app_name?: StringFieldUpdateOperationsInput | string;
    app_version?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    app_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicationCreateManyInput = {
    id?: string;
    app_name: string;
    app_version: string;
    user_id: string;
    company_id: string;
    app_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    app_name?: StringFieldUpdateOperationsInput | string;
    app_version?: StringFieldUpdateOperationsInput | string;
    app_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    app_name?: StringFieldUpdateOperationsInput | string;
    app_version?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    app_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bugCreateInput = {
    id?: string;
    bug_name: string;
    bug_status: string;
    bug_description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    test: testCreateNestedOneWithoutBugInput;
    user: userCreateNestedOneWithoutBugInput;
  };

  export type bugUncheckedCreateInput = {
    id?: string;
    bug_name: string;
    bug_status: string;
    user_id: string;
    test_id: string;
    bug_description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bugUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bug_name?: StringFieldUpdateOperationsInput | string;
    bug_status?: StringFieldUpdateOperationsInput | string;
    bug_description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    test?: testUpdateOneRequiredWithoutBugNestedInput;
    user?: userUpdateOneRequiredWithoutBugNestedInput;
  };

  export type bugUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bug_name?: StringFieldUpdateOperationsInput | string;
    bug_status?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    test_id?: StringFieldUpdateOperationsInput | string;
    bug_description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bugCreateManyInput = {
    id?: string;
    bug_name: string;
    bug_status: string;
    user_id: string;
    test_id: string;
    bug_description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bugUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bug_name?: StringFieldUpdateOperationsInput | string;
    bug_status?: StringFieldUpdateOperationsInput | string;
    bug_description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bugUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bug_name?: StringFieldUpdateOperationsInput | string;
    bug_status?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    test_id?: StringFieldUpdateOperationsInput | string;
    bug_description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    application?: applicationCreateNestedManyWithoutCompanyInput;
    deployment?: deploymentCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    application?: applicationUncheckedCreateNestedManyWithoutCompanyInput;
    deployment?: deploymentUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    application?: applicationUpdateManyWithoutCompanyNestedInput;
    deployment?: deploymentUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    application?: applicationUncheckedUpdateManyWithoutCompanyNestedInput;
    deployment?: deploymentUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type deploymentCreateInput = {
    id?: string;
    deployment_name: string;
    deployment_version: string;
    deployment_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutDeploymentInput;
    user: userCreateNestedOneWithoutDeploymentInput;
    test?: testCreateNestedManyWithoutDeploymentInput;
  };

  export type deploymentUncheckedCreateInput = {
    id?: string;
    deployment_name: string;
    deployment_version: string;
    deployment_status: string;
    user_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    test?: testUncheckedCreateNestedManyWithoutDeploymentInput;
  };

  export type deploymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    deployment_name?: StringFieldUpdateOperationsInput | string;
    deployment_version?: StringFieldUpdateOperationsInput | string;
    deployment_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutDeploymentNestedInput;
    user?: userUpdateOneRequiredWithoutDeploymentNestedInput;
    test?: testUpdateManyWithoutDeploymentNestedInput;
  };

  export type deploymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    deployment_name?: StringFieldUpdateOperationsInput | string;
    deployment_version?: StringFieldUpdateOperationsInput | string;
    deployment_status?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    test?: testUncheckedUpdateManyWithoutDeploymentNestedInput;
  };

  export type deploymentCreateManyInput = {
    id?: string;
    deployment_name: string;
    deployment_version: string;
    deployment_status: string;
    user_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type deploymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    deployment_name?: StringFieldUpdateOperationsInput | string;
    deployment_version?: StringFieldUpdateOperationsInput | string;
    deployment_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type deploymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    deployment_name?: StringFieldUpdateOperationsInput | string;
    deployment_version?: StringFieldUpdateOperationsInput | string;
    deployment_status?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type testCreateInput = {
    id?: string;
    test_name: string;
    test_result: string;
    test_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bug?: bugCreateNestedManyWithoutTestInput;
    deployment: deploymentCreateNestedOneWithoutTestInput;
    user: userCreateNestedOneWithoutTestInput;
  };

  export type testUncheckedCreateInput = {
    id?: string;
    test_name: string;
    test_result: string;
    user_id: string;
    deployment_id: string;
    test_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bug?: bugUncheckedCreateNestedManyWithoutTestInput;
  };

  export type testUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    test_name?: StringFieldUpdateOperationsInput | string;
    test_result?: StringFieldUpdateOperationsInput | string;
    test_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bug?: bugUpdateManyWithoutTestNestedInput;
    deployment?: deploymentUpdateOneRequiredWithoutTestNestedInput;
    user?: userUpdateOneRequiredWithoutTestNestedInput;
  };

  export type testUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    test_name?: StringFieldUpdateOperationsInput | string;
    test_result?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    deployment_id?: StringFieldUpdateOperationsInput | string;
    test_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bug?: bugUncheckedUpdateManyWithoutTestNestedInput;
  };

  export type testCreateManyInput = {
    id?: string;
    test_name: string;
    test_result: string;
    user_id: string;
    deployment_id: string;
    test_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type testUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    test_name?: StringFieldUpdateOperationsInput | string;
    test_result?: StringFieldUpdateOperationsInput | string;
    test_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type testUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    test_name?: StringFieldUpdateOperationsInput | string;
    test_result?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    deployment_id?: StringFieldUpdateOperationsInput | string;
    test_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationCreateNestedManyWithoutUserInput;
    bug?: bugCreateNestedManyWithoutUserInput;
    deployment?: deploymentCreateNestedManyWithoutUserInput;
    test?: testCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationUncheckedCreateNestedManyWithoutUserInput;
    bug?: bugUncheckedCreateNestedManyWithoutUserInput;
    deployment?: deploymentUncheckedCreateNestedManyWithoutUserInput;
    test?: testUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUpdateManyWithoutUserNestedInput;
    bug?: bugUpdateManyWithoutUserNestedInput;
    deployment?: deploymentUpdateManyWithoutUserNestedInput;
    test?: testUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUncheckedUpdateManyWithoutUserNestedInput;
    bug?: bugUncheckedUpdateManyWithoutUserNestedInput;
    deployment?: deploymentUncheckedUpdateManyWithoutUserNestedInput;
    test?: testUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type CompanyRelationFilter = {
    is?: companyWhereInput;
    isNot?: companyWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type applicationCountOrderByAggregateInput = {
    id?: SortOrder;
    app_name?: SortOrder;
    app_version?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    app_status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type applicationMaxOrderByAggregateInput = {
    id?: SortOrder;
    app_name?: SortOrder;
    app_version?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    app_status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type applicationMinOrderByAggregateInput = {
    id?: SortOrder;
    app_name?: SortOrder;
    app_version?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    app_status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type TestRelationFilter = {
    is?: testWhereInput;
    isNot?: testWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type bugCountOrderByAggregateInput = {
    id?: SortOrder;
    bug_name?: SortOrder;
    bug_status?: SortOrder;
    user_id?: SortOrder;
    test_id?: SortOrder;
    bug_description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type bugMaxOrderByAggregateInput = {
    id?: SortOrder;
    bug_name?: SortOrder;
    bug_status?: SortOrder;
    user_id?: SortOrder;
    test_id?: SortOrder;
    bug_description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type bugMinOrderByAggregateInput = {
    id?: SortOrder;
    bug_name?: SortOrder;
    bug_status?: SortOrder;
    user_id?: SortOrder;
    test_id?: SortOrder;
    bug_description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type ApplicationListRelationFilter = {
    every?: applicationWhereInput;
    some?: applicationWhereInput;
    none?: applicationWhereInput;
  };

  export type DeploymentListRelationFilter = {
    every?: deploymentWhereInput;
    some?: deploymentWhereInput;
    none?: deploymentWhereInput;
  };

  export type applicationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type deploymentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type TestListRelationFilter = {
    every?: testWhereInput;
    some?: testWhereInput;
    none?: testWhereInput;
  };

  export type testOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type deploymentCountOrderByAggregateInput = {
    id?: SortOrder;
    deployment_name?: SortOrder;
    deployment_version?: SortOrder;
    deployment_status?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type deploymentMaxOrderByAggregateInput = {
    id?: SortOrder;
    deployment_name?: SortOrder;
    deployment_version?: SortOrder;
    deployment_status?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type deploymentMinOrderByAggregateInput = {
    id?: SortOrder;
    deployment_name?: SortOrder;
    deployment_version?: SortOrder;
    deployment_status?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type BugListRelationFilter = {
    every?: bugWhereInput;
    some?: bugWhereInput;
    none?: bugWhereInput;
  };

  export type DeploymentRelationFilter = {
    is?: deploymentWhereInput;
    isNot?: deploymentWhereInput;
  };

  export type bugOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type testCountOrderByAggregateInput = {
    id?: SortOrder;
    test_name?: SortOrder;
    test_result?: SortOrder;
    user_id?: SortOrder;
    deployment_id?: SortOrder;
    test_status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type testMaxOrderByAggregateInput = {
    id?: SortOrder;
    test_name?: SortOrder;
    test_result?: SortOrder;
    user_id?: SortOrder;
    deployment_id?: SortOrder;
    test_status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type testMinOrderByAggregateInput = {
    id?: SortOrder;
    test_name?: SortOrder;
    test_result?: SortOrder;
    user_id?: SortOrder;
    deployment_id?: SortOrder;
    test_status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type companyCreateNestedOneWithoutApplicationInput = {
    create?: XOR<companyCreateWithoutApplicationInput, companyUncheckedCreateWithoutApplicationInput>;
    connectOrCreate?: companyCreateOrConnectWithoutApplicationInput;
    connect?: companyWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutApplicationInput = {
    create?: XOR<userCreateWithoutApplicationInput, userUncheckedCreateWithoutApplicationInput>;
    connectOrCreate?: userCreateOrConnectWithoutApplicationInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type companyUpdateOneRequiredWithoutApplicationNestedInput = {
    create?: XOR<companyCreateWithoutApplicationInput, companyUncheckedCreateWithoutApplicationInput>;
    connectOrCreate?: companyCreateOrConnectWithoutApplicationInput;
    upsert?: companyUpsertWithoutApplicationInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutApplicationInput, companyUpdateWithoutApplicationInput>,
      companyUncheckedUpdateWithoutApplicationInput
    >;
  };

  export type userUpdateOneRequiredWithoutApplicationNestedInput = {
    create?: XOR<userCreateWithoutApplicationInput, userUncheckedCreateWithoutApplicationInput>;
    connectOrCreate?: userCreateOrConnectWithoutApplicationInput;
    upsert?: userUpsertWithoutApplicationInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutApplicationInput, userUpdateWithoutApplicationInput>,
      userUncheckedUpdateWithoutApplicationInput
    >;
  };

  export type testCreateNestedOneWithoutBugInput = {
    create?: XOR<testCreateWithoutBugInput, testUncheckedCreateWithoutBugInput>;
    connectOrCreate?: testCreateOrConnectWithoutBugInput;
    connect?: testWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutBugInput = {
    create?: XOR<userCreateWithoutBugInput, userUncheckedCreateWithoutBugInput>;
    connectOrCreate?: userCreateOrConnectWithoutBugInput;
    connect?: userWhereUniqueInput;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type testUpdateOneRequiredWithoutBugNestedInput = {
    create?: XOR<testCreateWithoutBugInput, testUncheckedCreateWithoutBugInput>;
    connectOrCreate?: testCreateOrConnectWithoutBugInput;
    upsert?: testUpsertWithoutBugInput;
    connect?: testWhereUniqueInput;
    update?: XOR<
      XOR<testUpdateToOneWithWhereWithoutBugInput, testUpdateWithoutBugInput>,
      testUncheckedUpdateWithoutBugInput
    >;
  };

  export type userUpdateOneRequiredWithoutBugNestedInput = {
    create?: XOR<userCreateWithoutBugInput, userUncheckedCreateWithoutBugInput>;
    connectOrCreate?: userCreateOrConnectWithoutBugInput;
    upsert?: userUpsertWithoutBugInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutBugInput, userUpdateWithoutBugInput>,
      userUncheckedUpdateWithoutBugInput
    >;
  };

  export type applicationCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<applicationCreateWithoutCompanyInput, applicationUncheckedCreateWithoutCompanyInput>
      | applicationCreateWithoutCompanyInput[]
      | applicationUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: applicationCreateOrConnectWithoutCompanyInput | applicationCreateOrConnectWithoutCompanyInput[];
    createMany?: applicationCreateManyCompanyInputEnvelope;
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
  };

  export type deploymentCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<deploymentCreateWithoutCompanyInput, deploymentUncheckedCreateWithoutCompanyInput>
      | deploymentCreateWithoutCompanyInput[]
      | deploymentUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: deploymentCreateOrConnectWithoutCompanyInput | deploymentCreateOrConnectWithoutCompanyInput[];
    createMany?: deploymentCreateManyCompanyInputEnvelope;
    connect?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[];
  };

  export type applicationUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<applicationCreateWithoutCompanyInput, applicationUncheckedCreateWithoutCompanyInput>
      | applicationCreateWithoutCompanyInput[]
      | applicationUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: applicationCreateOrConnectWithoutCompanyInput | applicationCreateOrConnectWithoutCompanyInput[];
    createMany?: applicationCreateManyCompanyInputEnvelope;
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
  };

  export type deploymentUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<deploymentCreateWithoutCompanyInput, deploymentUncheckedCreateWithoutCompanyInput>
      | deploymentCreateWithoutCompanyInput[]
      | deploymentUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: deploymentCreateOrConnectWithoutCompanyInput | deploymentCreateOrConnectWithoutCompanyInput[];
    createMany?: deploymentCreateManyCompanyInputEnvelope;
    connect?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[];
  };

  export type applicationUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<applicationCreateWithoutCompanyInput, applicationUncheckedCreateWithoutCompanyInput>
      | applicationCreateWithoutCompanyInput[]
      | applicationUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: applicationCreateOrConnectWithoutCompanyInput | applicationCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | applicationUpsertWithWhereUniqueWithoutCompanyInput
      | applicationUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: applicationCreateManyCompanyInputEnvelope;
    set?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    disconnect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    delete?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    update?:
      | applicationUpdateWithWhereUniqueWithoutCompanyInput
      | applicationUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | applicationUpdateManyWithWhereWithoutCompanyInput
      | applicationUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: applicationScalarWhereInput | applicationScalarWhereInput[];
  };

  export type deploymentUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<deploymentCreateWithoutCompanyInput, deploymentUncheckedCreateWithoutCompanyInput>
      | deploymentCreateWithoutCompanyInput[]
      | deploymentUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: deploymentCreateOrConnectWithoutCompanyInput | deploymentCreateOrConnectWithoutCompanyInput[];
    upsert?: deploymentUpsertWithWhereUniqueWithoutCompanyInput | deploymentUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: deploymentCreateManyCompanyInputEnvelope;
    set?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[];
    disconnect?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[];
    delete?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[];
    connect?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[];
    update?: deploymentUpdateWithWhereUniqueWithoutCompanyInput | deploymentUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: deploymentUpdateManyWithWhereWithoutCompanyInput | deploymentUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: deploymentScalarWhereInput | deploymentScalarWhereInput[];
  };

  export type applicationUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<applicationCreateWithoutCompanyInput, applicationUncheckedCreateWithoutCompanyInput>
      | applicationCreateWithoutCompanyInput[]
      | applicationUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: applicationCreateOrConnectWithoutCompanyInput | applicationCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | applicationUpsertWithWhereUniqueWithoutCompanyInput
      | applicationUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: applicationCreateManyCompanyInputEnvelope;
    set?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    disconnect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    delete?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    update?:
      | applicationUpdateWithWhereUniqueWithoutCompanyInput
      | applicationUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | applicationUpdateManyWithWhereWithoutCompanyInput
      | applicationUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: applicationScalarWhereInput | applicationScalarWhereInput[];
  };

  export type deploymentUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<deploymentCreateWithoutCompanyInput, deploymentUncheckedCreateWithoutCompanyInput>
      | deploymentCreateWithoutCompanyInput[]
      | deploymentUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: deploymentCreateOrConnectWithoutCompanyInput | deploymentCreateOrConnectWithoutCompanyInput[];
    upsert?: deploymentUpsertWithWhereUniqueWithoutCompanyInput | deploymentUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: deploymentCreateManyCompanyInputEnvelope;
    set?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[];
    disconnect?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[];
    delete?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[];
    connect?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[];
    update?: deploymentUpdateWithWhereUniqueWithoutCompanyInput | deploymentUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: deploymentUpdateManyWithWhereWithoutCompanyInput | deploymentUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: deploymentScalarWhereInput | deploymentScalarWhereInput[];
  };

  export type companyCreateNestedOneWithoutDeploymentInput = {
    create?: XOR<companyCreateWithoutDeploymentInput, companyUncheckedCreateWithoutDeploymentInput>;
    connectOrCreate?: companyCreateOrConnectWithoutDeploymentInput;
    connect?: companyWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutDeploymentInput = {
    create?: XOR<userCreateWithoutDeploymentInput, userUncheckedCreateWithoutDeploymentInput>;
    connectOrCreate?: userCreateOrConnectWithoutDeploymentInput;
    connect?: userWhereUniqueInput;
  };

  export type testCreateNestedManyWithoutDeploymentInput = {
    create?:
      | XOR<testCreateWithoutDeploymentInput, testUncheckedCreateWithoutDeploymentInput>
      | testCreateWithoutDeploymentInput[]
      | testUncheckedCreateWithoutDeploymentInput[];
    connectOrCreate?: testCreateOrConnectWithoutDeploymentInput | testCreateOrConnectWithoutDeploymentInput[];
    createMany?: testCreateManyDeploymentInputEnvelope;
    connect?: testWhereUniqueInput | testWhereUniqueInput[];
  };

  export type testUncheckedCreateNestedManyWithoutDeploymentInput = {
    create?:
      | XOR<testCreateWithoutDeploymentInput, testUncheckedCreateWithoutDeploymentInput>
      | testCreateWithoutDeploymentInput[]
      | testUncheckedCreateWithoutDeploymentInput[];
    connectOrCreate?: testCreateOrConnectWithoutDeploymentInput | testCreateOrConnectWithoutDeploymentInput[];
    createMany?: testCreateManyDeploymentInputEnvelope;
    connect?: testWhereUniqueInput | testWhereUniqueInput[];
  };

  export type companyUpdateOneRequiredWithoutDeploymentNestedInput = {
    create?: XOR<companyCreateWithoutDeploymentInput, companyUncheckedCreateWithoutDeploymentInput>;
    connectOrCreate?: companyCreateOrConnectWithoutDeploymentInput;
    upsert?: companyUpsertWithoutDeploymentInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutDeploymentInput, companyUpdateWithoutDeploymentInput>,
      companyUncheckedUpdateWithoutDeploymentInput
    >;
  };

  export type userUpdateOneRequiredWithoutDeploymentNestedInput = {
    create?: XOR<userCreateWithoutDeploymentInput, userUncheckedCreateWithoutDeploymentInput>;
    connectOrCreate?: userCreateOrConnectWithoutDeploymentInput;
    upsert?: userUpsertWithoutDeploymentInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutDeploymentInput, userUpdateWithoutDeploymentInput>,
      userUncheckedUpdateWithoutDeploymentInput
    >;
  };

  export type testUpdateManyWithoutDeploymentNestedInput = {
    create?:
      | XOR<testCreateWithoutDeploymentInput, testUncheckedCreateWithoutDeploymentInput>
      | testCreateWithoutDeploymentInput[]
      | testUncheckedCreateWithoutDeploymentInput[];
    connectOrCreate?: testCreateOrConnectWithoutDeploymentInput | testCreateOrConnectWithoutDeploymentInput[];
    upsert?: testUpsertWithWhereUniqueWithoutDeploymentInput | testUpsertWithWhereUniqueWithoutDeploymentInput[];
    createMany?: testCreateManyDeploymentInputEnvelope;
    set?: testWhereUniqueInput | testWhereUniqueInput[];
    disconnect?: testWhereUniqueInput | testWhereUniqueInput[];
    delete?: testWhereUniqueInput | testWhereUniqueInput[];
    connect?: testWhereUniqueInput | testWhereUniqueInput[];
    update?: testUpdateWithWhereUniqueWithoutDeploymentInput | testUpdateWithWhereUniqueWithoutDeploymentInput[];
    updateMany?: testUpdateManyWithWhereWithoutDeploymentInput | testUpdateManyWithWhereWithoutDeploymentInput[];
    deleteMany?: testScalarWhereInput | testScalarWhereInput[];
  };

  export type testUncheckedUpdateManyWithoutDeploymentNestedInput = {
    create?:
      | XOR<testCreateWithoutDeploymentInput, testUncheckedCreateWithoutDeploymentInput>
      | testCreateWithoutDeploymentInput[]
      | testUncheckedCreateWithoutDeploymentInput[];
    connectOrCreate?: testCreateOrConnectWithoutDeploymentInput | testCreateOrConnectWithoutDeploymentInput[];
    upsert?: testUpsertWithWhereUniqueWithoutDeploymentInput | testUpsertWithWhereUniqueWithoutDeploymentInput[];
    createMany?: testCreateManyDeploymentInputEnvelope;
    set?: testWhereUniqueInput | testWhereUniqueInput[];
    disconnect?: testWhereUniqueInput | testWhereUniqueInput[];
    delete?: testWhereUniqueInput | testWhereUniqueInput[];
    connect?: testWhereUniqueInput | testWhereUniqueInput[];
    update?: testUpdateWithWhereUniqueWithoutDeploymentInput | testUpdateWithWhereUniqueWithoutDeploymentInput[];
    updateMany?: testUpdateManyWithWhereWithoutDeploymentInput | testUpdateManyWithWhereWithoutDeploymentInput[];
    deleteMany?: testScalarWhereInput | testScalarWhereInput[];
  };

  export type bugCreateNestedManyWithoutTestInput = {
    create?:
      | XOR<bugCreateWithoutTestInput, bugUncheckedCreateWithoutTestInput>
      | bugCreateWithoutTestInput[]
      | bugUncheckedCreateWithoutTestInput[];
    connectOrCreate?: bugCreateOrConnectWithoutTestInput | bugCreateOrConnectWithoutTestInput[];
    createMany?: bugCreateManyTestInputEnvelope;
    connect?: bugWhereUniqueInput | bugWhereUniqueInput[];
  };

  export type deploymentCreateNestedOneWithoutTestInput = {
    create?: XOR<deploymentCreateWithoutTestInput, deploymentUncheckedCreateWithoutTestInput>;
    connectOrCreate?: deploymentCreateOrConnectWithoutTestInput;
    connect?: deploymentWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutTestInput = {
    create?: XOR<userCreateWithoutTestInput, userUncheckedCreateWithoutTestInput>;
    connectOrCreate?: userCreateOrConnectWithoutTestInput;
    connect?: userWhereUniqueInput;
  };

  export type bugUncheckedCreateNestedManyWithoutTestInput = {
    create?:
      | XOR<bugCreateWithoutTestInput, bugUncheckedCreateWithoutTestInput>
      | bugCreateWithoutTestInput[]
      | bugUncheckedCreateWithoutTestInput[];
    connectOrCreate?: bugCreateOrConnectWithoutTestInput | bugCreateOrConnectWithoutTestInput[];
    createMany?: bugCreateManyTestInputEnvelope;
    connect?: bugWhereUniqueInput | bugWhereUniqueInput[];
  };

  export type bugUpdateManyWithoutTestNestedInput = {
    create?:
      | XOR<bugCreateWithoutTestInput, bugUncheckedCreateWithoutTestInput>
      | bugCreateWithoutTestInput[]
      | bugUncheckedCreateWithoutTestInput[];
    connectOrCreate?: bugCreateOrConnectWithoutTestInput | bugCreateOrConnectWithoutTestInput[];
    upsert?: bugUpsertWithWhereUniqueWithoutTestInput | bugUpsertWithWhereUniqueWithoutTestInput[];
    createMany?: bugCreateManyTestInputEnvelope;
    set?: bugWhereUniqueInput | bugWhereUniqueInput[];
    disconnect?: bugWhereUniqueInput | bugWhereUniqueInput[];
    delete?: bugWhereUniqueInput | bugWhereUniqueInput[];
    connect?: bugWhereUniqueInput | bugWhereUniqueInput[];
    update?: bugUpdateWithWhereUniqueWithoutTestInput | bugUpdateWithWhereUniqueWithoutTestInput[];
    updateMany?: bugUpdateManyWithWhereWithoutTestInput | bugUpdateManyWithWhereWithoutTestInput[];
    deleteMany?: bugScalarWhereInput | bugScalarWhereInput[];
  };

  export type deploymentUpdateOneRequiredWithoutTestNestedInput = {
    create?: XOR<deploymentCreateWithoutTestInput, deploymentUncheckedCreateWithoutTestInput>;
    connectOrCreate?: deploymentCreateOrConnectWithoutTestInput;
    upsert?: deploymentUpsertWithoutTestInput;
    connect?: deploymentWhereUniqueInput;
    update?: XOR<
      XOR<deploymentUpdateToOneWithWhereWithoutTestInput, deploymentUpdateWithoutTestInput>,
      deploymentUncheckedUpdateWithoutTestInput
    >;
  };

  export type userUpdateOneRequiredWithoutTestNestedInput = {
    create?: XOR<userCreateWithoutTestInput, userUncheckedCreateWithoutTestInput>;
    connectOrCreate?: userCreateOrConnectWithoutTestInput;
    upsert?: userUpsertWithoutTestInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutTestInput, userUpdateWithoutTestInput>,
      userUncheckedUpdateWithoutTestInput
    >;
  };

  export type bugUncheckedUpdateManyWithoutTestNestedInput = {
    create?:
      | XOR<bugCreateWithoutTestInput, bugUncheckedCreateWithoutTestInput>
      | bugCreateWithoutTestInput[]
      | bugUncheckedCreateWithoutTestInput[];
    connectOrCreate?: bugCreateOrConnectWithoutTestInput | bugCreateOrConnectWithoutTestInput[];
    upsert?: bugUpsertWithWhereUniqueWithoutTestInput | bugUpsertWithWhereUniqueWithoutTestInput[];
    createMany?: bugCreateManyTestInputEnvelope;
    set?: bugWhereUniqueInput | bugWhereUniqueInput[];
    disconnect?: bugWhereUniqueInput | bugWhereUniqueInput[];
    delete?: bugWhereUniqueInput | bugWhereUniqueInput[];
    connect?: bugWhereUniqueInput | bugWhereUniqueInput[];
    update?: bugUpdateWithWhereUniqueWithoutTestInput | bugUpdateWithWhereUniqueWithoutTestInput[];
    updateMany?: bugUpdateManyWithWhereWithoutTestInput | bugUpdateManyWithWhereWithoutTestInput[];
    deleteMany?: bugScalarWhereInput | bugScalarWhereInput[];
  };

  export type applicationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<applicationCreateWithoutUserInput, applicationUncheckedCreateWithoutUserInput>
      | applicationCreateWithoutUserInput[]
      | applicationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: applicationCreateOrConnectWithoutUserInput | applicationCreateOrConnectWithoutUserInput[];
    createMany?: applicationCreateManyUserInputEnvelope;
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
  };

  export type bugCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<bugCreateWithoutUserInput, bugUncheckedCreateWithoutUserInput>
      | bugCreateWithoutUserInput[]
      | bugUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bugCreateOrConnectWithoutUserInput | bugCreateOrConnectWithoutUserInput[];
    createMany?: bugCreateManyUserInputEnvelope;
    connect?: bugWhereUniqueInput | bugWhereUniqueInput[];
  };

  export type deploymentCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<deploymentCreateWithoutUserInput, deploymentUncheckedCreateWithoutUserInput>
      | deploymentCreateWithoutUserInput[]
      | deploymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: deploymentCreateOrConnectWithoutUserInput | deploymentCreateOrConnectWithoutUserInput[];
    createMany?: deploymentCreateManyUserInputEnvelope;
    connect?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[];
  };

  export type testCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<testCreateWithoutUserInput, testUncheckedCreateWithoutUserInput>
      | testCreateWithoutUserInput[]
      | testUncheckedCreateWithoutUserInput[];
    connectOrCreate?: testCreateOrConnectWithoutUserInput | testCreateOrConnectWithoutUserInput[];
    createMany?: testCreateManyUserInputEnvelope;
    connect?: testWhereUniqueInput | testWhereUniqueInput[];
  };

  export type applicationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<applicationCreateWithoutUserInput, applicationUncheckedCreateWithoutUserInput>
      | applicationCreateWithoutUserInput[]
      | applicationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: applicationCreateOrConnectWithoutUserInput | applicationCreateOrConnectWithoutUserInput[];
    createMany?: applicationCreateManyUserInputEnvelope;
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
  };

  export type bugUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<bugCreateWithoutUserInput, bugUncheckedCreateWithoutUserInput>
      | bugCreateWithoutUserInput[]
      | bugUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bugCreateOrConnectWithoutUserInput | bugCreateOrConnectWithoutUserInput[];
    createMany?: bugCreateManyUserInputEnvelope;
    connect?: bugWhereUniqueInput | bugWhereUniqueInput[];
  };

  export type deploymentUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<deploymentCreateWithoutUserInput, deploymentUncheckedCreateWithoutUserInput>
      | deploymentCreateWithoutUserInput[]
      | deploymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: deploymentCreateOrConnectWithoutUserInput | deploymentCreateOrConnectWithoutUserInput[];
    createMany?: deploymentCreateManyUserInputEnvelope;
    connect?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[];
  };

  export type testUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<testCreateWithoutUserInput, testUncheckedCreateWithoutUserInput>
      | testCreateWithoutUserInput[]
      | testUncheckedCreateWithoutUserInput[];
    connectOrCreate?: testCreateOrConnectWithoutUserInput | testCreateOrConnectWithoutUserInput[];
    createMany?: testCreateManyUserInputEnvelope;
    connect?: testWhereUniqueInput | testWhereUniqueInput[];
  };

  export type applicationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<applicationCreateWithoutUserInput, applicationUncheckedCreateWithoutUserInput>
      | applicationCreateWithoutUserInput[]
      | applicationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: applicationCreateOrConnectWithoutUserInput | applicationCreateOrConnectWithoutUserInput[];
    upsert?: applicationUpsertWithWhereUniqueWithoutUserInput | applicationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: applicationCreateManyUserInputEnvelope;
    set?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    disconnect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    delete?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    update?: applicationUpdateWithWhereUniqueWithoutUserInput | applicationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: applicationUpdateManyWithWhereWithoutUserInput | applicationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: applicationScalarWhereInput | applicationScalarWhereInput[];
  };

  export type bugUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<bugCreateWithoutUserInput, bugUncheckedCreateWithoutUserInput>
      | bugCreateWithoutUserInput[]
      | bugUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bugCreateOrConnectWithoutUserInput | bugCreateOrConnectWithoutUserInput[];
    upsert?: bugUpsertWithWhereUniqueWithoutUserInput | bugUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: bugCreateManyUserInputEnvelope;
    set?: bugWhereUniqueInput | bugWhereUniqueInput[];
    disconnect?: bugWhereUniqueInput | bugWhereUniqueInput[];
    delete?: bugWhereUniqueInput | bugWhereUniqueInput[];
    connect?: bugWhereUniqueInput | bugWhereUniqueInput[];
    update?: bugUpdateWithWhereUniqueWithoutUserInput | bugUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: bugUpdateManyWithWhereWithoutUserInput | bugUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: bugScalarWhereInput | bugScalarWhereInput[];
  };

  export type deploymentUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<deploymentCreateWithoutUserInput, deploymentUncheckedCreateWithoutUserInput>
      | deploymentCreateWithoutUserInput[]
      | deploymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: deploymentCreateOrConnectWithoutUserInput | deploymentCreateOrConnectWithoutUserInput[];
    upsert?: deploymentUpsertWithWhereUniqueWithoutUserInput | deploymentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: deploymentCreateManyUserInputEnvelope;
    set?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[];
    disconnect?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[];
    delete?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[];
    connect?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[];
    update?: deploymentUpdateWithWhereUniqueWithoutUserInput | deploymentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: deploymentUpdateManyWithWhereWithoutUserInput | deploymentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: deploymentScalarWhereInput | deploymentScalarWhereInput[];
  };

  export type testUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<testCreateWithoutUserInput, testUncheckedCreateWithoutUserInput>
      | testCreateWithoutUserInput[]
      | testUncheckedCreateWithoutUserInput[];
    connectOrCreate?: testCreateOrConnectWithoutUserInput | testCreateOrConnectWithoutUserInput[];
    upsert?: testUpsertWithWhereUniqueWithoutUserInput | testUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: testCreateManyUserInputEnvelope;
    set?: testWhereUniqueInput | testWhereUniqueInput[];
    disconnect?: testWhereUniqueInput | testWhereUniqueInput[];
    delete?: testWhereUniqueInput | testWhereUniqueInput[];
    connect?: testWhereUniqueInput | testWhereUniqueInput[];
    update?: testUpdateWithWhereUniqueWithoutUserInput | testUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: testUpdateManyWithWhereWithoutUserInput | testUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: testScalarWhereInput | testScalarWhereInput[];
  };

  export type applicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<applicationCreateWithoutUserInput, applicationUncheckedCreateWithoutUserInput>
      | applicationCreateWithoutUserInput[]
      | applicationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: applicationCreateOrConnectWithoutUserInput | applicationCreateOrConnectWithoutUserInput[];
    upsert?: applicationUpsertWithWhereUniqueWithoutUserInput | applicationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: applicationCreateManyUserInputEnvelope;
    set?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    disconnect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    delete?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    connect?: applicationWhereUniqueInput | applicationWhereUniqueInput[];
    update?: applicationUpdateWithWhereUniqueWithoutUserInput | applicationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: applicationUpdateManyWithWhereWithoutUserInput | applicationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: applicationScalarWhereInput | applicationScalarWhereInput[];
  };

  export type bugUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<bugCreateWithoutUserInput, bugUncheckedCreateWithoutUserInput>
      | bugCreateWithoutUserInput[]
      | bugUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bugCreateOrConnectWithoutUserInput | bugCreateOrConnectWithoutUserInput[];
    upsert?: bugUpsertWithWhereUniqueWithoutUserInput | bugUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: bugCreateManyUserInputEnvelope;
    set?: bugWhereUniqueInput | bugWhereUniqueInput[];
    disconnect?: bugWhereUniqueInput | bugWhereUniqueInput[];
    delete?: bugWhereUniqueInput | bugWhereUniqueInput[];
    connect?: bugWhereUniqueInput | bugWhereUniqueInput[];
    update?: bugUpdateWithWhereUniqueWithoutUserInput | bugUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: bugUpdateManyWithWhereWithoutUserInput | bugUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: bugScalarWhereInput | bugScalarWhereInput[];
  };

  export type deploymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<deploymentCreateWithoutUserInput, deploymentUncheckedCreateWithoutUserInput>
      | deploymentCreateWithoutUserInput[]
      | deploymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: deploymentCreateOrConnectWithoutUserInput | deploymentCreateOrConnectWithoutUserInput[];
    upsert?: deploymentUpsertWithWhereUniqueWithoutUserInput | deploymentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: deploymentCreateManyUserInputEnvelope;
    set?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[];
    disconnect?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[];
    delete?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[];
    connect?: deploymentWhereUniqueInput | deploymentWhereUniqueInput[];
    update?: deploymentUpdateWithWhereUniqueWithoutUserInput | deploymentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: deploymentUpdateManyWithWhereWithoutUserInput | deploymentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: deploymentScalarWhereInput | deploymentScalarWhereInput[];
  };

  export type testUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<testCreateWithoutUserInput, testUncheckedCreateWithoutUserInput>
      | testCreateWithoutUserInput[]
      | testUncheckedCreateWithoutUserInput[];
    connectOrCreate?: testCreateOrConnectWithoutUserInput | testCreateOrConnectWithoutUserInput[];
    upsert?: testUpsertWithWhereUniqueWithoutUserInput | testUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: testCreateManyUserInputEnvelope;
    set?: testWhereUniqueInput | testWhereUniqueInput[];
    disconnect?: testWhereUniqueInput | testWhereUniqueInput[];
    delete?: testWhereUniqueInput | testWhereUniqueInput[];
    connect?: testWhereUniqueInput | testWhereUniqueInput[];
    update?: testUpdateWithWhereUniqueWithoutUserInput | testUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: testUpdateManyWithWhereWithoutUserInput | testUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: testScalarWhereInput | testScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type companyCreateWithoutApplicationInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    deployment?: deploymentCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutApplicationInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    deployment?: deploymentUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutApplicationInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutApplicationInput, companyUncheckedCreateWithoutApplicationInput>;
  };

  export type userCreateWithoutApplicationInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bug?: bugCreateNestedManyWithoutUserInput;
    deployment?: deploymentCreateNestedManyWithoutUserInput;
    test?: testCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutApplicationInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bug?: bugUncheckedCreateNestedManyWithoutUserInput;
    deployment?: deploymentUncheckedCreateNestedManyWithoutUserInput;
    test?: testUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutApplicationInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutApplicationInput, userUncheckedCreateWithoutApplicationInput>;
  };

  export type companyUpsertWithoutApplicationInput = {
    update: XOR<companyUpdateWithoutApplicationInput, companyUncheckedUpdateWithoutApplicationInput>;
    create: XOR<companyCreateWithoutApplicationInput, companyUncheckedCreateWithoutApplicationInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutApplicationInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutApplicationInput, companyUncheckedUpdateWithoutApplicationInput>;
  };

  export type companyUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    deployment?: deploymentUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    deployment?: deploymentUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type userUpsertWithoutApplicationInput = {
    update: XOR<userUpdateWithoutApplicationInput, userUncheckedUpdateWithoutApplicationInput>;
    create: XOR<userCreateWithoutApplicationInput, userUncheckedCreateWithoutApplicationInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutApplicationInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutApplicationInput, userUncheckedUpdateWithoutApplicationInput>;
  };

  export type userUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bug?: bugUpdateManyWithoutUserNestedInput;
    deployment?: deploymentUpdateManyWithoutUserNestedInput;
    test?: testUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bug?: bugUncheckedUpdateManyWithoutUserNestedInput;
    deployment?: deploymentUncheckedUpdateManyWithoutUserNestedInput;
    test?: testUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type testCreateWithoutBugInput = {
    id?: string;
    test_name: string;
    test_result: string;
    test_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    deployment: deploymentCreateNestedOneWithoutTestInput;
    user: userCreateNestedOneWithoutTestInput;
  };

  export type testUncheckedCreateWithoutBugInput = {
    id?: string;
    test_name: string;
    test_result: string;
    user_id: string;
    deployment_id: string;
    test_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type testCreateOrConnectWithoutBugInput = {
    where: testWhereUniqueInput;
    create: XOR<testCreateWithoutBugInput, testUncheckedCreateWithoutBugInput>;
  };

  export type userCreateWithoutBugInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationCreateNestedManyWithoutUserInput;
    deployment?: deploymentCreateNestedManyWithoutUserInput;
    test?: testCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutBugInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationUncheckedCreateNestedManyWithoutUserInput;
    deployment?: deploymentUncheckedCreateNestedManyWithoutUserInput;
    test?: testUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutBugInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutBugInput, userUncheckedCreateWithoutBugInput>;
  };

  export type testUpsertWithoutBugInput = {
    update: XOR<testUpdateWithoutBugInput, testUncheckedUpdateWithoutBugInput>;
    create: XOR<testCreateWithoutBugInput, testUncheckedCreateWithoutBugInput>;
    where?: testWhereInput;
  };

  export type testUpdateToOneWithWhereWithoutBugInput = {
    where?: testWhereInput;
    data: XOR<testUpdateWithoutBugInput, testUncheckedUpdateWithoutBugInput>;
  };

  export type testUpdateWithoutBugInput = {
    id?: StringFieldUpdateOperationsInput | string;
    test_name?: StringFieldUpdateOperationsInput | string;
    test_result?: StringFieldUpdateOperationsInput | string;
    test_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deployment?: deploymentUpdateOneRequiredWithoutTestNestedInput;
    user?: userUpdateOneRequiredWithoutTestNestedInput;
  };

  export type testUncheckedUpdateWithoutBugInput = {
    id?: StringFieldUpdateOperationsInput | string;
    test_name?: StringFieldUpdateOperationsInput | string;
    test_result?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    deployment_id?: StringFieldUpdateOperationsInput | string;
    test_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutBugInput = {
    update: XOR<userUpdateWithoutBugInput, userUncheckedUpdateWithoutBugInput>;
    create: XOR<userCreateWithoutBugInput, userUncheckedCreateWithoutBugInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutBugInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutBugInput, userUncheckedUpdateWithoutBugInput>;
  };

  export type userUpdateWithoutBugInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUpdateManyWithoutUserNestedInput;
    deployment?: deploymentUpdateManyWithoutUserNestedInput;
    test?: testUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutBugInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUncheckedUpdateManyWithoutUserNestedInput;
    deployment?: deploymentUncheckedUpdateManyWithoutUserNestedInput;
    test?: testUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type applicationCreateWithoutCompanyInput = {
    id?: string;
    app_name: string;
    app_version: string;
    app_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutApplicationInput;
  };

  export type applicationUncheckedCreateWithoutCompanyInput = {
    id?: string;
    app_name: string;
    app_version: string;
    user_id: string;
    app_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicationCreateOrConnectWithoutCompanyInput = {
    where: applicationWhereUniqueInput;
    create: XOR<applicationCreateWithoutCompanyInput, applicationUncheckedCreateWithoutCompanyInput>;
  };

  export type applicationCreateManyCompanyInputEnvelope = {
    data: applicationCreateManyCompanyInput | applicationCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type deploymentCreateWithoutCompanyInput = {
    id?: string;
    deployment_name: string;
    deployment_version: string;
    deployment_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutDeploymentInput;
    test?: testCreateNestedManyWithoutDeploymentInput;
  };

  export type deploymentUncheckedCreateWithoutCompanyInput = {
    id?: string;
    deployment_name: string;
    deployment_version: string;
    deployment_status: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    test?: testUncheckedCreateNestedManyWithoutDeploymentInput;
  };

  export type deploymentCreateOrConnectWithoutCompanyInput = {
    where: deploymentWhereUniqueInput;
    create: XOR<deploymentCreateWithoutCompanyInput, deploymentUncheckedCreateWithoutCompanyInput>;
  };

  export type deploymentCreateManyCompanyInputEnvelope = {
    data: deploymentCreateManyCompanyInput | deploymentCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type applicationUpsertWithWhereUniqueWithoutCompanyInput = {
    where: applicationWhereUniqueInput;
    update: XOR<applicationUpdateWithoutCompanyInput, applicationUncheckedUpdateWithoutCompanyInput>;
    create: XOR<applicationCreateWithoutCompanyInput, applicationUncheckedCreateWithoutCompanyInput>;
  };

  export type applicationUpdateWithWhereUniqueWithoutCompanyInput = {
    where: applicationWhereUniqueInput;
    data: XOR<applicationUpdateWithoutCompanyInput, applicationUncheckedUpdateWithoutCompanyInput>;
  };

  export type applicationUpdateManyWithWhereWithoutCompanyInput = {
    where: applicationScalarWhereInput;
    data: XOR<applicationUpdateManyMutationInput, applicationUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type applicationScalarWhereInput = {
    AND?: applicationScalarWhereInput | applicationScalarWhereInput[];
    OR?: applicationScalarWhereInput[];
    NOT?: applicationScalarWhereInput | applicationScalarWhereInput[];
    id?: UuidFilter<'application'> | string;
    app_name?: StringFilter<'application'> | string;
    app_version?: StringFilter<'application'> | string;
    user_id?: UuidFilter<'application'> | string;
    company_id?: UuidFilter<'application'> | string;
    app_status?: StringFilter<'application'> | string;
    created_at?: DateTimeFilter<'application'> | Date | string;
    updated_at?: DateTimeFilter<'application'> | Date | string;
  };

  export type deploymentUpsertWithWhereUniqueWithoutCompanyInput = {
    where: deploymentWhereUniqueInput;
    update: XOR<deploymentUpdateWithoutCompanyInput, deploymentUncheckedUpdateWithoutCompanyInput>;
    create: XOR<deploymentCreateWithoutCompanyInput, deploymentUncheckedCreateWithoutCompanyInput>;
  };

  export type deploymentUpdateWithWhereUniqueWithoutCompanyInput = {
    where: deploymentWhereUniqueInput;
    data: XOR<deploymentUpdateWithoutCompanyInput, deploymentUncheckedUpdateWithoutCompanyInput>;
  };

  export type deploymentUpdateManyWithWhereWithoutCompanyInput = {
    where: deploymentScalarWhereInput;
    data: XOR<deploymentUpdateManyMutationInput, deploymentUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type deploymentScalarWhereInput = {
    AND?: deploymentScalarWhereInput | deploymentScalarWhereInput[];
    OR?: deploymentScalarWhereInput[];
    NOT?: deploymentScalarWhereInput | deploymentScalarWhereInput[];
    id?: UuidFilter<'deployment'> | string;
    deployment_name?: StringFilter<'deployment'> | string;
    deployment_version?: StringFilter<'deployment'> | string;
    deployment_status?: StringFilter<'deployment'> | string;
    user_id?: UuidFilter<'deployment'> | string;
    company_id?: UuidFilter<'deployment'> | string;
    created_at?: DateTimeFilter<'deployment'> | Date | string;
    updated_at?: DateTimeFilter<'deployment'> | Date | string;
  };

  export type companyCreateWithoutDeploymentInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    application?: applicationCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutDeploymentInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    application?: applicationUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutDeploymentInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutDeploymentInput, companyUncheckedCreateWithoutDeploymentInput>;
  };

  export type userCreateWithoutDeploymentInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationCreateNestedManyWithoutUserInput;
    bug?: bugCreateNestedManyWithoutUserInput;
    test?: testCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutDeploymentInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationUncheckedCreateNestedManyWithoutUserInput;
    bug?: bugUncheckedCreateNestedManyWithoutUserInput;
    test?: testUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutDeploymentInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutDeploymentInput, userUncheckedCreateWithoutDeploymentInput>;
  };

  export type testCreateWithoutDeploymentInput = {
    id?: string;
    test_name: string;
    test_result: string;
    test_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bug?: bugCreateNestedManyWithoutTestInput;
    user: userCreateNestedOneWithoutTestInput;
  };

  export type testUncheckedCreateWithoutDeploymentInput = {
    id?: string;
    test_name: string;
    test_result: string;
    user_id: string;
    test_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bug?: bugUncheckedCreateNestedManyWithoutTestInput;
  };

  export type testCreateOrConnectWithoutDeploymentInput = {
    where: testWhereUniqueInput;
    create: XOR<testCreateWithoutDeploymentInput, testUncheckedCreateWithoutDeploymentInput>;
  };

  export type testCreateManyDeploymentInputEnvelope = {
    data: testCreateManyDeploymentInput | testCreateManyDeploymentInput[];
    skipDuplicates?: boolean;
  };

  export type companyUpsertWithoutDeploymentInput = {
    update: XOR<companyUpdateWithoutDeploymentInput, companyUncheckedUpdateWithoutDeploymentInput>;
    create: XOR<companyCreateWithoutDeploymentInput, companyUncheckedCreateWithoutDeploymentInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutDeploymentInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutDeploymentInput, companyUncheckedUpdateWithoutDeploymentInput>;
  };

  export type companyUpdateWithoutDeploymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    application?: applicationUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutDeploymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    application?: applicationUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type userUpsertWithoutDeploymentInput = {
    update: XOR<userUpdateWithoutDeploymentInput, userUncheckedUpdateWithoutDeploymentInput>;
    create: XOR<userCreateWithoutDeploymentInput, userUncheckedCreateWithoutDeploymentInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutDeploymentInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutDeploymentInput, userUncheckedUpdateWithoutDeploymentInput>;
  };

  export type userUpdateWithoutDeploymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUpdateManyWithoutUserNestedInput;
    bug?: bugUpdateManyWithoutUserNestedInput;
    test?: testUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutDeploymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUncheckedUpdateManyWithoutUserNestedInput;
    bug?: bugUncheckedUpdateManyWithoutUserNestedInput;
    test?: testUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type testUpsertWithWhereUniqueWithoutDeploymentInput = {
    where: testWhereUniqueInput;
    update: XOR<testUpdateWithoutDeploymentInput, testUncheckedUpdateWithoutDeploymentInput>;
    create: XOR<testCreateWithoutDeploymentInput, testUncheckedCreateWithoutDeploymentInput>;
  };

  export type testUpdateWithWhereUniqueWithoutDeploymentInput = {
    where: testWhereUniqueInput;
    data: XOR<testUpdateWithoutDeploymentInput, testUncheckedUpdateWithoutDeploymentInput>;
  };

  export type testUpdateManyWithWhereWithoutDeploymentInput = {
    where: testScalarWhereInput;
    data: XOR<testUpdateManyMutationInput, testUncheckedUpdateManyWithoutDeploymentInput>;
  };

  export type testScalarWhereInput = {
    AND?: testScalarWhereInput | testScalarWhereInput[];
    OR?: testScalarWhereInput[];
    NOT?: testScalarWhereInput | testScalarWhereInput[];
    id?: UuidFilter<'test'> | string;
    test_name?: StringFilter<'test'> | string;
    test_result?: StringFilter<'test'> | string;
    user_id?: UuidFilter<'test'> | string;
    deployment_id?: UuidFilter<'test'> | string;
    test_status?: StringFilter<'test'> | string;
    created_at?: DateTimeFilter<'test'> | Date | string;
    updated_at?: DateTimeFilter<'test'> | Date | string;
  };

  export type bugCreateWithoutTestInput = {
    id?: string;
    bug_name: string;
    bug_status: string;
    bug_description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutBugInput;
  };

  export type bugUncheckedCreateWithoutTestInput = {
    id?: string;
    bug_name: string;
    bug_status: string;
    user_id: string;
    bug_description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bugCreateOrConnectWithoutTestInput = {
    where: bugWhereUniqueInput;
    create: XOR<bugCreateWithoutTestInput, bugUncheckedCreateWithoutTestInput>;
  };

  export type bugCreateManyTestInputEnvelope = {
    data: bugCreateManyTestInput | bugCreateManyTestInput[];
    skipDuplicates?: boolean;
  };

  export type deploymentCreateWithoutTestInput = {
    id?: string;
    deployment_name: string;
    deployment_version: string;
    deployment_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutDeploymentInput;
    user: userCreateNestedOneWithoutDeploymentInput;
  };

  export type deploymentUncheckedCreateWithoutTestInput = {
    id?: string;
    deployment_name: string;
    deployment_version: string;
    deployment_status: string;
    user_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type deploymentCreateOrConnectWithoutTestInput = {
    where: deploymentWhereUniqueInput;
    create: XOR<deploymentCreateWithoutTestInput, deploymentUncheckedCreateWithoutTestInput>;
  };

  export type userCreateWithoutTestInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationCreateNestedManyWithoutUserInput;
    bug?: bugCreateNestedManyWithoutUserInput;
    deployment?: deploymentCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutTestInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    application?: applicationUncheckedCreateNestedManyWithoutUserInput;
    bug?: bugUncheckedCreateNestedManyWithoutUserInput;
    deployment?: deploymentUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutTestInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutTestInput, userUncheckedCreateWithoutTestInput>;
  };

  export type bugUpsertWithWhereUniqueWithoutTestInput = {
    where: bugWhereUniqueInput;
    update: XOR<bugUpdateWithoutTestInput, bugUncheckedUpdateWithoutTestInput>;
    create: XOR<bugCreateWithoutTestInput, bugUncheckedCreateWithoutTestInput>;
  };

  export type bugUpdateWithWhereUniqueWithoutTestInput = {
    where: bugWhereUniqueInput;
    data: XOR<bugUpdateWithoutTestInput, bugUncheckedUpdateWithoutTestInput>;
  };

  export type bugUpdateManyWithWhereWithoutTestInput = {
    where: bugScalarWhereInput;
    data: XOR<bugUpdateManyMutationInput, bugUncheckedUpdateManyWithoutTestInput>;
  };

  export type bugScalarWhereInput = {
    AND?: bugScalarWhereInput | bugScalarWhereInput[];
    OR?: bugScalarWhereInput[];
    NOT?: bugScalarWhereInput | bugScalarWhereInput[];
    id?: UuidFilter<'bug'> | string;
    bug_name?: StringFilter<'bug'> | string;
    bug_status?: StringFilter<'bug'> | string;
    user_id?: UuidFilter<'bug'> | string;
    test_id?: UuidFilter<'bug'> | string;
    bug_description?: StringNullableFilter<'bug'> | string | null;
    created_at?: DateTimeFilter<'bug'> | Date | string;
    updated_at?: DateTimeFilter<'bug'> | Date | string;
  };

  export type deploymentUpsertWithoutTestInput = {
    update: XOR<deploymentUpdateWithoutTestInput, deploymentUncheckedUpdateWithoutTestInput>;
    create: XOR<deploymentCreateWithoutTestInput, deploymentUncheckedCreateWithoutTestInput>;
    where?: deploymentWhereInput;
  };

  export type deploymentUpdateToOneWithWhereWithoutTestInput = {
    where?: deploymentWhereInput;
    data: XOR<deploymentUpdateWithoutTestInput, deploymentUncheckedUpdateWithoutTestInput>;
  };

  export type deploymentUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string;
    deployment_name?: StringFieldUpdateOperationsInput | string;
    deployment_version?: StringFieldUpdateOperationsInput | string;
    deployment_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutDeploymentNestedInput;
    user?: userUpdateOneRequiredWithoutDeploymentNestedInput;
  };

  export type deploymentUncheckedUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string;
    deployment_name?: StringFieldUpdateOperationsInput | string;
    deployment_version?: StringFieldUpdateOperationsInput | string;
    deployment_status?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutTestInput = {
    update: XOR<userUpdateWithoutTestInput, userUncheckedUpdateWithoutTestInput>;
    create: XOR<userCreateWithoutTestInput, userUncheckedCreateWithoutTestInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutTestInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutTestInput, userUncheckedUpdateWithoutTestInput>;
  };

  export type userUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUpdateManyWithoutUserNestedInput;
    bug?: bugUpdateManyWithoutUserNestedInput;
    deployment?: deploymentUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    application?: applicationUncheckedUpdateManyWithoutUserNestedInput;
    bug?: bugUncheckedUpdateManyWithoutUserNestedInput;
    deployment?: deploymentUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type applicationCreateWithoutUserInput = {
    id?: string;
    app_name: string;
    app_version: string;
    app_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutApplicationInput;
  };

  export type applicationUncheckedCreateWithoutUserInput = {
    id?: string;
    app_name: string;
    app_version: string;
    company_id: string;
    app_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicationCreateOrConnectWithoutUserInput = {
    where: applicationWhereUniqueInput;
    create: XOR<applicationCreateWithoutUserInput, applicationUncheckedCreateWithoutUserInput>;
  };

  export type applicationCreateManyUserInputEnvelope = {
    data: applicationCreateManyUserInput | applicationCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type bugCreateWithoutUserInput = {
    id?: string;
    bug_name: string;
    bug_status: string;
    bug_description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    test: testCreateNestedOneWithoutBugInput;
  };

  export type bugUncheckedCreateWithoutUserInput = {
    id?: string;
    bug_name: string;
    bug_status: string;
    test_id: string;
    bug_description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bugCreateOrConnectWithoutUserInput = {
    where: bugWhereUniqueInput;
    create: XOR<bugCreateWithoutUserInput, bugUncheckedCreateWithoutUserInput>;
  };

  export type bugCreateManyUserInputEnvelope = {
    data: bugCreateManyUserInput | bugCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type deploymentCreateWithoutUserInput = {
    id?: string;
    deployment_name: string;
    deployment_version: string;
    deployment_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutDeploymentInput;
    test?: testCreateNestedManyWithoutDeploymentInput;
  };

  export type deploymentUncheckedCreateWithoutUserInput = {
    id?: string;
    deployment_name: string;
    deployment_version: string;
    deployment_status: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    test?: testUncheckedCreateNestedManyWithoutDeploymentInput;
  };

  export type deploymentCreateOrConnectWithoutUserInput = {
    where: deploymentWhereUniqueInput;
    create: XOR<deploymentCreateWithoutUserInput, deploymentUncheckedCreateWithoutUserInput>;
  };

  export type deploymentCreateManyUserInputEnvelope = {
    data: deploymentCreateManyUserInput | deploymentCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type testCreateWithoutUserInput = {
    id?: string;
    test_name: string;
    test_result: string;
    test_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bug?: bugCreateNestedManyWithoutTestInput;
    deployment: deploymentCreateNestedOneWithoutTestInput;
  };

  export type testUncheckedCreateWithoutUserInput = {
    id?: string;
    test_name: string;
    test_result: string;
    deployment_id: string;
    test_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bug?: bugUncheckedCreateNestedManyWithoutTestInput;
  };

  export type testCreateOrConnectWithoutUserInput = {
    where: testWhereUniqueInput;
    create: XOR<testCreateWithoutUserInput, testUncheckedCreateWithoutUserInput>;
  };

  export type testCreateManyUserInputEnvelope = {
    data: testCreateManyUserInput | testCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type applicationUpsertWithWhereUniqueWithoutUserInput = {
    where: applicationWhereUniqueInput;
    update: XOR<applicationUpdateWithoutUserInput, applicationUncheckedUpdateWithoutUserInput>;
    create: XOR<applicationCreateWithoutUserInput, applicationUncheckedCreateWithoutUserInput>;
  };

  export type applicationUpdateWithWhereUniqueWithoutUserInput = {
    where: applicationWhereUniqueInput;
    data: XOR<applicationUpdateWithoutUserInput, applicationUncheckedUpdateWithoutUserInput>;
  };

  export type applicationUpdateManyWithWhereWithoutUserInput = {
    where: applicationScalarWhereInput;
    data: XOR<applicationUpdateManyMutationInput, applicationUncheckedUpdateManyWithoutUserInput>;
  };

  export type bugUpsertWithWhereUniqueWithoutUserInput = {
    where: bugWhereUniqueInput;
    update: XOR<bugUpdateWithoutUserInput, bugUncheckedUpdateWithoutUserInput>;
    create: XOR<bugCreateWithoutUserInput, bugUncheckedCreateWithoutUserInput>;
  };

  export type bugUpdateWithWhereUniqueWithoutUserInput = {
    where: bugWhereUniqueInput;
    data: XOR<bugUpdateWithoutUserInput, bugUncheckedUpdateWithoutUserInput>;
  };

  export type bugUpdateManyWithWhereWithoutUserInput = {
    where: bugScalarWhereInput;
    data: XOR<bugUpdateManyMutationInput, bugUncheckedUpdateManyWithoutUserInput>;
  };

  export type deploymentUpsertWithWhereUniqueWithoutUserInput = {
    where: deploymentWhereUniqueInput;
    update: XOR<deploymentUpdateWithoutUserInput, deploymentUncheckedUpdateWithoutUserInput>;
    create: XOR<deploymentCreateWithoutUserInput, deploymentUncheckedCreateWithoutUserInput>;
  };

  export type deploymentUpdateWithWhereUniqueWithoutUserInput = {
    where: deploymentWhereUniqueInput;
    data: XOR<deploymentUpdateWithoutUserInput, deploymentUncheckedUpdateWithoutUserInput>;
  };

  export type deploymentUpdateManyWithWhereWithoutUserInput = {
    where: deploymentScalarWhereInput;
    data: XOR<deploymentUpdateManyMutationInput, deploymentUncheckedUpdateManyWithoutUserInput>;
  };

  export type testUpsertWithWhereUniqueWithoutUserInput = {
    where: testWhereUniqueInput;
    update: XOR<testUpdateWithoutUserInput, testUncheckedUpdateWithoutUserInput>;
    create: XOR<testCreateWithoutUserInput, testUncheckedCreateWithoutUserInput>;
  };

  export type testUpdateWithWhereUniqueWithoutUserInput = {
    where: testWhereUniqueInput;
    data: XOR<testUpdateWithoutUserInput, testUncheckedUpdateWithoutUserInput>;
  };

  export type testUpdateManyWithWhereWithoutUserInput = {
    where: testScalarWhereInput;
    data: XOR<testUpdateManyMutationInput, testUncheckedUpdateManyWithoutUserInput>;
  };

  export type applicationCreateManyCompanyInput = {
    id?: string;
    app_name: string;
    app_version: string;
    user_id: string;
    app_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type deploymentCreateManyCompanyInput = {
    id?: string;
    deployment_name: string;
    deployment_version: string;
    deployment_status: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicationUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    app_name?: StringFieldUpdateOperationsInput | string;
    app_version?: StringFieldUpdateOperationsInput | string;
    app_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutApplicationNestedInput;
  };

  export type applicationUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    app_name?: StringFieldUpdateOperationsInput | string;
    app_version?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    app_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicationUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    app_name?: StringFieldUpdateOperationsInput | string;
    app_version?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    app_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type deploymentUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    deployment_name?: StringFieldUpdateOperationsInput | string;
    deployment_version?: StringFieldUpdateOperationsInput | string;
    deployment_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutDeploymentNestedInput;
    test?: testUpdateManyWithoutDeploymentNestedInput;
  };

  export type deploymentUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    deployment_name?: StringFieldUpdateOperationsInput | string;
    deployment_version?: StringFieldUpdateOperationsInput | string;
    deployment_status?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    test?: testUncheckedUpdateManyWithoutDeploymentNestedInput;
  };

  export type deploymentUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    deployment_name?: StringFieldUpdateOperationsInput | string;
    deployment_version?: StringFieldUpdateOperationsInput | string;
    deployment_status?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type testCreateManyDeploymentInput = {
    id?: string;
    test_name: string;
    test_result: string;
    user_id: string;
    test_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type testUpdateWithoutDeploymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    test_name?: StringFieldUpdateOperationsInput | string;
    test_result?: StringFieldUpdateOperationsInput | string;
    test_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bug?: bugUpdateManyWithoutTestNestedInput;
    user?: userUpdateOneRequiredWithoutTestNestedInput;
  };

  export type testUncheckedUpdateWithoutDeploymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    test_name?: StringFieldUpdateOperationsInput | string;
    test_result?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    test_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bug?: bugUncheckedUpdateManyWithoutTestNestedInput;
  };

  export type testUncheckedUpdateManyWithoutDeploymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    test_name?: StringFieldUpdateOperationsInput | string;
    test_result?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    test_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bugCreateManyTestInput = {
    id?: string;
    bug_name: string;
    bug_status: string;
    user_id: string;
    bug_description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bugUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bug_name?: StringFieldUpdateOperationsInput | string;
    bug_status?: StringFieldUpdateOperationsInput | string;
    bug_description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutBugNestedInput;
  };

  export type bugUncheckedUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bug_name?: StringFieldUpdateOperationsInput | string;
    bug_status?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    bug_description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bugUncheckedUpdateManyWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bug_name?: StringFieldUpdateOperationsInput | string;
    bug_status?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    bug_description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicationCreateManyUserInput = {
    id?: string;
    app_name: string;
    app_version: string;
    company_id: string;
    app_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bugCreateManyUserInput = {
    id?: string;
    bug_name: string;
    bug_status: string;
    test_id: string;
    bug_description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type deploymentCreateManyUserInput = {
    id?: string;
    deployment_name: string;
    deployment_version: string;
    deployment_status: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type testCreateManyUserInput = {
    id?: string;
    test_name: string;
    test_result: string;
    deployment_id: string;
    test_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    app_name?: StringFieldUpdateOperationsInput | string;
    app_version?: StringFieldUpdateOperationsInput | string;
    app_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutApplicationNestedInput;
  };

  export type applicationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    app_name?: StringFieldUpdateOperationsInput | string;
    app_version?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    app_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    app_name?: StringFieldUpdateOperationsInput | string;
    app_version?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    app_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bugUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bug_name?: StringFieldUpdateOperationsInput | string;
    bug_status?: StringFieldUpdateOperationsInput | string;
    bug_description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    test?: testUpdateOneRequiredWithoutBugNestedInput;
  };

  export type bugUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bug_name?: StringFieldUpdateOperationsInput | string;
    bug_status?: StringFieldUpdateOperationsInput | string;
    test_id?: StringFieldUpdateOperationsInput | string;
    bug_description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bugUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bug_name?: StringFieldUpdateOperationsInput | string;
    bug_status?: StringFieldUpdateOperationsInput | string;
    test_id?: StringFieldUpdateOperationsInput | string;
    bug_description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type deploymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    deployment_name?: StringFieldUpdateOperationsInput | string;
    deployment_version?: StringFieldUpdateOperationsInput | string;
    deployment_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutDeploymentNestedInput;
    test?: testUpdateManyWithoutDeploymentNestedInput;
  };

  export type deploymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    deployment_name?: StringFieldUpdateOperationsInput | string;
    deployment_version?: StringFieldUpdateOperationsInput | string;
    deployment_status?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    test?: testUncheckedUpdateManyWithoutDeploymentNestedInput;
  };

  export type deploymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    deployment_name?: StringFieldUpdateOperationsInput | string;
    deployment_version?: StringFieldUpdateOperationsInput | string;
    deployment_status?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type testUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    test_name?: StringFieldUpdateOperationsInput | string;
    test_result?: StringFieldUpdateOperationsInput | string;
    test_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bug?: bugUpdateManyWithoutTestNestedInput;
    deployment?: deploymentUpdateOneRequiredWithoutTestNestedInput;
  };

  export type testUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    test_name?: StringFieldUpdateOperationsInput | string;
    test_result?: StringFieldUpdateOperationsInput | string;
    deployment_id?: StringFieldUpdateOperationsInput | string;
    test_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bug?: bugUncheckedUpdateManyWithoutTestNestedInput;
  };

  export type testUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    test_name?: StringFieldUpdateOperationsInput | string;
    test_result?: StringFieldUpdateOperationsInput | string;
    deployment_id?: StringFieldUpdateOperationsInput | string;
    test_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use DeploymentCountOutputTypeDefaultArgs instead
   */
  export type DeploymentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    DeploymentCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use TestCountOutputTypeDefaultArgs instead
   */
  export type TestCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    TestCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use applicationDefaultArgs instead
   */
  export type applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    applicationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use bugDefaultArgs instead
   */
  export type bugArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = bugDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use deploymentDefaultArgs instead
   */
  export type deploymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    deploymentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use testDefaultArgs instead
   */
  export type testArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = testDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
