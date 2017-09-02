// tslint:disable:max-classes-per-file
import { SortedSet } from '../../src/decorator/impl/collection/sorted-set.decorator'
import { TypedArray } from '../../src/decorator/impl/collection/typed-array.decorator'
import { Model } from '../../src/decorator/impl/model/model.decorator'
import { Property } from '../../src/decorator/impl/property/property.decorator'
import { NestedComplexModel } from './nested-complex.model'

@Model()
export class ProductNested {
  /*
   * introduce new decorators
   */
  // @SortedArray()
  // @Set()
  // @Date()
  @SortedSet() collection: Set<string>

  counter = 0

  constructor() {
    this.collection = new Set<string>()
    for (let i = 0; i < 3; i++) {
      this.collection.add(`value${++this.counter}`)
    }
  }
}

@Model()
export class Product {
  @Property() nestedValue: NestedComplexModel

  // @Type(Array, ProductNested)
  @TypedArray(ProductNested) list: ProductNested[]

  constructor() {
    this.nestedValue = new NestedComplexModel()
    this.list = []
    this.list.push(new ProductNested())
  }
}