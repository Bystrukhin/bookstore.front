export interface Order {
    order_id: number;
    order_date: string;
    total_price: number;
    shipping: string;
    customer_email: string;
    customer_first_name: string;
    customer_second_name: string;
    phone_number: string;
    address: string;
    city: string;
    postal_code: string;
    country: string;
}
