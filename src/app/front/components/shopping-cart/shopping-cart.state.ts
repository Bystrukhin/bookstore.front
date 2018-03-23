import { Book } from '../../../models/book';
import {ShoppingCartComponent} from './shopping-cart.component';

export interface ShoppingCartState {
    quantity: number;
    cartTotal: number;
    products: any[];
}
